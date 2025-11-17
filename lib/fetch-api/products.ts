import { instance } from '../axios';

const productsApi = {
  getAllProducts: (params?: string) => {
    const url = '/products' + params;
    return instance.get(url);
  },
  getProductById: (id: string) => {
    const url = `/products/${id}`;
    return instance.get(url);
  },
};

export default productsApi;
