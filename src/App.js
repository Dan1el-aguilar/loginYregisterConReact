import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
const [ isLogin ] = useState(localStorage.getItem("token") || false)

  return (
    
     <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/registro' element={isLogin ? <Home/> : <Register/>}/>
          <Route path='/login' element={isLogin ? <Home/> : <Login/>}/>
        </Routes>
     </BrowserRouter>
    
  );
}

export default App;