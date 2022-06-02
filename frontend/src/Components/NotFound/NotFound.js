import './NotFound.css';
import { Link } from 'react-router-dom';
import React from "react";
const NotFound = () => {
    return ( 
    <div className="coantainer-fluid">
        <main>
            <h1 className='error-desc'>Error : 404 page not found</h1>
            <p className='para'>Sorry, the page you're looking for cannot be accessed !</p>
            <Link to="/Home">Go to Home....</Link>
        </main>  
    </div>
     );
}
 
export default NotFound;