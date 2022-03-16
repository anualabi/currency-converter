import { AppBar, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledNavBar = styled(AppBar, {})`
  background-color: primary;
`;

export const StyledTypography = styled(Typography, {})`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 1.2rem;
  }

  &:first-of-type {
    margin-left: 0;

    a {
      text-transform: capitalize;

      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
  }

  a.active {
    color: black;
    font-weight: bold;
    text-decoration: underline black;
    text-underline-offset: 0.9rem;
    text-decoration-thickness: 0.5rem;
  }
`;
