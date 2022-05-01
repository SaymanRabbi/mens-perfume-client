import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css'
import Register from './Components/Login/Register';
import ManagesItem from './Components/ManagesItem/ManagesItem';
import Myitem from './Components/Myitem/Myitem';
import AddItem from './Components/AddItem/AddItem';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
      
        
        <Route path='/' element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
      
        
        <Route path='/product' element={<RequireAuth><Products></Products>  </RequireAuth>}></Route>
      
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path ='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
        <Route path='/managesitem' element={<ManagesItem></ManagesItem>}></Route>
       
        <Route path='/myitem' element={<Myitem></Myitem>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
