import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import "./App.css";
import Navbar from "./Components/Navbar/Navbarholde";
import Erroe404 from "./Pages/404/Erroe404";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Erroe404/>}/>

      </Routes>
    </>
  );
}

export default App;