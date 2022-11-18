import { Product, ProductsCount } from "../lib/interfaces";
import { api } from "./api";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSuggestions: builder.query<Product[], void>({
      query: () => "/products/suggestions",
      providesTags: ["Suggestions"],
    }),
    getProductsCount: builder.query<ProductsCount, void>({
      query: () => "/products/count",
    }),
    upvote: builder.mutation({
      query: (id) => ({
        url: `products/${id}/upvote`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetSuggestionsQuery,
  useGetProductsCountQuery,
  useUpvoteMutation,
} = productApi;

export const { getSuggestions, getProductsCount, upvote } =
  productApi.endpoints;
