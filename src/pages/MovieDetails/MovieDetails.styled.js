import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  gap: 15px;
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
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0;
`;

export const Img = styled.img`
  border-radius: 5px;
`;
