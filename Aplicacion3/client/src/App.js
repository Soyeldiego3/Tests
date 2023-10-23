import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import axios from "axios";

function App() {

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  
  const [listaProductos, setProductos] = useState([]);

  const agregarDatos = ()=>{
    axios.post("http://localhost:3001/create",{
      nombre:nombre,
      precio:precio,
      descripcion:descripcion
    }).then(()=>{
      mostrarDatos();
      alert("Datos Guardados!");
    });
  }

  const mostrarDatos = ()=>{
    axios.get("http://localhost:3001/productos").then((response)=>{
      setProductos(response.data);
    });
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-secondary">
      <div className='p-3 bg-white border border-2 border-black'>
        <form>
          <div className='mb-3'>
            <label>Nombre</label>
            <input type="text" placeholder='Nombre' className='form-control border border-2 border-black' onChange={(event)=>{ setNombre( event.target.value ); }}/>
          </div>

          <div className='mb-3'>
            <label>Precio</label>
            <input type="number" placeholder='Precio' className='form-control border border-2 border-black' onChange={(event)=>{ setPrecio( event.target.value ); }}/>
          </div>

          <div className='mb-3'>
            <label>Descripcion</label>
            <input type="text" placeholder='Descripción' className='form-control border border-2 border-black' onChange={(event)=>{ setDescripcion( event.target.value ); }}/>
          </div>

          <button className='btn btn-success' onClick={ agregarDatos }>Guardar</button>
        </form>
      </div>

      <div className='d-flex justify-content-center align-items-center text-center'>
        <div className='p-3 bg-white border border-2 border-black'>
            <button onClick={mostrarDatos} className='btn btn-info mb-4'>Listar Datos</button>
            <div className='p-3'>
              <div className='row'>
                <label className='col border border-1 border-black'>Nombre</label>
                <label className='col border border-1 border-black'>Precio</label>
                <label className='col border border-1 border-black'>Descripcion</label>
              </div>
              {
                listaProductos.map((val, key)=>{
                  return <div className='row'>
                    <div className='col border border-1 border-black'>{val.nombre}</div>
                    <div className='col border border-1 border-black'>{val.precio}</div>
                    <div className='col border border-1 border-black'>{val.descripcion}</div>
                  </div>
                })
              }
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
