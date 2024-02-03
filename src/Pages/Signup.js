import React from "react";
import Template from "../component/Template";

const Signup = (props) => {
  const heading =
    "Join the millions learning to code with StudyNotion for free";
  const paragraph1 = "Build skills fo today , tomorrow, and beyond";
  const paragraph2 = "Education to future proof Career";
  const type = "signup";
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

export default Signup;
