import React, { useEffect } from "react";
import styling from "./verifyemail.module.css";

const VerifyEmail = () => {
  const { mailContainer } = styling;
  //function that focus the next input
  const nextHandler = (arr) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      element.addEventListener("input", (e) => {
        if (e.target.value.length === 1 && arr.length > [index+1] ) {
          arr[index + 1].focus();
        }
      });
    }
  };
  //Cleanup Function to avoid the console being clogged up
  const cleanupHandler = (arr) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      element.removeEventListener("input", (e) => {
        console.log(e.target);
        console.log(arr[index + 1]);
        if (e.target.value.length === 1) {
          arr[index + 1].focus();
        }
      });
    }
  };
  useEffect(() => {
    const inputs = document.querySelectorAll("form>div>label>input");
    console.log(inputs);
    nextHandler(inputs);
    return cleanupHandler(inputs);
  }, []);
  return (
    <form className={mailContainer}>
      <article>
        <h2>Kindly enter Email verification code</h2>
        <p>
          To Sign up, kindly enter the verification code sent to your email
          address
        </p>
      </article>
      <div>
      <label>
        <input type="text" required  />
        <input type="text"  required/>
        <input type="text" required />
        <input type="text"  required/>
        <input type="text"  required/>
      </label>

      <button type="submit">Proceed</button>
    </div>
    </form>
  );
};

export default VerifyEmail;
