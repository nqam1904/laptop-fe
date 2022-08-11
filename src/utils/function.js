export const formatNumber = (number) => number?.toString()?.replace(/\d(?=(\d{3})+$)/g, '$&,');
export const formatChar = (string) => string?.split('_')?.join(' ') || ''
export const formatSizeDisplay = string => string?.split('_').filter(x => x)?.join('.') + '\"' || '';