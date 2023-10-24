import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Layout = () => {
    return <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/About" className="nav-link me-1">About</Link>
                    <Link to="/Dashboard" className="nav-link me-1">Dashboard</Link>
                    <Link to="/AgregarProducto" className="nav-link me-1">AgregarProducto</Link>
                </div>
                </div>
            </div>
        </nav>
        <Outlet/>
    </div>;
}

export default Layout;