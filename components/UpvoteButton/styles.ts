import { SxProps } from '@mui/material';

export const chipStyles: SxProps = {
  paddingBlock: { lg: "2rem" },
  "& span": {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    flexDirection: {
      lg: "column",
    },
  },
};
