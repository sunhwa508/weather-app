import styled from "styled-components";

export const StyledDetail = styled.div`
  margin-top: 400px;
  flex-direction: column;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-basis: 1;

  h3 {
    border: 5px solid #c9d6df;
    border-radius: 10px;
    width: 50vw;
    color: #52616b;
    margin: 10px auto;
    text-align: center;
    padding: 30px;
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    grid-auto-flow: dense;
    cursor: pointer;

    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }

  h2 {
    color: black;
  }
`;

export const StyledButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin: 20px 0;
    font-size: 1.2em;
    background-color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);
    border-radius: 10px;
  }
`;
