import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Problem from "./components/Problem";
import ProblemSet from "./components/ProblemSet";
import SubmissionSet from "./components/SubmissionSet";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateContainerView from "./components/CreateContainerView";
import FileView from "./components/FileView";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/problemset" element={<ProblemSet />} />
        <Route exact path="/submissionset" element={<SubmissionSet />} />
        <Route exact path="/problem/:id" element={<Problem />} />
        <Route exact path="/file/:filename" element={<FileView />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/create" element={<CreateContainerView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
