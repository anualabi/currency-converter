import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import NavBar from '../Project/NavBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
