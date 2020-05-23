// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryLight};
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  transform: ${({ toggle }) =>
    toggle ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 3rem;
    text-transform: uppercase;
    padding: 1.2rem 0;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
