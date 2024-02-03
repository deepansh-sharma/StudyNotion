import React from "react";
import frame from "../assets/frame.png";
import signup from "../assets/signup.png";
import login from "../assets/login.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1>{props.heading}</h1>
          <p>{props.paragraph1}</p>
          <p>{props.paragraph2}</p>
        </div>
        {props.type === "signup" ? (
          <SignupForm></SignupForm>
        ) : (
          <LoginForm
            setloggedIn={props.setloggedIn}
            isloggedIn={props.isloggedIn}
          ></LoginForm>
        )}
        <div></div>
        <div>or</div>
        <div></div>
        <div>Sign in with Google</div>
      </div>
      <div>
        <img src={frame} alt="frame" loading="lazy"></img>
        <img
          src={props.type === "signup" ? signup : login}
          alt={`${props.type}`}
          loading="lazy"
        ></img>
      </div>
    </div>
  );
};

export default Template;
