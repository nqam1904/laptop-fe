import _ from 'lodash'

export const laptopSelector = (state) => state?.laptop?.listLaptop;
export const laptopByCateSelector = (state) => state?.laptop?.laptopByCategory;
export const categorySelector = state => state.laptop?.category
export const detailLaptopSelector = (state) => state?.laptop?.detailLaptop;
export const searchProductSelector = state => state?.laptop?.searchProduct
// export const storageProductSelector = (state) => {

//    let finalArr = []
//    const data = state?.laptop?.storageProduct
//    data.push(state?.laptop?.detailLaptop[0])
//    const dataUni = _.uniqBy(data, function (e) {
//       return e?.slug;
//    }).filter(x => x != null);
//    return dataUni[0] ? dataUni : finalArr
// }