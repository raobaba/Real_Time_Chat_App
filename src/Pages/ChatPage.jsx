import React,{useEffect} from 'react'
import axios from 'axios';
export default function ChatPage() {
    const fetchChats =async ()=>{
      const {data} = await axios.get('/api/chats');
      console.log(data);
    }
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
      chat
    </div>
  )
}
