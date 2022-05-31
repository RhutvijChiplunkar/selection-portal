import { Button } from 'react-bootstrap';
import './JobList.css';
import {Link} from "react-router-dom";
import logo from "../../Assets/images/google.png";
import logo1 from "../../Assets/images/microsoft.png";
import logo2 from "../../Assets/images/amazon.png";
import logo3 from "../../Assets/images/adobe.png";

const JobList = () => {
    
    return (

        <div className="joblist">
            
            <div className="cont">
                <div className="cd">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Google</h3>
                            <h2 className="card-text mb-auto">Frontend Developer: React.js</h2>
                            <h2 className="loc"><i className="fa fa-map-marker"></i> Bengaluru, Karnataka</h2>
                            <Link to="/jobdetails"><Button>See details</Button></Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img " width="300" height="250"
                                src={logo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="cd">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Microsoft</h3>
                            <h2 className="card-text mb-auto">Backend Developer: Node.js</h2>
                            <h2 className="loc"><i className="fa fa-map-marker"></i> Pune, Maharashtra</h2>
                            <Link to="/jobdetails"><Button>See details</Button></Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" width="300" height="250"
                               src={logo1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="cd">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Amazon</h3>
                            <h2 className="card-text mb-auto">Frontend Developer: Angular.js</h2>
                            <h2 className="loc"><i className="fa fa-map-marker"></i>Mumbai, Maharashtra</h2>
                            <Link to="/jobdetails"><Button>See details</Button></Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" width="300" height="250"
                                src={logo2} alt="" />
                        </div>
                    </div>
                </div>
                
               <div className="cd">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Adobe</h3>
                            <h2 className="card-text mb-auto">Database engineer: My-SQL</h2>
                            <h2 className="loc"><i className="fa fa-map-marker"></i>Hydrabad, Andhra Pradesh</h2>
                            <Link to="/jobdetails"><Button>See details</Button></Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" width="300" height="250"
                                src={logo3} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default JobList;