import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function ChatPage() {
    const [chat,setChat] = useState([]);
    const fetchChats =async ()=>{
      const {data} = await axios.get('/api/chats');
      setChat(data);
    }
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
      {
        chat.map((ele)=>(
            <div key={ele._id}>
                {ele.chatName}
            </div>
        ))
      }
    </div>
  )
}
