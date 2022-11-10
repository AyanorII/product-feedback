import { Add } from "@mui/icons-material";
import {
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  SxProps,
  useMediaQuery,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { INFO_DARK_COLOR } from "../lib/constants";
import { capitalize } from "../lib/helpers";
import { SortProductsBy } from "../lib/interfaces";
import { setSortByOption } from "../store/productsSlice";

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

  const isTablet = useMediaQuery("(max-width: 600px)");

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: isTablet ? INFO_DARK_COLOR : "transparent",
        paddingTop: {
          sm: 2
        }
      }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={2}
        sx={{
          backgroundColor: INFO_DARK_COLOR,
          padding: {
            xs: "0",
            sm: "0.5rem 1rem",
          },
          borderRadius: "10px",
        }}
      >
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
