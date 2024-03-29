import { Button } from 'react-bootstrap';
import './internship.css';
import { Link } from "react-router-dom";
import React from 'react';
import { Card, CardGroup, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import cybage from "../../Assets/images/cybage.png";
import logo from "../../Assets/images/google.png";
import logo1 from "../../Assets/images/microsoft.png";
import logo2 from "../../Assets/images/amazon.png";
import logo3 from "../../Assets/images/adobe.png";

const Internship = () => {

    return (

        <div className="internship">

            <div className="cont">
                <div className="cd">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Google internship</h3>
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
                            <h3 className="mb-0">Microsoft internship</h3>
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
                            <h3 className="mb-0">Amazon internship</h3>
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
                            <h3 className="mb-0">Adobe internship</h3>
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

export default Internship;