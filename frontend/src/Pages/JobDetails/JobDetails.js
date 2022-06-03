import React from "react";
import "./JobDetails.css";
import logo from "../../Assets/images/google.png";

const JobDetailsPage = () => {
  return (
    <div className="base">
      <div className="mainHeading">
        <strong>
          Frontend Development work from home job/internship at Google
        </strong>
      </div>
      <div className="container-jobdet">

        <div className="row">
          <div className="col job-type">
              <b>Frontend Development</b>
              <br /><br/>
              <em>GOOGLE</em>
          </div>
          <div className="col company-logo"><img src={logo} alt="Google" height="10%" width="10%" /></div>
        </div>

        <br />
        <div className="row basic-details">
            <div className="col start-date">
                <i className="fa fa-play-circle"></i>
                <span><b>START DATE</b></span>
                <div>Immediately</div>
            </div>

            <div className="col start-date">
            <i className="fa fa-calendar"></i>
                <span><b>DURATION</b></span>
                <div>3 Months</div>
            </div>

            <div className="col start-date">
            <i className="fa fa-money"></i>
                <span><b>STIPEND</b></span>
                <div>Rs 1 lakh /month</div>
            </div>

            <div className="col start-date">
                <i className="fa fa-clock-o"></i>
                <span><b>APPLY BY</b></span>
                <div>1 Dec' 21</div>
            </div>
        
        </div>

        <br />
        <div className="company-description">
            <b>About Company :- </b><br />
            Google LLC is an American multinational technology company that specializes in Internet-related services and products, 
            which include online advertising technologies, a search engine, cloud computing, software, and hardware.<br />
            <a href="https://www.google.co.in/webhp">Visit Website</a>
        </div>

        <br />
        <div id="requirements">
            <div id="looking-for">
                <b>Who can apply?</b>
            </div>
            <div id="requirements-list">
                Only those candidates can apply who:
                <ol>
                    <li>are available for the work from home job/internship</li>
                    <li>can start the work from home job/internship between 1st Dec'21 and 10th Mar'22</li>
                    <li>are available for duration of 3 months</li>
                    <li>have relevant skills and interests</li>
                </ol>
            </div>
        </div>

        
        <div className="skills">
            <div className="section_heading heading_5_5"><b>Skill(s) required</b></div>   
            <div className="round_tabs_container">
                        <span className="round_tabs"><b>JavaScript</b></span>
                        <span className="round_tabs"><b>MEAN/MERN Stack</b></span>
                        <span className="round_tabs"><b>ReactJS</b></span>
                </div>
        </div>

        <br />
        <div className="work">
            <div className="about-work-heading">
                <b>About the work from home job/internship</b>
            </div>
            <div className="about-work-list">
                Selected intern's day-to-day responsibilities include:   
                    <ol>
                        <li>Work on analyzing user needs to design and develop software-based solutions using knowledge of JavaScript frameworks and tools like React, GraphQL, Apollo, Styled Components, etc.</li>
                        <li>Build reusable asynchronous code and react libraries</li>
                        <li>Work on ensuring the technical feasibility of UI/UX designs</li>
                        <li>Work on optimizing the application for maximum speed and scalability</li>
                        <li>Work on designing visual imagery for dashboards and websites, ensuring that they are in line with the company's vision and branding</li>
                        <li>Work with tools like Docker, Webpack, Rollup, etc. to package applications for production</li>
                    </ol>
            </div>
        </div>

        <div className="open">
            <div className="candidates">
                <b>Number of openings</b>
            </div>
            <div className="no">3</div>
        </div>

        <button type="button" className="btn btn-success">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetailsPage;
