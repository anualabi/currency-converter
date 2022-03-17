import { format, addDays } from 'date-fns';

export const formatTimeNow: string = format(new Date(), 'HH:mm');
export const formatTodayDate: string = format(new Date(), 'yyyy/MM/dd');
export const formatSevenDaysAgo: string = format(addDays(new Date(), -6), 'yyyy/MM/dd');
export const formatFourteenDaysAgo: string = format(addDays(new Date(), -13), 'yyyy/MM/dd');
export const formatThirtyDaysAgo: string = format(addDays(new Date(), -29), 'yyyy/MM/dd');
