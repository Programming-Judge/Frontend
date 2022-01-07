import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Problem from "./components/Problem";
import ProblemSet from "./components/ProblemSet";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/problemset" element={<ProblemSet />} />
        <Route exact path="/problem/:id" element={<Problem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
