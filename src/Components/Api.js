// import completeArr from '../dummydata'
import axios from "axios";

export function getProductList({ sortBy, query, page, sortType }) {
  let params = {};
  if (sortBy) {
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
}

export function getProduct(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then((response) => {
      return response.data;
    });
}

export function getProductsByIds(Ids) {
  let commaSeperatedIds = Ids.join();
  // console.log("Comma seperated:", commaSeperatedIds);
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSeperatedIds,
      },
    })
    .then((response) => {
      // console.log("response:", response);
      return response.data;
    });
}

export function getCart() {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      // console.log("response from getCart:", response);
      return response.data;
    });
}

export function saveCart(cart) {
  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      {
        data: cart,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      return response.data;
    });
}
