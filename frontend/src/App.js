import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";
import JobList from "./Pages/JobList/JobList";
import Home from "./Pages/Home/home";
import ApplyForm from "./Pages/applyForm/applyForm";
import NavBar from "./Components/Navbar/Navbar";
import Foooter from "./Components/Footer/Foooter";
import ContactUs from "./Pages/ContactUs/ContactUs";
import JobDetailsPage from "./Pages/JobDetails/JobDetails";

function App() {
  return (
    <div className="App">
      

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
        <NavBar />
          <Home />
          <Foooter />
        </Route>

        <Route path="/apply">
        <NavBar />
          <ApplyForm />
          <Foooter />
        </Route>

        <Route path="/joblist">
        <NavBar />
          <JobList />
          <Foooter />
        </Route>

        <Route path="/jobdetails">
        <NavBar />
          <JobDetailsPage />
          <Foooter />
        </Route>

        <Route path="/contactus">
        <NavBar />
          <ContactUs />
          <Foooter />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

      
    </div>
  );
}

export default App;
