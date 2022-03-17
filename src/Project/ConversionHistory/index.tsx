import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
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
import { SvgEyeIcon, SvgDeleteIcon } from '../../shared/components';
import { useLocalStorage } from '../../shared/hooks';
import { LocalStorageData } from '../../shared/types';
import { StyledTableRow, StyledActions, StyledActionBox, StyledTypography } from './styles';

const ConversionHistory = () => {
  const navigate: NavigateFunction = useNavigate();
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
              <StyledTypography>View</StyledTypography>
            </StyledActionBox>
            <StyledActionBox sx={{ color: 'warning.main' }} onClick={() => handleDelete(id)}>
              <SvgDeleteIcon fill="currentColor" />
              <StyledTypography>Delete from history</StyledTypography>
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