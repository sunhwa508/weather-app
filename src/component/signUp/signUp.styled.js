import styled from "styled-components";

export const SignUpstyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  margin: 50px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  min-width: 500px;
  h2,
  span {
    color: ${({ theme }) => theme.body};
  }
  @media screen and (max-width: 1000px) {
    min-width: 100%;
    margin: 30px 0;
  }

  .title {
    margin: 10px 0;
  }
`;
