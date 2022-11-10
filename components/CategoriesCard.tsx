import { Card, CardContent, Chip, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "../lib/helpers";
import { AllCategories, ProductCategory } from "../lib/interfaces";
import { setActiveCategory } from "../store/productsSlice";
import { RootState } from "../store/store";

type Props = {};

const CategoriesCard = (props: Props) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.products.activeCategory
  );

  const handleActiveCategory = (category: AllCategories) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <Card sx={{ padding: 3, borderRadius: "10px" }}>
      <CardContent sx={{ padding: 0 }}>
        <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
          <Chip
            label="All"
            onClick={() => handleActiveCategory("all")}
            className={activeCategory === "all" ? "active" : ""}
          />
          {Object.values(ProductCategory).map((category) => (
            <Chip
              key={category}
              label={capitalize(category)}
              onClick={() => handleActiveCategory(category)}
              className={activeCategory === category ? "active" : ""}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
