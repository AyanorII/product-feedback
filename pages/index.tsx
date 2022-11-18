import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProductsCountQuery,
  useGetSuggestionsQuery,
} from "../api/productApi";
import FilterAddFeedback from "../components/FilterAddFeedback";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import ProductCard from "../components/ProductCard";
import { Product, SortProductsBy } from "../lib/interfaces";
import { setInProgress, setLive, setPlanned } from "../store/productsSlice";
import { RootState } from "../store/store";

type Props = {
  products: Product[];
  count: {
    in_progress: number;
    live: number;
    planned: number;
    suggestion: number;
  };
};

const Home: NextPage<Props> = () => {
  const dispatch = useDispatch();
  const { data: suggestions } = useGetSuggestionsQuery();
  const { data: productsCount } = useGetProductsCountQuery();

  if (productsCount) {
    const { inProgress, planned, live } = productsCount;
    dispatch(setInProgress(inProgress));
    dispatch(setLive(live));
    dispatch(setPlanned(planned));
  }

  const sortByOption = useSelector(
    (state: RootState) => state.products.sortByOption
  );

  const filterByOption = useSelector(
    (state: RootState) => state.products.activeCategory
  );

  const headerHeight = useSelector(
    (state: RootState) => state.nav.headerHeight
  );

  const isMenuOpen = useSelector((state: RootState) => state.nav.open);

  const sortProducts = (a: Product, b: Product): number => {
    switch (sortByOption) {
      case SortProductsBy.MOST_UPVOTES:
        return b?.upvotes - a?.upvotes;
      case SortProductsBy.LEAST_UPVOTES:
        return a?.upvotes - b?.upvotes;
      case SortProductsBy.MOST_COMMENTS:
        return b?.comments?.length - a?.comments?.length;
      case SortProductsBy.LEAST_COMMENTS:
        return a?.comments?.length - b?.comments?.length;
      default:
        return 0;
    }
  };

  const sortedProducts = suggestions
    ? [...suggestions].sort((a, b) => sortProducts(a, b))
    : [];

  const filteredProducts = sortedProducts.filter((product) =>
    filterByOption === "all"
      ? product
      : product.category.toLowerCase() === filterByOption.toLowerCase()
  );

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&:before": {
            display: isMenuOpen ? "block" : "none",
            content: "''",
            position: "absolute",
            top: `${headerHeight}px`,
            inset: 0,
            background: "#00000076",
            zIndex: 100,
          },
        }}
      >
        <FilterAddFeedback />
        <Container maxWidth="md">
          <Stack gap={1.5} mt={3}>
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
