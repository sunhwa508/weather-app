import styled from "styled-components";

export const LoginPagestyled = styled.div`
  width: 100%;
  display: flex;
  padding: 50px;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;

    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
`;
