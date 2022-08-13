const queryFilterCategory = (name) => {
   return `_where[0][category.name]=${name}`
}
const queryFilterPrice = (value) => {
   if (value < 10000) {
      return `_where[1][price_promotion_lt]=${value}`
   }
   if (value <= 20000) {
      return `_where[1][price_promotion_lt]=${value}`
   }
   if (value <= 30000) {
      return `_where[1][price_promotion_gt]=${20000}&_where[2][price_promotion_lte]=${value}`
   }
   if (value <= 40000) {
      return `_where[1][price_promotion_gt]=${30000}&_where[2][price_promotion_lte]=${value}`
   }
   else {
      return `_where[1][price_promotion_gt]=${value}`
   }
}
const queryDetail = slug => {
   return `_where[0][slug]=${slug}`
}

const querySearchProduct = (name) => {
   return `_q=${name}`
}
export { queryFilterCategory, querySearchProduct, queryFilterPrice, queryDetail }

