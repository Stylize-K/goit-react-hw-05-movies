import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BackLink = styled(Link)`
  display: block;
  width: 100px;
  text-align: center;
  margin: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #fce38a;
    font-weight: 500;
  }
`;

export const LinkInfo = styled(Link)`
  display: block;
  width: 100px;
  text-align: center;
  margin: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #fce38a;
    font-weight: 500;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0;
`;

export const Img = styled.img`
  border-radius: 5px;
`;
