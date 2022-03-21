import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from '../shared/utils/theme';
import NavBar from '../components/NavBar';
import Routes from './AppRoutes';

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
