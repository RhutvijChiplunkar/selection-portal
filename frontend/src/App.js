import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Signup from "./Components/Signup/Signup.js";
import NotFound from "./Components/NotFound/NotFound.js";
import JobList from "./Pages/JobList/JobList.js";
import Home from "./Pages/Home/home.js";
import ApplyForm from "./Pages/applyForm/applyForm.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Foooter from "./Components/Footer/Foooter.js";
import ContactUs from "./Pages/ContactUs/ContactUs.js";
import JobDetailsPage from "./Pages/JobDetails/JobDetails.js";
import Test from "./Components/Landing/test.js";
import Internship from "./Pages/Internship/internship";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Login />
          </Route>
          
          <Route exact path="/signup">
            <Signup />
          </Route> */}

          <Route exact path="/">
            <Test />
          </Route>

          <Route path="/home">
            <Navbar />
            <Home />
            <Foooter />
          </Route>

          <Route path="/apply">
            <Navbar />
            <ApplyForm />
            <Foooter />
          </Route>

          <Route path="/joblist">
            <Navbar />
            <JobList />
            <Foooter />
          </Route>

          <Route path="/internship">
            <Navbar />
            <Internship />
            <Foooter />
          </Route>

          <Route path="/jobdetails">
            <Navbar />
            <JobDetailsPage />
            <Foooter />
          </Route>

          <Route path="/contactus">
            <Navbar />
            <ContactUs />
            <Foooter />
          </Route>


          <Route path="/test">
            <Test/>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
