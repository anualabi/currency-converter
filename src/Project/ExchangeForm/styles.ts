import { styled } from '@mui/system';
import { Box, TextField, FormControl } from '@mui/material';

export const StyledExchangeForm = styled('div', {})`
  overflow-x: hidden;
`;

export const StyledBox = styled(Box, {})`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const StyledTextField = styled(TextField, {})`
  margin: 0.5rem 1rem;
  flex: 1.5;

  @media (max-width: 680px) {
    margin: 1rem 0rem;
  }
`;

export const StyledFormControl = styled(FormControl, {})`
  margin: 0.5rem 1rem;
  flex: 2;

  @media (max-width: 680px) {
    margin: 1rem 0rem;
  }
`;
