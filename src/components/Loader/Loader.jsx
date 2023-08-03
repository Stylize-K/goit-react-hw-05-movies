import PropTypes from 'prop-types';
import { LoaderContainer } from './Loader.styled';

export const Loader = ({ children }) => {
  return <LoaderContainer>{children}</LoaderContainer>;
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};
