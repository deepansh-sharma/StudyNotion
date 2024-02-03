import React from "react";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const [isVisiblepassword, setIsVisiblepassword] = useState(false);
  const [isVisibleconfirmPassword, setIsVisibleconfirmPassword] =
    useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  // Function to handle input change
  function onChangeInputValue(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleButton(e) {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return toast.error("Please fill out all fields");
    } else if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match!");
    } else {
      console.log(formData);
      navigate("/login");
    }

    toast.success("Account Created Succesfully!");
  }
  return (
    <form>
      <div>
        <div>Student</div>
        <div>Instructor</div>
      </div>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          onChange={onChangeInputValue}
          value={formData.firstName}
        ></input>
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          onChange={onChangeInputValue}
          value={formData.lastName}
        ></input>
      </label>
      <br></br>
      <label>
        Email :
        <input
          type="email"
          name="email"
          onChange={onChangeInputValue}
          value={formData.email}
        />
      </label>
      <br />
      <label>
        Create Password :
        <input
          type={isVisiblepassword ? "text" : "password"}
          name="password"
          onChange={onChangeInputValue}
          value={formData.password}
        />
      </label>
      <div onClick={() => setIsVisiblepassword(!isVisiblepassword)}>
        {isVisiblepassword ? <IoMdEyeOff /> : <IoEye />}
      </div>
      <br />
      <label>
        Confirm Password :
        <input
          type={isVisibleconfirmPassword ? "text" : "password"}
          name="confirmPassword"
          onChange={onChangeInputValue}
          value={formData.confirmPassword}
        />
      </label>
      <div
        onClick={() => setIsVisibleconfirmPassword(!isVisibleconfirmPassword)}
      >
        {isVisibleconfirmPassword ? <IoMdEyeOff /> : <IoEye />}
      </div>
      <br />
      <button onClick={handleButton}>Create Account</button>
      <br></br>
    </form>
  );
};

export default SignupForm;
