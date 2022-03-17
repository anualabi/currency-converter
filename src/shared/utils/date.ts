import { format, addDays } from 'date-fns';

export const formatTimeNow = format(new Date(), 'HH:mm');
export const formatTodayDate = format(new Date(), 'yyyy/MM/dd');
export const formatSevenDaysAgo = format(addDays(new Date(), -6), 'yyyy/MM/dd');
export const formatFourteenDaysAgo = format(addDays(new Date(), -13), 'yyyy/MM/dd');
export const formatThirtyDaysAgo = format(addDays(new Date(), -29), 'yyyy/MM/dd');
