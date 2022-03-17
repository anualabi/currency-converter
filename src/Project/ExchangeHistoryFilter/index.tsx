import { useState } from 'react';
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import {
  formatSevenDaysAgo,
  formatFourteenDaysAgo,
  formatThirtyDaysAgo
} from '../../shared/utils/date';

interface Props {
  handleSelect: (value: string) => void;
}

const ExchangeHistoryFilter = ({ handleSelect }: Props) => {
  const [duration, setDuration] = useState<string>(formatSevenDaysAgo);

  const handleChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
    handleSelect(event.target.value);
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 'auto' }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="duration-label">Duration</InputLabel>
              <Select
                labelId="duration-label"
                name="duration"
                id="duration"
                value={duration}
                onChange={handleChange}
                label="Duration"
                required
              >
                <MenuItem value={formatSevenDaysAgo}>7 days</MenuItem>
                <MenuItem value={formatFourteenDaysAgo}>14 days</MenuItem>
                <MenuItem value={formatThirtyDaysAgo}>30 days</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            {/* Add Chart in future */}
            {/* <RadioGroup
              row
              aria-labelledby="exchange-history-radio-buttons-group-label"
              defaultValue="table"
              name="radio-buttons-group"
            >
              <FormControlLabel value="table" control={<Radio />} label="Table" />
              <FormControlLabel value="chart" control={<Radio />} label="Chart" />
            </RadioGroup> */}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default ExchangeHistoryFilter;
