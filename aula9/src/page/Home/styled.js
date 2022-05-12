import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBox = styled.div`
  width: 500px;
  min-height: 700px;
  background-color: #005875;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerImg = styled.div`
  width: 300px;
  height: 70px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContainerForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 15px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
  background-color: #dd6f12;
  img {
    width: 100%;
  }
`;
