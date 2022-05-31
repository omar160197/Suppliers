import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      {<Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
