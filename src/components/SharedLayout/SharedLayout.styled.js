import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  background-color: #e8eced;
  text-decoration: none;
  border: 1px solid black;
  padding: 5px 10px 5px 10px;
  border-radius: 50px;
  animation: pulse 4s infinite;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  &.active {
    color: red;
  }
`;

export const Header = styled.header`
  margin: 0;
  border: 1px solid black;
  background: linear-gradient(120deg, #fce38a 0%, #f38181 100%);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  padding: 10px 5px 10px 5px;
  font-size: 16px;
  font-weight: 500;
`;
