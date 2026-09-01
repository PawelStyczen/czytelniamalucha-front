export type ProductDetails = {
  description: string;
  images: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  priceLabel: string;
  currency: string;
  badge: string;
  image: string;
  bullets: string[];
  details: ProductDetails;
};

export type ProductDetailsResponse = Omit<
  Product,
  "subtitle" | "badge" | "image"
> &
  Partial<Pick<Product, "subtitle" | "badge" | "image">>;
