import React from "react";
import Signin from "../../component/signin/signin";
import SignUp from "../../component/signUp/signUp";
import { LoginPagestyled } from "./loginsignup.styled";

export default function loginSignup() {
  return (
    <LoginPagestyled>
      <Signin />

      <SignUp />
    </LoginPagestyled>
  );
}
