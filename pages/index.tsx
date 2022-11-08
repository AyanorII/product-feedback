import { Container, Stack } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Product, SortProductsBy } from "../lib/interfaces";
import { RootState } from "../store/store";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(process.env.API_URL! + "/products");
  const { data } = response;

  return {
    props: {
      products: data,
    },
  };
};

type Props = {
  products: Product[];
};

const Home: NextPage<Props> = ({ products }) => {
  const sortByOption = useSelector(
    (state: RootState) => state.products.sortByOption
  );

  const sortProducts = (
    a: Product,
    b: Product,
    sort: SortProductsBy
  ): number => {
    switch (sortByOption) {
      case SortProductsBy.MOST_UPVOTES:
        return b.upvotes - a.upvotes;
      case SortProductsBy.LEAST_UPVOTES:
        return a.upvotes - b.upvotes;
      case SortProductsBy.MOST_COMMENTS:
        return b.comments.length - a.comments.length;
      case SortProductsBy.LEAST_COMMENTS:
        return a.comments.length - b.comments.length;
      default:
        return 0;
    }
  };

  const sortedProducts = products.sort((a, b) =>
    sortProducts(a, b, sortByOption)
  );

  return (
    <Container>
      <Stack gap={1.5} mt={3}>
        {sortedProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Stack>
    </Container>
  );
};

export default Home;
