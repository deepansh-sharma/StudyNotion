import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import { useState } from "react";
function App() {
  const [isloggedIn, setloggedIn] = useState(false);
  return (
    <div>
      <Navbar isloggedIn={isloggedIn} setloggedIn={setloggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={<Login setloggedIn={setloggedIn} isloggedIn={isloggedIn} />}
        />
        <Route
          path="/Signup"
          element={<Signup setloggedIn={setloggedIn} isloggedIn={isloggedIn} />}
        />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
