import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcHome, FcFilmReel } from 'react-icons/fc';
import {
  StyledNavLink,
  Navigation,
  Header,
  Container,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledNavLink to="/">
            <FcHome />
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">
            <FcFilmReel />
            Movies
          </StyledNavLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
