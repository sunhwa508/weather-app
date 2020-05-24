import styled from "styled-components";

export const StyledCard = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);
  margin: 20px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryLight};
  padding: 20px 50px;

  &:hover {
    transform: translateY(-5px);
  }
  h2 {
    margin: 0;
    padding: 5px;
    font-size: 2rem;
    color: #444f5a;
    margin: 20px 0;
  }
  h3 {
    width: 100%;
    padding: 2px;
    margin: 5px;
    color: #444f5a;
    border-radius: 10px;
    font-size: 1.3rem;
    margin: 10px 0;
  }
  img {
    width: 50px;
  }
`;
