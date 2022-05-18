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
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/apply">
          <ApplyForm />
        </Route>
        <Route path="/JobList">
          <JobList />
        </Route>
        <Route path="/JobDetails">
          <JobDetailsPage />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Foooter />
    </div>
  );
}

export default App;
