import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import Service from "./components/routes/Service";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> 
    </div>
  );
}

export default App;
