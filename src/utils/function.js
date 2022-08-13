export const formatNumber = (number) => {

   let price = number * 1000
   return price?.toString()?.replace(/\d(?=(\d{3})+$)/g, '$&,');
};
export const formatChar = (string) => string?.split('_')?.join(' ') || ''
export const formatSizeDisplay = string => string?.split('_').filter(x => x)?.join('.') + '\"' || '';