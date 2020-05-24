import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: pink;
  color: white;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid pink;
  &:hover {
    background-color: #ffacb7;
    color: white;
    border: 2px solid #ffacb7;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  min-width: 130px;
  border-radius: 10px;
  &:hover {
    background-color: #397ae8;
    border: none;

   
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 130px;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  border: none;

  ${getButtonStyles};
`;
