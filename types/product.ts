export interface ProductAttributeType {
  id: number;
  size: string;
  price: number;
  stock: number;
  sku: string;
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
}
