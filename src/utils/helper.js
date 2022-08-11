const queryFilterCategory = (name) => {
   return `_where[0][category.name]=${name}`
}
const queryFilterPrice = (value) => {
   const maxPrice = 250000000;
   return value < maxPrice ? `_where[0][price_lte]=${value}` : `_where[0][price_gte]=${value}`
}
const queryDetail = slug => {
   return `_where[0][slug]=${slug}`
}

const querySearchProduct = (name) => {
   return `_q=${name}`
}
export { queryFilterCategory, querySearchProduct, queryFilterPrice, queryDetail }

