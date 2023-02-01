import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


import styling from "./forms.module.css";

const Form = () => {
  const { formContainer, custom_box, checkmark,span } = styling;
  //state mamagement for from values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const[showPassword,setShowPassword]=useState(false)
  const togglePasswordHandler=()=>{
    setShowPassword(!showPassword)
  }

  //Function that updates form input
  const updateValueHandler = (event) => {
    const { name, value } = event.target;
    setFormValues((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  //function that submits the from and makes a request to the server
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formValues);

    const request = await fetch("https://falconlite.com/v1/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const response = await request.json();

  };
  const { first_name, email, password, telephone } = formValues;

  return (
    <form className={formContainer} onSubmit={submitHandler}>
      <div>
        <article>
          <h2>Create an account</h2>
          <p>
            Register on our website with your correct email address and
            information
          </p>
        </article>

        <label>
          First Name
          <input
            type="text"
            name="name"
            required
            placeholder="Jeremiah"
            value={first_name}
            onChange={updateValueHandler}
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            required
            placeholder="Fame@gmail.com"
            value={email}
            onChange={updateValueHandler}
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            required
            placeholder="+2348103769079"
            value={telephone}
            onChange={updateValueHandler}
          />
        </label>
        <label>
          Password
          <input
            type={showPassword?'text':'password'}
            name="password"
            required
            placeholder="*******************"
            value={password}
            onChange={updateValueHandler}
          />
           <span onClick={togglePasswordHandler} className={span}>
            {showPassword ? (
              <AiOutlineEye size={21} />
            ) : (
              <AiOutlineEyeInvisible size={21} />
            )}
          </span>
        </label>
        <label className={custom_box}>
          Remember Me
          <input type="checkbox" />
          <span className={checkmark}></span>
        </label>
        <fieldset>
          <button type="submit">Sign-up</button>
          <label>
            Already have an account? <a href="#">Sign in</a>
          </label>
        </fieldset>
      </div>
    </form>
  );
};

export default Form;
