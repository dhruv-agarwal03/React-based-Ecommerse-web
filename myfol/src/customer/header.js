import { Link } from "react-router-dom";
import logo from './../image/logo.png';
function Header()
{
    
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <Link className="navbar-brand" to="/"><img src={logo} width="50px" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/basket">Basket</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/query">Query</Link>
            </li>
            </ul>            
        </div>
            <div className="p-2 text-white">
                Total Items: , Amount Rs 00/-
            </div>
        </nav>
    );
    }
export default (Header);