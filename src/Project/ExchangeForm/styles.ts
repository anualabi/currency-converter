import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const StyledExchangeForm = styled('div', {})`
  overflow-x: hidden;
`;

export const StyledBox = styled(Box, {})`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
