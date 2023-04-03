import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
function App() {

  return (
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/chat' Component={ChatPage} />
    </Routes>
  );
}

export default App;
