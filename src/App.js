import './App.css';

import Join from "./Component/Join/Join.jsx";
import Chat from './Component/Chat/Chat.jsx';
import {Routes,Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
     <Routes>
       <Route path='/' Component={Join} />
       <Route path='/chat' Component={Chat} />
     </Routes>
    </div>
  );
}

export default App;
