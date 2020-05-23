import styled from "styled-components";

export const StyledDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  button {
    font-size: 1.2em;
    background-color: #fff;
    padding: 10px 20px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);
  }

  button:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
