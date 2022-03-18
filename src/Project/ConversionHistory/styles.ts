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
  padding: 8px;
`;

export const StyledActionText = styled(Typography, {})`
  margin: 4px;

  @media (max-width: 768px) {
    display: none;
  }

  .delete-text {
    @media (min-width: 998px) {
      &::after {
        content: ' from history';
      }
    }
  }
`;
