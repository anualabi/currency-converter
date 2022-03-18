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
    margin-right: auto;

    a {
      font-size: 1.2rem;
      text-transform: capitalize;

      @media (max-width: 390px) {
        font-size: 1rem;
      }
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: 390px) {
      font-size: 0.8rem;
    }

    .converter {
      @media (min-width: 700px) {
        &::before {
          content: 'View Conversion ';
        }
      }
    }

    .history {
      @media (min-width: 700px) {
        &::before {
          content: 'Currency ';
        }
      }
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
