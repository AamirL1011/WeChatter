import React, {createContext, useState, useRef, useEffect} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

let socket = io('http://localhost:5000');


const ContextProvider = ({children}) => {

    const connectionRef = useRef();
    

    const [stream, setStream] = useState(null);
    const [callWaiting, setCallWaiting] = useState(false);
    const [local, setLocal] = useState('');
    const [roomID, setRoomID] = useState('');
    const [name, setName] = useState('');
    const [meetingAccepted, setMeetingAccepted] = useState(false);
    const [meetingEnded, setMeetingEnded] = useState(false);
    const [remoteStreams, setRemoteStreams] = useState([]);
    const [meeting, setMeeting] = useState({});
    const [numStreams, setNumStreams] = useState(1);


    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) => {
            setStream(currentStream);
        });
    }, [meetingAccepted])

    useEffect(() => {
        socket = io('http://localhost:5000');

        socket.on('local', (id) => {
            setLocal(id);
            setRoomID(id);
        });

        socket.on('joinmeeting', ({from, name: callerName, signal}) => {
            setMeeting({hasReceivedRequest: true, from, name: callerName, signal})
        })


    }, [meetingEnded]);


    //======================================---MEETING FUNCTIONS---==========================================


    const answerJoin = () => {
        if (numStreams >= 2) {
           /*  const peerTemp = new Peer({initiator: false, trickle: false, stream });
            peer.on('signal', (data) => {
            socket.emit('refuseentry', {signal: data, to: call.from });
        }) */
        return;
        }
        console.log("answer join run");
        //setMeetingEnded(false);
        const peer = new Peer({initiator: false, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('allowentry', {signal: data, to: meeting.from });
            console.log("allow entry emmited");
        });

        peer.on('stream', (remoteStream) => {
            setRemoteStreams(arr => [...arr, remoteStream]);
            console.log("anser join remote stream created");
        } );

        socket.on('meetingended', (meetingID) => {
            if (meetingID == roomID) {
                setRemoteStreams([]);
                setMeetingAccepted(false);
                setRoomID(local);
                window.location.reload();
            }
        });

        setNumStreams(num => num+1);
        peer.signal(meeting.signal);
        connectionRef.current = peer;
    }


    const joinMeeting = (id) => {
        setRoomID(id);
        setCallWaiting(true);
        console.log("join meeting called");
        setNumStreams(num => num+1);
        const peer = new Peer({initiator: true, trickle: false, stream });
        console.log("peer created");
        peer.on('signal', (data) => {
            socket.emit('joinmeeting', {meetingToJoin: id, signalData: data, from: local, name});
            console.log("signal sent");
        })
        
        peer.on('stream', (remoteStream) => {
            setRemoteStreams(arr => [...arr, remoteStream]);
            setCallWaiting(false);
            console.log("join meeting remote stream done");
        } );
       
        socket.on('entryaccepted', (signal) => {
            setMeetingAccepted(true);
            peer.signal(signal);
            console.log("entry accpeted");
        } )

        socket.on('meetingended', (meetingID) => {
            if (meetingID == roomID) {
                setRemoteStreams([]);
                setMeetingAccepted(false);
                setRoomID(local);
                window.location.reload();
            }
        });

        connectionRef.current = peer;
    }

    const changeRoomID = (id) => {
        setRoomID(id);
    }

    const leaveMeeting = () => {
        //connectionRef.current.removeStream(stream);
        //connectionRef.current.off("signal");
        setRemoteStreams([]);
        socket.emit('meetingended', roomID);
        setMeetingAccepted(false);
        setRoomID(local);
        setStream(null);
        setMeeting('');
        setMeetingEnded(true);
        setNumStreams(num => num-1);
        connectionRef.current.destroy();
        setMeetingEnded(false);
        window.location.reload();
    }

    const endMeeting = () => {
        socket.emit('meetingended');
        setMeetingEnded(true);
        setMeetingAccepted(false);
        setRoomID(local);
        setStream(null);
        setRemoteStreams([]);
        setMeeting('');
        setNumStreams(num => num-1);
        connectionRef.current.destroy();
        setMeetingEnded(false);
        //window.location.reload();
    }

    //===============================================================================================


    return (
        <SocketContext.Provider value={{
            meeting,
            changeRoomID,
            setMeetingAccepted,
            setMeetingEnded,
            meetingAccepted,
            remoteStreams,
            stream,
            setStream,
            roomID,
            name,
            setName,
            meetingEnded,
            local,
            joinMeeting,
            leaveMeeting,
            endMeeting,
            answerJoin,
            callWaiting,
        }}>
             {children}   
        </SocketContext.Provider>
    )
}

export {ContextProvider, SocketContext};