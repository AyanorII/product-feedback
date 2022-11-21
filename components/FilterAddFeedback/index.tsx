import { Add } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import IdeaIcon from "@mui/icons-material/TipsAndUpdates";
import {
  Button,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "../../lib/helpers";
import { SortProductsBy } from "../../lib/interfaces";
import { setSortByOption } from "../../store/productsSlice";
import { RootState } from "../../store/store";
import AddFeedbackButton from "../AddFeedbackButton";
import {
  containerStyles,
  menuItemStyles,
  selectMenuStyles,
  selectStyles,
  stackStyles,
} from "./styles";

type Props = {};

const FilterAddFeedback = (props: Props) => {
  const dispatch = useDispatch();
  const sortByOption = useSelector(
    (state: RootState) => state.products.sortByOption
  );

  const totalSuggestions = useSelector(
    (state: RootState) => state.products.count.suggestion
  );

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container maxWidth={false} disableGutters={!isMobile} sx={containerStyles}>
      <Stack flexDirection="row" alignItems="center" gap={4} sx={stackStyles}>
        <Stack
          flexDirection="row"
          gap={2}
          display={{ xs: "none", sm: "flex" }}
          color="white"
        >
          <IdeaIcon />
          <Typography fontWeight="bold">
            {totalSuggestions} Suggestions
          </Typography>
        </Stack>
        <Select
          defaultValue="most upvotes"
          onChange={(e: SelectChangeEvent) =>
            dispatch(setSortByOption(e.target.value as SortProductsBy))
          }
          sx={selectStyles}
          MenuProps={{ sx: selectMenuStyles }}
        >
          {Object.values(SortProductsBy).map((sortOption) => (
            <MenuItem key={sortOption} value={sortOption} sx={menuItemStyles}>
              {capitalize(sortOption)}
              <CheckIcon
                color="secondary"
                sx={{ display: sortOption === sortByOption ? "block" : "none" }}
              />
            </MenuItem>
          ))}
        </Select>
        <AddFeedbackButton />
      </Stack>
    </Container>
  );
};

export default FilterAddFeedback;
