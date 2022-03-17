import { styled } from '@mui/system';
import { TableRow, Box, Typography } from '@mui/material';

export const StyledTableRow = styled(TableRow)(() => ({
  '.localstorage_actions > .MuiBox-root': {
    visibility: 'hidden'
  },
  '&:hover': {
    '.localstorage_actions > .MuiBox-root': {
      visibility: 'visible'
    }
  },
  cursor: 'pointer'
}));

export const StyledActions = styled(Box, {})`
  display: flex;
  justify-content: space-between;
`;

export const StyledActionBox = styled(Box, {})`
  display: flex;
  align-items: center;
`;

export const StyledTypography = styled(Typography, {})`
  margin: 8px;
`;
