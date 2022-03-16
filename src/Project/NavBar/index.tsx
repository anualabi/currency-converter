import { Box, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { StyledNavBar, StyledTypography } from './styles';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 12 }}>
      <StyledNavBar>
        <Toolbar>
          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/">CurrencyExchange</Link>
          </StyledTypography>
          <StyledTypography variant="subtitle2">
            <NavLink to="/currency-converter">
              <Box>Currency Converter</Box>
            </NavLink>
          </StyledTypography>
          <StyledTypography variant="subtitle2">
            <NavLink to="/conversion-history">
              <Box>View Conversion History</Box>
            </NavLink>
          </StyledTypography>
        </Toolbar>
      </StyledNavBar>
    </Box>
  );
};

export default NavBar;
