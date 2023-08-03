import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 65px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 40px;
  }
`;

// list-style-type: none;
// display: grid;
// max-width: calc(100vw - 65px);
// grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
// grid-gap: 15px;
// margin-top: 0;
// margin-bottom: 0;
// padding: 0;
// list-style: none;
// margin-left: auto;
// margin-right: auto;

export const Li = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const P = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: black;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 700;
  }
`;
