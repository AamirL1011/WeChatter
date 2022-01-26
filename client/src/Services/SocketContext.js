import React, {createContext, useState, useRef, useEffect} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

let socket = io('http://localhost:5000');


const ContextProvider = ({children}) => {

    const localFeed = useRef();
    const connectionRef = useRef();
    

    const [stream, setStream] = useState(null);
    const [local, setLocal] = useState('');
    const [name, setName] = useState('');
    const [meetingAccepted, setMeetingAccepted] = useState(false);
    const [meetingEnded, setMeetingEnded] = useState(false);
    const [remoteFeeds, setRemoteFeeds] = useState([]);
    const [remoteFeedBank, setRemoteFeedBank] = useState([]);
    const [remoteStreams, setRemoteStreams] = useState([]);
    const [meeting, setMeeting] = useState({});
    const [numStreams, setNumStreams] = useState(1);



    useEffect(() => {
        socket = io('http://localhost:5000');
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) => {
            setStream(currentStream);
            localFeed.current.srcObject = currentStream;
        });
        socket.on('local', (id) => {
            setLocal(id);
        });

        socket.on('joinmeeting', ({from, name: callerName, signal}) => {
            setMeeting({hasReceivedRequest: true, from, name: callerName, signal})
        })

    

    }, [meetingEnded]);



    // ========================================================================================
   /*  const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);


    const myVideoFeed = useRef();
    const otherVideoFeed = useRef();
    const connectionRef = useRef();
 */

   /*  useEffect(() => {
        socket = io('http://localhost:5000');
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) => {
            setStream(currentStream);
            myVideoFeed.current.srcObject = currentStream;
        });
        socket.on('me', (id) => {
            setMe(id);
        });
        socket.on('calluser', ({from, name: callerName, signal}) => {
            setCall({hasReceivedCall: true, from, name: callerName, signal})
        })
    }, [callEnded]);
 */
    //=========================================---FUNCTIONS---============================================
   /*  const answerCall = () => {
        setCallAccepted(true);
        setCallEnded(false);
        const peer = new Peer({initiator: false, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('answercall', {signal: data, to: call.from });
        })
        peer.on('stream', (currentStream) => {
            otherVideoFeed.current.srcObject = currentStream;
        } );

        peer.signal(call.signal);

        connectionRef.current = peer;
    }
    const callUser = (id) => {
        const peer = new Peer({initiator: true, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('calluser', {userToCall: id, signalData: data, from: me, name});
        })
        peer.on('stream', (currentStream) => {
            otherVideoFeed.current.srcObject = currentStream;
        } );

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        } )
        connectionRef.current = peer;
    }
    const leaveCall = () => {
        setCallEnded(true);
        setCallAccepted(false);
        setStream(null);
        setCall('');
        connectionRef.current.destroy();
    } */

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
        setNumStreams(num => num+1);
        peer.signal(meeting.signal);
        connectionRef.current = peer;
    }

    const joinMeeting = (id) => {
        console.log("join meeting called");
        const peer = new Peer({initiator: true, trickle: false, stream });
        console.log("peer created");
        peer.on('signal', (data) => {
            socket.emit('joinmeeting', {meetingToJoin: id, signalData: data, from: local, name});
            console.log("signal sent");
        })
        
        peer.on('stream', (remoteStream) => {
            setRemoteStreams(arr => [...arr, remoteStream]);
            console.log("join meeting remote stream done");
        } );
       
        socket.on('entryaccepted', (signal) => {
            setMeetingAccepted(true);
            peer.signal(signal);
            console.log("entry accpeted");
        } )
        
        connectionRef.current = peer;
    }

    const leaveMeeting = () => {
        setMeetingEnded(true);
        setMeetingAccepted(false);
        setStream(null);
        setMeeting('');
        setNumStreams(num => num-1);
        connectionRef.current.destroy();
        setMeetingEnded(false);
    }

    const endMeeting = () => {
        socket.emit('meetingended');
        setMeetingEnded(true);
        setMeetingAccepted(false);
        setStream(null);
        setMeeting('');
        setNumStreams(num => num-1);
        connectionRef.current.destroy();
        setMeetingEnded(false);
    }

    //===============================================================================================


    return (
        <SocketContext.Provider value={{
            meeting,
            setMeetingAccepted,
            meetingAccepted,
            localFeed,
            remoteFeeds,
            remoteStreams,
            stream,
            name,
            setName,
            meetingEnded,
            local,
            joinMeeting,
            leaveMeeting,
            endMeeting,
            answerJoin,
        }}>
             {children}   
        </SocketContext.Provider>
    )
}

export {ContextProvider, SocketContext};