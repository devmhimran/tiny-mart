'use client';

import productsApi from '@/lib/fetch-api/products';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productsApi.getAllProducts();
        setProducts(res.data);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    fetchProducts();
  }, []);
  console.log({ products });
  return <div>Our Products</div>;
}
