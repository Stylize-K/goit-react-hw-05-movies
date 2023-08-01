import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcHome, FcFilmReel } from 'react-icons/fc';
import { StyledLink, Navigation, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Navigation>
          <StyledLink to="/">
            <FcHome />
            Home
          </StyledLink>
          <StyledLink to="/movies">
            <FcFilmReel />
            Movies
          </StyledLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
