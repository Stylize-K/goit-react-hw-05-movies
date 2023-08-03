import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcHome, FcFilmReel } from 'react-icons/fc';
import { Toaster } from 'react-hot-toast';
import {
  StyledNavLink,
  Navigation,
  Header,
  Container,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 5,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
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
