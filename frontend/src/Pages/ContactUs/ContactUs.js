import React from "react";
import './ContactUs.css';
const ContactPage = () => {
    return (
        <div className="wrapper">
            <div className="overlay">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-10">
                        <div className="contact-us text-center">
                            <h2 className="title">Contact Us</h2><br />
                            {/* <p className="mb-5">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p> */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mt-5 text-center px-3">
                                        <div className="d-flex flex-row align-items-center">
                                            <span className="icons">
                                                <i className="fa fa-map-marker"></i></span>
                                            <div className="address text-left">
                                                <span className="pull-left">Address</span><br />
                                                {/* <p>Survey No. 27, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</p> */}
                                                <p>Dhankawadi, Pune. 411043</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mt-3">
                                            <span className="icons">
                                                <i className="fa fa-phone"></i></span>
                                            <div className="address text-left">
                                                <span className="pull-left">Phone</span><br />
                                                <p>+91 20 24364741</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mt-3">
                                            <a href="mailto:placements@pict.edu" target="_blank" rel="noreferrer">
                                                <span className="icons">
                                                    <i className="fa fa-envelope-o"></i></span></a>
                                            <div className="address text-left">
                                                <span className="pull-left">E-mail Address</span><br />
                                                <p>placements@pict.edu</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mt-3">
                                            <a href="https://twitter.com/PICT_TnPCell" target="_blank" rel="noreferrer">
                                                <span className="icons"><i className="fa fa-twitter"></i></span></a>
                                            <div className="address text-left">
                                                <span className="pull-left">Join us at Twitter</span><br />
                                                <p className="pull-left">PICT_TnPCell</p>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mt-3">
                                            <a href="https://facebook.com/PICT_TnPCell" target="_blank" rel="noreferrer">
                                                <span className="icons"><i className="fa fa-facebook"></i></span></a>
                                            <div className="address text-left">
                                                <span className="pull-left">Join us at Facebook</span><br />
                                                <p className="pull-left">PICT_TnPCell</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-center px-1">
                                        <div className="forms p-4 py-5 bg-white">
                                            <h5>Send Message</h5>
                                            <div className="mt-4 inputs">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                                <input type="email" className="form-control" placeholder="Email Address" />
                                                <input type="phone" className="form-control" placeholder="Mobile Number" />
                                                <textarea className="form-control" placeholder="Any Suggestion..."></textarea>
                                            </div>
                                            <div className="button mt-4 text-left">
                                                {/* <button className="btn btn-dark">Send</button>  */}
                                                <input type="submit" id="sendbtn" className="btn btn-dark" value="Send" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
