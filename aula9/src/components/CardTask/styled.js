import styled from "styled-components";

export const ContainerTask = styled.div`
  width: 400px;
  height: 70px;
  background-color: ${(props) => (props.status ? "green" : "#e89900")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 20px 0 5px 0;
  padding: 5px;
`;
export const ContainerText = styled.div`
  width: 70%;
`;
export const Status = styled.p`
  color: ${(props) => (props.status ? "#e89900" : "red")};
`;
export const ContainerImage = styled.button`
  width: 40px;
  height: 40px;
  z-index: 9999999;
  img {
    width: 100%;
  }
`;
