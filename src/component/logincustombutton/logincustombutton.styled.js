import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: ${({ theme }) => theme.body};
  color: white;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.body};
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
  color: gray;
  font-size: 3rem;
  background-color: transparent;
  width: 50px;

  &:hover {
    color: black;
    border: none;
  }
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const githunSignInstyles = css`
  color: white;
  font-size: 25px;
  border-radius: 10px;
  &:hover {
    background-color: #000;
    border: none;
  }
  @media screen and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.isGithubSignIn) {
    return githunSignInstyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 100px;
  width: auto;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;

  @media screen and (max-width: 1000px) {
    min-width: 80px;
    font-size: 0.8rem;
  }

  ${getButtonStyles};
`;
