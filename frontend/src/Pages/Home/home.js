import "./home.css";
import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import HomeImage from "../../Assets/images/home-img.png";
import Grow from "../../Assets/images/groww.png";
import Biz from "../../Assets/images/biz.jpg";
import Yahoo from "../../Assets/images/yahoo.png";
import Rakuten from "../../Assets/images/rakuten.png";
import Goldman from "../../Assets/images/gold.png";
import amazon from "../../Assets/images/amazon.png";
import amdocs from "../../Assets/images/amdocs.png";
import atos from "../../Assets/images/atos.jpg";
import barclays from "../../Assets/images/barclays.png";
import capgemini from "../../Assets/images/capgemini.png";
import cdac from "../../Assets/images/cdac.png";
import citi from "../../Assets/images/citi.png";
import compass from "../../Assets/images/compass.png";
import crowd from "../../Assets/images/crowd.png";
import cybage from "../../Assets/images/cybage.png";
import deutsche from "../../Assets/images/deutsche.png";
import eqtechnologic from "../../Assets/images/eqtechnologic.png";
import ericsson from "../../Assets/images/ericsson.png";
import media from "../../Assets/images/media.png";
import nvidia from "../../Assets/images/nvidia.png";
import persistant from "../../Assets/images/persistant.png";
import phone from "../../Assets/images/phone.png";
import pubmatic from "../../Assets/images/pubmatic.png";
import symantec from "../../Assets/images/symantec.png";
import Slider from "../../Components/SlidingCards/Slider.js"
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1,
          margin: 40
      }}
  />
);

const Home = () => {
  return (
    <>
      <Container>
        <Row className="row">
          <Col xs={6} md={8}>
            <h1 className="head1">Made easy to find your Dream Job </h1>
            <h4 className="head2">Explore all campus jobs and internships at one place &amp; get the job of your dream.</h4>
          </Col>
          <Col xs={6} md={4}>
            <img src={HomeImage} className="home-img"/>
          </Col>
        </Row>
      </Container>
      
      <ColoredLine color="black" />

      <Slider/>

      <ColoredLine color="black" />
      
      <h2 className="sub-headings">Top Recruiters</h2>
      <Container>
        <Row>
          <Col>
          <img src={Grow} className="com-img"/>
          </Col>
          <Col>
          <img src={Biz} className="com-img"/>
          </Col>
          <Col>
          <img src={Yahoo} className="com-img"/>
          </Col>
          <Col>
          <img src={Rakuten} className="com-img"/>
          </Col>
          <Col>
          <img src={Goldman} className="com-img"/>
          </Col>
          <Col>
          <img src={symantec} className="com-img"/>
          </Col>
        </Row>

        <Row>
          <Col>
          <img src={amazon} className="com-img"/>
          </Col>
          <Col>
          <img src={atos} className="com-img"/>
          </Col>
          <Col>
          <img src={amdocs} className="com-img"/>
          </Col>
          <Col>
          <img src={barclays} className="com-img"/>
          </Col>
          <Col>
          <img src={capgemini} className="com-img"/>
          </Col>
          <Col>
          <img src={cdac} className="com-img"/>
          </Col>
        </Row>
      </Container>

    <Container>
      <Row>
          <Col>
          <img src={citi} className="com-img"/>
          </Col>
          <Col>
          <img src={compass} className="com-img"/>
          </Col>
          <Col>
          <img src={crowd} className="com-img"/>
          </Col>
          <Col>
          <img src={eqtechnologic} className="com-img"/>
          </Col>
          <Col>
          <img src={deutsche} className="com-img"/>
          </Col>
          <Col>
          <img src={cybage} className="com-img"/>
          </Col>
        </Row>
      </Container>

      <Container>
      <Row>
          <Col>
          <img src={ericsson} className="com-img"/>
          </Col>
          <Col>
          <img src={media} className="com-img"/>
          </Col>
          <Col>
          <img src={nvidia} className="com-img"/>
          </Col>
          <Col>
          <img src={phone} className="com-img"/>
          </Col>
          <Col>
          <img src={persistant} className="com-img"/>
          </Col>
          <Col>
          <img src={pubmatic} className="com-img"/>
          </Col>
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
