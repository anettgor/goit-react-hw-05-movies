import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #d9dde1;
  font-weight: 500;

  &.active {
    color: #ffa842;
  }
`;
