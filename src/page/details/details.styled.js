import styled from "styled-components";

export const DetailStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  width: 70vw;
  height: 85vh;
  margin: auto;
  grid-gap: 10px;
  font-size: 1.2em;
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px;
  margin-top: 80px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);
`;
