// import completeArr from '../dummydata'
import axios from 'axios';

export function getProductList() {
    // console.log('getProductList() called');
    return axios.get('https://dummyjson.com/products');
    // data.then((response) => {
    //     console.log('promise func');
    //     return response.data.products;
    // })

    // data.then((response) => {
    //     console.log(response.data.products);
    // })
}

export function getProduct(id) {
    return axios.get('https://dummyjson.com/products/' + id);

}

