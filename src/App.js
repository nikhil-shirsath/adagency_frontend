import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contanct from "./components/Contanct";
import Service from "./components/Service";
import UserLogin from "./components/UserLogin";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contanct</Link></li>
            <li><Link to="/userlogin">Login</Link></li>

          </ul>
        </nav>
        <Routes>    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/service" element={<Service/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contanct/>} />
                    <Route path="/userlogin" element={<UserLogin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
