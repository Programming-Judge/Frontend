import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Problem from "./components/Problem";
import ProblemSet from "./components/ProblemSet";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/problemset" element={<ProblemSet />} />
        <Route exact path="/problem/:id" element={<Problem />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
