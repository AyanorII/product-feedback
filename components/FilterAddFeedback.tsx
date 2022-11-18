import { Add } from "@mui/icons-material";
import IdeaIcon from "@mui/icons-material/TipsAndUpdates";
import {
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  SxProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { INFO_DARK_COLOR } from "../lib/constants";
import { capitalize } from "../lib/helpers";
import { SortProductsBy } from "../lib/interfaces";
import { setSortByOption } from "../store/productsSlice";
import { RootState } from "../store/store";

type Props = {};

const FilterAddFeedback = (props: Props) => {
  const dispatch = useDispatch();

  const selectStyles: SxProps = {
    flexGrow: 1,
    position: "relative",
    border: "none",
    fontSize: "0.75rem",
    "& .MuiSelect-select": {
      paddingLeft: 0,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
    "& fieldset": {
      border: "none",
    },
    "&:before": {
      content: "'Sort by:'",
      color: "white",
      whiteSpace: "nowrap",
      marginRight: "8px",
    },
  };

  const totalSuggestions = useSelector(
    (state: RootState) => state.products.suggestionCount
  );

  const containerStyles: SxProps = {
    backgroundColor: {
      xs: INFO_DARK_COLOR,
      sm: "transparent",
    },
    paddingTop: {
      sm: 2,
      lg: 0
    },
  };

  const stackStyles: SxProps = {
    backgroundColor: INFO_DARK_COLOR,
    padding: {
      xs: "0",
      sm: "0.5rem 1rem",
    },
    borderRadius: "10px",
  };

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
          onChange={(e) =>
            dispatch(setSortByOption(e.target.value as SortProductsBy))
          }
          sx={selectStyles}
        >
          {Object.values(SortProductsBy).map((sortOption) => (
            <MenuItem key={sortOption} value={sortOption}>
              {capitalize(sortOption)}
            </MenuItem>
          ))}
        </Select>
        <Button color="secondary" variant="contained" startIcon={<Add />}>
          Add Feedback
        </Button>
      </Stack>
    </Container>
  );
};

export default FilterAddFeedback;
