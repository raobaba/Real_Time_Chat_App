import React,{useState} from 'react'
import './Join.css';
import { Link } from 'react-router-dom';
let user;
const sendUser = ()=>{
    user = document.getElementById('JoinInput').value;
    document.getElementById('JoinInput').value = "";
}
export default function Join() {
    const [name, setName] = useState('')
    return (
        <div className='JoinPage'>
            <div className="joinContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrXZVZ_k8D8uIp26P9IgaJhScJ_h3NgbqdCudLWY0&s" alt="logo" />
                <h1>CHAT APP</h1>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' id="JoinInput" />
                <Link to={'/chat'} onClick={(e)=>!name ? e.preventDefault():null}>
                    <button onClick={()=>sendUser()} className='JoinButton'>LogIn</button>
                </Link>
            </div>
        </div>
    )
}
export {user};