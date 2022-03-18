import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const StyledConversion = styled(Box, {})`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    @media (max-width: 800px) {
      font-size: 5vw;
    }

    @media (max-width: 450px) {
      font-size: 6vw;
    }
  }
`;
