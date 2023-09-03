import React, { useContext } from 'react'
import { ThemeContext } from '../App';
import {
    Link
} from "react-router-dom";
import "../App.css"

const NavBar = (props) => {
    const styles = useContext(ThemeContext)
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${styles} bg-${styles}`}>
                <div className="container-fluid">
                    <Link to='/general'>
                        <img src={process.env.REACT_APP_LOGO_IMAGE_PATH} className="rounded-pill mx-2" width="80" alt="Global News Logo" />
                    </Link>
                    <Link className="navbar-brand" to="/general">Global News</Link>
                    <button className="navbar-toggler text-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        </ul>
                        <form className="d-flex">
                            <input id='searchBox' className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="button">Search</button>
                        </form>
                        <div className="form-check form-switch mx-3">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.ToggleTheme} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: `${styles === "light" ? "black":"white"}`}} >{`Enable ${styles === "light" ? "Dark" : "Light"} Mode`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
