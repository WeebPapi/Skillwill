import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Product } from "../interfaces/product"

export const productsApiSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], number>({
      query: () => "",
    }),
  }),
})
