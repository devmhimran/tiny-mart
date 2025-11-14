import { instance } from '../axios';

const productsApi = {
  getAllProducts: () => {
    const url = '/products/all';
    return instance.get(url);
  },
  getProductByLimit: (limit: number) => {
    const url = `/products/limit/${limit}`;
    return instance.get(url);
  },
  getProductById: (id: string) => {
    const url = `/products/${id}`;
    return instance.get(url);
  },
};

export default productsApi;
