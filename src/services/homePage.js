import axios from 'axios';

export const generateTokenData = () => axios.get('https://dummyjson.com/products/categories');
export const tokenStatus = () => axios.get('https://dummyjson.com/products/categories');
export const revokeToken = () => axios.get('https://dummyjson.com/products/categories');