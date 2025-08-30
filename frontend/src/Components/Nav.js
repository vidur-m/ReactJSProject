import React from 'react'; // ES6 JS
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to='/welcome'>
                        <button className="nav-item nav-link active">Welcome</button>  
                    </Link>
                    <Link to='/home'>
                        <button className="nav-item nav-link active">Home</button>  
                    </Link>
                    <Link to='/about'>
                        <button className="nav-item nav-link">About</button>  
                    </Link>
                    <Link to='/stats'>
                        <button className="nav-item nav-link">Stats</button>  
                    </Link>
                </div>
            </div>
        
        </nav>
    );
}

export default Nav;