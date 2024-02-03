import React from "react";
import Template from "../component/Template";

const Login = (props) => {
  const heading = "Welcome Back";
  const paragraph1 = "Build skills fo today , tomorrow, and beyond";
  const paragraph2 = "Education to future proof Career";
  const type = "login";
  return (
    <div className="container">
      <Template
        heading={heading}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
        type={type}
        setloggedIn={props.setloggedIn}
        isloggedIn={props.isloggedIn}
      ></Template>
    </div>
  );
};

export default Login;
