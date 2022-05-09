import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ccc;
`;

export const ContainerImage = styled.div`
  width: 120px;
  margin-left: 10px;
`;
export const Image = styled.img`
  max-width: 100%;
`;
export const NavStyle = styled.nav`
  margin-right: 10px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  color: #000;
`;
