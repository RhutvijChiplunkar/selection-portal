import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";
import JobList from "./Pages/JobList/JobList";
import Home from "./Pages/Home/home";
import ApplyForm from "./Pages/applyForm/applyForm";
import Navbar from "./Components/Navbar/Navbar";
import Foooter from "./Components/Footer/Foooter";
import ContactUs from "./Pages/ContactUs/ContactUs";
import JobDetailsPage from "./Pages/JobDetails/JobDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
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

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
