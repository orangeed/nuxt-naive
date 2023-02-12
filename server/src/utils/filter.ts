import { timeLabel } from './state';

export const handleFilterTimeLabel = (val: number): string => {
  if (!val) return '';
  return timeLabel[Number(val) - 1];
};
