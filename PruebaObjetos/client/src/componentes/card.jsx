import "./card.css";
import 'bootstrap/dist/css/bootstrap.css';

function crearTarjeta() {
    var contenedor = document.getElementById('contenedor');

    var nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.className = 'card me-2 ms-2 mb-2 tarjeta';

    if ((document.getElementById("datos").value) != ""){
        var tituloTarjeta = document.createTextNode(document.getElementById("titulo").value);
        tituloTarjeta.className = "fs-4"
        var contenidoTarjeta = document.createTextNode(document.getElementById("datos").value);

        var cardTitle = document.createElement('div');
        cardTitle.className = 'card-body'
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        cardTitle.appendChild(tituloTarjeta);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(contenidoTarjeta);
        nuevaTarjeta.appendChild(cardBody);

        var botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn btn-danger';
        botonEliminar.onclick = function () {
            contenedor.removeChild(nuevaTarjeta);
        };

        nuevaTarjeta.appendChild(botonEliminar);
        contenedor.appendChild(nuevaTarjeta);

        document.getElementById("datos").value = ""; //Limpia el input
        document.getElementById("titulo").value = ""; //Limpia el input
    }else{
        return alert("Deben de Haber Datos en los Campos de Texto!")
    }
}

function tarjetaApp() {
    return <div className="bg-secondary vh-100 p-4">
        <div>
            <div class="input-group mb-3"> 
                <input type="text" class="form-control border-black" placeholder="Titulo" id="titulo"/>
                <input type="text" class="form-control border-black" placeholder="Datos" id="datos"/>
                <button class="btn btn-info border-black" type="button" onClick={crearTarjeta} >Crear Tarjeta</button> 
            </div>
            <div id="contenedor" className="d-flex flex-row flex-wrap"></div>
        </div>
    </div>
}

export default tarjetaApp;
