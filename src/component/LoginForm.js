import React from "react";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const [isVisible, setIsVisible] = useState(false);
  function handleEye() {
    setIsVisible(!isVisible);
  }
  function handleButton(e) {
    e.preventDefault();
    props.setloggedIn(true);
    toast.success("Logged In Succesfully!");
    navigate("/Dashboard");
  }
  return (
    <form>
      <label>
        Email Address<sup>*</sup> :
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder=" Email Address"
          value={formData.email}
        />
      </label>
      <br></br>

      <label>
        Password<sup>*</sup> :
        <input
          type={isVisible ? "text" : "password"}
          name="password"
          onChange={handleInputChange}
          placeholder=" password"
          value={formData.password}
        />
      </label>
      <div onClick={handleEye}>{isVisible ? <IoMdEyeOff /> : <IoEye />}</div>

      <button onClick={handleButton}>Sign In</button>
      <br></br>
    </form>
  );
};

export default LoginForm;
