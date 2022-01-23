import React, {createContext, useState, useRef, useEffect} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io('http://localhost:5000');

const ContextProvider = ({children}) => {

    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);


    const myVideoFeed = useRef();
    const otherVideoFeed = useRef();
    const connectionRef = useRef();


    useEffect(() => {
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
    }, []);

    //=========================================---FUNCTIONS---============================================
    const answerCall = () => {
        setCallAccepted(true);

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
        connectionRef.current.destroy();
        // TODO: Find workaround, for getting new user id
        window.location.reload();
    }

    return (
        <SocketContext.Provider value={{
            call,
            callAccepted,
            myVideoFeed,
            otherVideoFeed,
            stream,
            name,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall,
        }}>
             {children}   
        </SocketContext.Provider>
    )
}

export {ContextProvider, SocketContext};