import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import SvgEyeIcon from '../../shared/svgs/SvgEyeIcon';
import SvgDeleteIcon from '../../shared/svgs/SvgDeleteIcon';
import { useLocalStorage } from '../../shared/hooks/localStorage';
import { LocalStorageData } from '../../shared/models/localstorage';
import { StyledTableRow, StyledActions, StyledActionBox, StyledActionText } from './styles';

const ConversionHistory = () => {
  const navigate = useNavigate();
  const [conversionHistory, setConversionHistory] = useLocalStorage('conversion-history');

  if (conversionHistory.length === 0) {
    return (
      <Container maxWidth="md">
        <Card>
          <Typography variant="body1" sx={{ m: 3 }}>
            You don't have a currency conversion history. 🙁 &nbsp;
            <Link to="/currency-converter">Make a conversion now</Link>
          </Typography>
        </Card>
      </Container>
    );
  }

  const handleDelete = (id: string) => {
    const newStorage = conversionHistory.filter((r: LocalStorageData) => r.id !== id);
    setConversionHistory(newStorage);
  };

  const conversionHistoryRows = conversionHistory.map(
    ({ id, date, time, amount, baseCurrency, targetCurrency }: LocalStorageData) => (
      <StyledTableRow key={id}>
        <TableCell>
          {date} @ {time}
        </TableCell>
        <TableCell>{`Converted an amount of ${amount} from ${baseCurrency} to ${targetCurrency}`}</TableCell>
        <TableCell>
          <StyledActions className="localstorage_actions">
            <StyledActionBox
              sx={{ color: 'primary.main' }}
              onClick={() =>
                navigate('/currency-converter', {
                  state: { amount, baseCurrency, targetCurrency, date }
                })
              }
            >
              <SvgEyeIcon fill="currentColor" />
              <StyledActionText>View</StyledActionText>
            </StyledActionBox>
            <StyledActionBox sx={{ color: 'warning.main' }} onClick={() => handleDelete(id)}>
              <SvgDeleteIcon fill="currentColor" />
              <StyledActionText>
                <span className="delete-text">Delete</span>
              </StyledActionText>
            </StyledActionBox>
          </StyledActions>
        </TableCell>
      </StyledTableRow>
    )
  );

  return (
    <Container maxWidth="md">
      <Typography variant="h1">Conversion History</Typography>
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Event</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{conversionHistoryRows}</TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default ConversionHistory;
