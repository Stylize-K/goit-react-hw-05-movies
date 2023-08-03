import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  background-color: #e8eced;
  text-decoration: none;
  /* border: 1px solid black; */
  padding: 5px 10px 5px 10px;
  border-radius: 50px;
  transition: transform 0.2s;

  &.active {
    color: red;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.header`
  margin: 0;
  border-radius: 10px;
  background: linear-gradient(120deg, #fce38a 0%, #f38181 100%);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
`;
