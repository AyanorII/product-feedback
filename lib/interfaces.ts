export enum ProductStatus {
  PLANNED = "PLANNED",
  LIVE = "LIVE",
  IN_PROGRESS = "IN_PROGRESS",
  SUGGESTION = "SUGGESTION",
}

export enum ProductCategory {
  UI = "ui",
  UX = "ux",
  ENHANCEMENT = "enhancement",
  BUG = "bug",
  FEATURE = "feature",
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
  product: Product;
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
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
  comments: Comment[];
}

export type AllCategories = "all" | ProductCategory;

export enum SortProductsBy {
  MOST_UPVOTES = "most upvotes",
  LEAST_UPVOTES = "least upvotes",
  MOST_COMMENTS = "most comments",
  LEAST_COMMENTS = "least comments",
}

export interface ProductsCount {
  planned: number;
  live: number;
  inProgress: number;
}
