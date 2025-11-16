'use client';

import productsApi from '@/lib/fetch-api/products';
import { Meta, ProductType, Response } from '@/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export function useProduct(options?: string) {
  const getAllProductsMutation = useQuery<Response<ProductType[], Meta>>({
    queryKey: ['products', options],
    queryFn: async () => {
      const res = await productsApi
        .getAllProducts(options)
        .then(({ data }) => data);
      return res;
    },
    placeholderData: keepPreviousData,
  });

  return {
    getAllProductsMutation,
    getAllProducts: getAllProductsMutation.data?.data || [],
  };
}

export function useProductId(id: string) {
  const getProductByIdMutation = useQuery<{ data: ProductType }>({
    queryKey: ['products', id],
    queryFn: async () => {
      const res = await productsApi.getProductById(id).then(({ data }) => data);
      return res;
    },
  });
  return {
    getProductByIdMutation,
    getProductById: getProductByIdMutation.data?.data || null,
  };
}
