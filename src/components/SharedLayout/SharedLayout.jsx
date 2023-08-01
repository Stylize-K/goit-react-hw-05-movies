import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Navigation, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
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
