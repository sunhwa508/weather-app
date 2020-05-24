import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  margin: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  h2,
  span {
    color: ${({ theme }) => theme.body};
  }
  @media screen and (max-width: 1000px) {
    min-width: 100%;
    margin: 0;
  }

  .title {
    margin: 10px 0;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
  }
`;
