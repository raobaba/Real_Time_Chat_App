import './App.css';

import Join from "./Component/Join/Join.jsx"
import {Routes,Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
     <Routes>
       <Route path='/' Component={Join} />
       <Route />
     </Routes>
    </div>
  );
}

export default App;
