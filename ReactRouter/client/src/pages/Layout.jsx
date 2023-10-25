import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const foto = require("./img/moom.png");

const Layout = () => {
    return <div>
        <div className="bg-primary w-100 d-flex flex-row justify-content-between">
            <nav className="navbar navbar-expand-lg">
                <div className="d-flex pe-3 ps-3">
                    <Link to="/" className="navbar-brand">CoWork</Link>
                    <div className="navbar-nav flex-row">
                        <Link to="/About" className="nav-link me-1">About</Link>
                        <Link to="/Dashboard" className="nav-link me-1">Dashboard</Link>
                        <Link to="/AgregarProducto" className="nav-link me-1">AgregarProducto</Link>
                    </div>
                </div>
            </nav>
            <div className="h-auto p-2">
                <Link to="/Login" className="d-flex flex-row">
                    <div style={{width: 3 + "rem"}}>
                        <img src={foto} alt="" className="card-img-top rounded-circle"/>
                    </div>
                </Link>
            </div>
        </div>
        <div>
        <Outlet/>
        </div>
    </div>;
}

export default Layout;