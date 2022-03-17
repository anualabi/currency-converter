import { format } from 'date-fns';

export const formatTodayDate: string = format(new Date(), 'yyyy/MM/dd');
