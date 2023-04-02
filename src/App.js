import './App.css';
import socketIO from "socket.io-client";
const ENDPOINT = 'http://localhost:8000/';
const socket = socketIO(ENDPOINT,{transports:['websocket']})
function App() {
   socket.on('connect',()=>{
    console.log('New Connection')
   })
  return (
    <div className="App">
     <h1>Working</h1>
    </div>
  );
}

export default App;
