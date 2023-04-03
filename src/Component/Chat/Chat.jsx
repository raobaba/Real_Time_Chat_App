import React,{useEffect} from 'react';
import "./Chat.css";
import { user } from "../Join/Join.jsx";
import socketIO from "socket.io-client";
const ENDPOINT = "http://localhost:8000";
export default function Chat() {

    useEffect(() => {
        const socket = socketIO(ENDPOINT,{transports:['websocket']});
      socket.on('connect',()=>{
        alert('connected');
      })
       console.log(socket)

       socket.emit('joined',{user})

       socket.on('welcome',(data)=>{
        console.log(data.user,data.message);
       })

       socket.on('userJoined',(data)=>{
        console.log(data.user,data.message);
       })
       
       socket.on('leave',(data)=>{
          console.log(data.user,data.message);
       })

       return ()=>{
           socket.emit('disconnection');
           socket.off();
       }

    }, [])
    
    return (
        <div className='ChatPage'>
            <div className="ChatContainer">
                <div className="header"></div>
                <div className="ChatBox"></div>
                <div className="InputBox">
                    <input type="text" id='ChatInput' placeholder='write somethig...' />
                    <button className='SendButton'>Send</button>
                </div>
            </div>
        </div>
    )
}
