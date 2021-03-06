import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Header/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
