import "./App.css";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Projects from "./components/Projects/Project";
import ProjectDetail from "./components/Projects/ProjectDetail";
import ProjectFolder from "./components/Projects/ProjectFolder";
import Contact from "./components/Contact";
import Team from "./components/Team";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Logo from "./Assets/oracon-logo-wsp.jpg";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project/:idFolder" element={<ProjectFolder />} />
          <Route path="/project/:idFolder/:id" element={<ProjectDetail />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
      <FloatingWhatsApp
        phoneNumber={+5493364603431}
        accountName={"Obracon"}
        avatar={Logo}
        statusMessage={"En línea"}
        chatMessage={"Hola, en que podemos ayudarte?"}
      />
    </div>

  );
}

export default App;
