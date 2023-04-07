import './App.css';
import {Routes,Route} from 'react-router-dom';
import Chat from './Pages/Chat';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {

  return (
    <div className='App'>
     <Routes>
       <Route path='/' Component={Chat} />
       <Route path='/register' Component={Register} />
       <Route path='/login' Component={Login} />
       <Route />
     </Routes>
    </div>
  );
}

export default App;
