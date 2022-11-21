import { SxProps } from "@mui/material";
import { INFO_DARK_COLOR, SECONDARY_MAIN_COLOR } from "../../lib/constants";

export const selectStyles: SxProps = {
  flexGrow: 1,
  position: "relative",
  border: "none",
  fontSize: "0.75rem",
  "& .MuiSvgIcon-root": {
    display: "none",
  },
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

export const containerStyles: SxProps = {
  backgroundColor: {
    xs: INFO_DARK_COLOR,
    sm: "transparent",
  },
  paddingTop: {
    sm: 2,
    lg: 0,
  },
};

export const stackStyles: SxProps = {
  backgroundColor: INFO_DARK_COLOR,
  padding: {
    xs: "0",
    sm: "0.5rem 1rem",
  },
  borderRadius: "10px",
};

export const selectMenuStyles: SxProps = {
  "& .MuiPaper-root": {
    minWidth: "200px !important",
  },
};

export const menuItemStyles: SxProps = {
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  position: "relative",

  "&:hover": {
    color: SECONDARY_MAIN_COLOR,
  },

  "& .MuiSvgIcon-root": {
    position: "absolute",
    right: 5,
    top: "4px",
  },
};
