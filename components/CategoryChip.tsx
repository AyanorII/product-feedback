import { Chip, SxProps } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "../lib/helpers";
import { AllCategories } from "../lib/interfaces";
import { setActiveCategory } from "../store/productsSlice";
import { RootState } from "../store/store";

type Props = {
  category: AllCategories;
  sx?: SxProps;
};

const CategoryChip = ({ category, sx }: Props) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.products.activeCategory
  );

  const handleActiveCategory = (category: AllCategories) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <Chip
      label={capitalize(category)}
      onClick={() => handleActiveCategory(category)}
      className={
        activeCategory.toLowerCase() === category.toLowerCase() ? "active" : ""
      }
      sx={sx}
    />
  );
};

export default CategoryChip;
