// import completeArr from '../dummydata'
import axios from "axios";

export function getProductList({ sortBy, query, page, sortType }) {
  // console.log('getProductList() called');
  let params = {};
  if (sortBy) {
    // console.log("sort", sort);
    params.sortBy = sortBy;
  }
  if (query) {
    params.search = query;
  }
  if (page) {
    params.page = page;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  console.log("params", params);
  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then((response) => {
      return response.data;
    });
  // data.then((response) => {
  //     console.log('promise func');
  //     return response.data.products;
  // })

  // data.then((response) => {
  //     console.log(response.data.products);
  // })
}

export function getProduct(id) {
  return axios.get("https://dummyjson.com/products/" + id).then((response) => {
    return response.data;
  });
}
