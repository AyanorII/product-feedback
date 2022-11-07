export enum ProductStatus {
  PLANNED = "PLANNED",
  LIVE = "LIVE",
  IN_PROGRESS = "IN_PROGRESS",
  SUGGESTION = "SUGGESTION",
}

export enum ProductCategory {
  UI = "UI",
  UX = "UX",
  ENHANCEMENT = "Enhancement",
  BUG = "Bug",
  FEATURE = "Feature",
}

export interface User {
  id: string;
  name: string;
  username: string;
  photo?: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  userId: string;
  product?: Product;
  productId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  upvotes: number;
  userId: string;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
  comments?: Comment[];
}
