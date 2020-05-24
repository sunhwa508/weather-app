import React, { useState } from "react";
import Input from "../input/input";
import CustomButton from "../logincustombutton/logincustombutton";
import { auth, createUserProfileDocument } from "../../firebase.utils";
import { SignUpstyled } from "./signUp.styled";

export default function Signup() {
  const [signUp, setSignUp] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (signUp.password !== signUp.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signUp.email,
        signUp.password
      );
      await createUserProfileDocument(user, {
        displayName: signUp.displayName,
      });

      setSignUp({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value });
  }

  return (
    <SignUpstyled>
      <h2 className="title"> I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          value={signUp.displayName}
          onChange={handleChange}
          label="displayname"
          required
        />
        <Input
          type="email"
          name="email"
          value={signUp.email}
          onChange={handleChange}
          label="email"
          required
        />
        <Input
          type="password"
          name="password"
          value={signUp.password}
          onChange={handleChange}
          label="password"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={signUp.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </SignUpstyled>
  );
}
