import "./App.css";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Projects from "./components/Projects/Project";
import ProjectDetail from "./components/Projects/ProjectDetail";
import ProjectFolder from "./components/Projects/ProjectFolder";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:idFolder" element={<ProjectFolder />}/>
          <Route path="/project/:idFolder/:id" element={<ProjectDetail />}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
