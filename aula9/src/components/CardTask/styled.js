import styled from "styled-components";

export const ContainerTask = styled.div`
  width: 400px;
  height: 70px;
  background-color: #e89900;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 20px 0;
  padding: 5px;
`;
export const ContainerText = styled.div`
  width: 60%;
`;
export const Status = styled.p`
  color: greenyellow;
`;
export const ContainerImage = styled.div`
  width: 40px;
  height: 40px;
  img {
    width: 100%;
  }
`;
