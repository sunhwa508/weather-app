import React, { useState } from "react";
import Input from "../input/input";
import CustomButton from "../logincustombutton/logincustombutton";
import {
  auth,
  signInWithGoogle,
  githubSignin,
  facebookSignIn,
} from "../../firebase.utils";
import { StyledLogin } from "./signin.styled";

export default function Signin() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      setUser({ email: "", password: "" });
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <StyledLogin>
      <h2>이미 계정이 있다면 🔑</h2>
      <span>로그인 정보를 입력하세요 </span>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={user.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <Input
          name="password"
          type="password"
          handleChange={handleChange}
          value={user.password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            <i class="fab fa-google"></i>
          </CustomButton>
          <CustomButton onClick={githubSignin} isGoogleSignIn>
            <i class="fab fa-github"></i>
          </CustomButton>
          <CustomButton onClick={facebookSignIn} isGoogleSignIn>
            <i class="fab fa-facebook"></i>
          </CustomButton>
        </div>
      </form>
    </StyledLogin>
  );
}
