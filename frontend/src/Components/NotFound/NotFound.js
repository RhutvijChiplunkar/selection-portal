import './NotFound.css';
import { Link } from 'react-router-dom';
import React from "react";
const NotFound = () => {
    return ( 
    <div className="coantainer-fluid">
        <main>
            {/* <h1>4<span><i class="fa fa-snapchat-ghost" aria-hidden="true" spooky/></span>4</h1> */}
            <h1 classname="notfound-heading"><span>404</span></h1>
            <h2>Error : 404 page not found</h2>
            <p>Sorry, the page you're looking for cannot be accessed !</p>
            <Link to="/Home">Go to Home....</Link>
        </main>  
    </div>
     );
}
 
export default NotFound;