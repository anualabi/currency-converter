import { FC } from 'react';
import {
  Grid,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import _ from 'lodash';

interface JSONObject {
  [x: string]: { [y: string]: string };
}

interface Props {
  history: JSONObject;
  targetCurrency: string;
}

const ExchangeHistoryTable: FC<Props> = ({ history, targetCurrency }) => {
  let ratesObj: { date: string; rate: number };
  let ratesArray: typeof ratesObj[] = [];
  Object.entries(history)
    .reverse()
    .forEach(([key, value]) => {
      ratesObj = { date: key, rate: +value[targetCurrency] };
      ratesArray = [...ratesArray, ratesObj];
    });

  const exchangeRates = ratesArray.map(({ date, rate }: typeof ratesObj) => (
    <TableRow key={date}>
      <TableCell>{date}</TableCell>
      <TableCell>{rate}</TableCell>
    </TableRow>
  ));

  const highestRate = _.maxBy(ratesArray, 'rate');
  const lowestRate = _.minBy(ratesArray, 'rate');
  const averageRate = (Number(highestRate?.rate) + Number(lowestRate?.rate)) / 2;

  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <Card>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Exchange Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{exchangeRates}</TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Statistics</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Lowest</TableCell>
                  <TableCell>{lowestRate?.rate.toFixed(6)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Highest</TableCell>
                  <TableCell>{highestRate?.rate.toFixed(6)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Average</TableCell>
                  <TableCell>{averageRate.toFixed(6)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExchangeHistoryTable;
