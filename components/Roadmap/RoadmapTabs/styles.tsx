import { SxProps } from "@mui/material";
import { INFO_LIGHT_COLOR } from "../../../lib/constants";

export const tabIndicatorStyles = (color: string): SxProps => {
  return { backgroundColor: color };
};

export const tabsStyles = (color: string): SxProps => {
  return {
    color,
    textTransform: "capitalize",
    "& .MuiTabs-flexContainer": {
      justifyContent: "space-evenly",
    },
    "& .MuiTab-root.Mui-selected": {
      color,
    },
    "& .MuiTab-root": {
      color: `${INFO_LIGHT_COLOR}75`,
      textTransform: "capitalize",
    },
  };
};
