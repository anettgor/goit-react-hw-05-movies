import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkInfo = styled(NavLink)`
  text-decoration: none;
  color: #d9dde1;

  &.active {
    color: #ffa842;
  }
`;
