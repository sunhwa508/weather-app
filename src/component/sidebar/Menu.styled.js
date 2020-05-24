// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.body};
  z-index: 2;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  transform: ${({ toggle }) =>
    toggle ? "translateX(0)" : "translateX(-100%)"};

  &::after {
    content: "";
    background: #f6f6f6;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: 0;
  }
  @media (max-width: 600px) {
    width: 100%;
  }

  a {
    font-size: 3rem;
    text-transform: uppercase;
    padding: 1.2rem 0;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s linear;
    z-index: 1;
    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
