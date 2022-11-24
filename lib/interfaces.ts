export enum ProductStatus {
  PLANNED = "planned",
  LIVE = "live",
  IN_PROGRESS = "in-progress",
  SUGGESTION = "suggestion",
}

export enum ProductCategory {
  UI = "ui",
  UX = "ux",
  ENHANCEMENT = "enhancement",
  BUG = "bug",
  FEATURE = "feature",
}

export interface User {
  id: number;
  name: string;
  username: string;
  photo?: string;
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  userId: number;
  product: Product;
  productId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  upvotes: number;
  userId: number;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
  comments: Comment[];
  comments_count: number;
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
  suggestions: number;
}

export type ProductsCountResponse = Omit<ProductsCount, "inProgress"> & {
  in_progress: number;
};
