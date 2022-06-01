import "./home.css";
import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import HomeImage from "../../Assets/images/home-img.png";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="row">
          <Col><h1 className="head">Made easy to find your Dream Job <br />Explore all campus jobs in one place &amp; get the job of your dream.</h1></Col>
          <Col><img src={HomeImage} className="home-img"/></Col>
        </Row>
      </Container>
      
      
      {/* <div className="home">
        <div className="notices">
          <h3 className="head">Notice Board</h3>
          <ol>
            <li>
              
            </li>
            <li>
              box-shadow wereLorem Ipsum All of these box-shadow were copied
              using copied using Lorem Ipsum
            </li>
            <li>
              Lorem box-shadow wereLorem Ipsum All of these box-shadow were
              copied using copied using Lorem Ipsum
            </li>
            <li>
              LoremLorem box-shadow wereLorem Ipsum All of these box-shadow were
              copied using copied using Lorem Ipsum Ipsum
            </li>
            <li>
              Lorem Lorem box-shadow wereLorem Ipsum All of these box-shadow
              were copied using copied using Lorem IpsumIpsum
            </li>
          </ol>
        </div>
        <div className="tiles-container">
          <div className="tiles-container">
            <div className="tile">
              <h3 className="head">Jobs</h3>
              <div className="content">
                <ul>
                  <li>
                    <h5>Deutsche Bank</h5>
                    :- Internship (TE - CS and IT)
                  </li>
                  <li>
                    <h5>Nice</h5>
                    :- Internship (TE - CS and IT)
                  </li>
                  <li>
                    <h5>Arista Networks</h5>
                  </li>
                  <li>
                    <h5>PhonePe</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tile">
              <h3 className="head">Applied Jobs</h3>
              <div className="content">
                <ul>
                  <li>
                    <h5>Veritas Technologies</h5>
                  </li>
                  <li>
                    <h5>Deutsche Bank</h5>
                    :- Internship (TE - CS and IT)
                  </li>
                </ul>
              </div>
            </div>
            <div className="tile">
              <h3 className="head">Profile</h3>
              <div className="content">
                <ul>
                  <li>
                    <b>Name:</b> Vedant Daigavane
                  </li>
                  <li>
                    <b>Email:</b> vedantd9@gmail.com
                  </li>
                  <li>
                    <b>College ID:</b> IK19112723
                  </li>
                </ul>
              </div>
            </div>
            <div className="tile">
              <h3 className="head">Messages</h3>
              <div className="content">
                <ul>
                  <li>
                    <b>Veritas Technologies</b>
                    <p>
                      Your application is shortlisted for Interviews, kindly
                      check your mail.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
    </>
  );
};

export default Home;
