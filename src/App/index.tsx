import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import NavBar from '../Project/NavBar';
import Routes from './Routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
