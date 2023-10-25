import './App.css';
import { Routes, Route } from 'react-router-dom';

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
