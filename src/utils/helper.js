const queryFilterCategory = (name) => {
   return `_where[0][category.name]=${name}`
}
const queryFilterPrice = (value) => {

   if (value < 10000000) {
      return `_where[0][price_promotion_lt]=${value}`
   } else {
      return value < 41000000 ? `_where[0][price_promotion_lte]=${value}` : `_where[0][price_promotion_gt]=${value}`
   }
}
const queryDetail = slug => {
   return `_where[0][slug]=${slug}`
}

const querySearchProduct = (name) => {
   return `_q=${name}`
}
export { queryFilterCategory, querySearchProduct, queryFilterPrice, queryDetail }

