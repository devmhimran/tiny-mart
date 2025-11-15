export interface ProductAttributeType {
  sku: string;
  size: string;
  price: number;
  stock: number;
  status: number;
}

export interface ProductType {
  id: number;
  productName: string;
  productCode: string;
  productDiscount: number;
  description: string;
  isFeatured: string;
  status: number;
  attributes: ProductAttributeType[];
  rating: number;
  createdAt: string;
  updatedAt: string;
}
