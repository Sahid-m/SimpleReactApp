import "./App.css";
import AboutPage from "./Components/AboutPage";
import Navbar from "./Components/Navbar.js";
import Textform from "./Components/Textform.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Textform />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
