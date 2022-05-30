import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      {<NavBar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
