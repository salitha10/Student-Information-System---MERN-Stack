import React from 'react'
import {Link} from 'react-router-dom' 

function NavHeader(){

    return (


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" style= {{color: "red"}}>Student Info</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <Link to ="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
                <Link to ="/add" className="nav-link" >Create Student</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default NavHeader