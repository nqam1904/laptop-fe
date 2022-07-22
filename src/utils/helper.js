const queryFilterCategory = (name) => {
   return `_where[0][category.name]=${name}`
}
const queryFilterPrice = (value) => {
   const maxPrice = 25000000;
   return value < maxPrice ? `_where[0][price_lte]=${value}` : `_where[0][price_gte]=${value}`
}
const queryDetailProduct = slug => {
   return `_where[0][slug]=${slug}`
}

const queryDetailAccessory = (slug) => {
   return `_where[0][slug]=${slug}`
}
export { queryFilterCategory, queryFilterPrice, queryDetailProduct, queryDetailAccessory }

