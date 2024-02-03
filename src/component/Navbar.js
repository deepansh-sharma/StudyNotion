import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";
function Navbar(props) {
  let isloggedIn = props.isloggedIn;
  let setloggedIn = props.setloggedIn;
  return (
    <nav className="flex place-content-evenly gap-4 ">
      <div>
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="flex gap-x-4">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className="flex gap-x-4">
        <div>
          {!isloggedIn && (
            <Link to="/Login">
              <buttion>Login</buttion>
            </Link>
          )}
        </div>
        <div>
          {!isloggedIn && (
            <Link to="/Signup">
              <buttion>Signup</buttion>
            </Link>
          )}
        </div>
        <div>
          {isloggedIn && (
            <Link to="/">
              <buttion
                onClick={() => {
                  toast.success("Logged Out!");
                  setloggedIn(false);
                }}
              >
                Logout
              </buttion>
            </Link>
          )}
        </div>
        <div>
          {isloggedIn && (
            <Link to="/Dashboard">
              <buttion>Dashboard</buttion>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
