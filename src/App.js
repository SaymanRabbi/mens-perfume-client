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
import UpdatedProduct from './Components/Products/UpdatedProduct';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
      
        
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
      
        
        <Route path='/product' element={<RequireAuth><Products></Products>  </RequireAuth>}></Route>
      
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path ='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
        <Route path='/managesitem' element={<RequireAuth>
          <ManagesItem></ManagesItem>
        </RequireAuth>}></Route>
       
        <Route path='/myitem' element={<RequireAuth>
          <Myitem></Myitem>
        </RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/updatepd/:id' element={<RequireAuth>
          <UpdatedProduct></UpdatedProduct>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
