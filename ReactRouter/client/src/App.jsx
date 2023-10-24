import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import About from './pages/about';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Default from './pages/default';
import AgregarProducto from './pages/agregarProd';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='about' element={<About/>}></Route>;
          <Route path='/' element={<Home/>}></Route>;
          <Route path='dashboard' element={<Dashboard/>}></Route>;
          <Route path='AgregarProducto' element={<AgregarProducto/>}></Route>;
          <Route path='*' element={<Default/>}></Route>;
        </Route>
      </Routes>
    </div>
  );
}

export default App;
