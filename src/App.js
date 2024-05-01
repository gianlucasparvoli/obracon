import "./App.css";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Projects from "./components/Projects/Project";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} exact/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
