import { apiRequest } from "../lib/api";
import type { Product, ProductDetailsResponse } from "../types/product";

const productsEndpoint = "/api/products";

export const productService = {
  getProducts(): Promise<Product[]> {
    return apiRequest<Product[]>(productsEndpoint);
  },

  getProductById(id: string): Promise<ProductDetailsResponse> {
    return apiRequest<ProductDetailsResponse>(
      `${productsEndpoint}/${encodeURIComponent(id)}`,
    );
  },
};

export function getProductHref(id: string): string {
  return `/produkty/${encodeURIComponent(id)}/`;
}
