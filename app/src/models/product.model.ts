import { Package } from './package.model';

export interface Product {
  id: number;
  name: string;
  ean: string;
  category: string;
  imageUrl: string | null;
  description: string;
  package: Package;
  salePrice: number;
  promotionalPrice: number;
  quantity: number;
}
