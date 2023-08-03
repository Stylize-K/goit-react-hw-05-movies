import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const Li = styled.li`
  flex-basis: calc((100% - 30px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 105px) / 8);
  }
`;
