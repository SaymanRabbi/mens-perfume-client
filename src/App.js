import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path ='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
