import { Route, Routes } from 'react-router-dom';
import './App.css';
import Baner from './Components/Baner/Baner';
import Header from './Components/Header/Header';

import Products from './Components/Products/Products';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path='/' element={<Baner></Baner>}></Route>
      {/* <Route path='/' element={<Home></Home>}></Route> */}
      <Route path='/product' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
