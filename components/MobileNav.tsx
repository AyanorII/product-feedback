import {
  Box,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  BACKGROUND_COLOR,
  IN_PROGRESS_COLOR,
  LIVE_COLOR,
  PLANNED_COLOR,
  SECONDARY_MAIN_COLOR,
} from "../lib/constants";
import { ProductCategory } from "../lib/interfaces";
import { RootState } from "../store/store";

type Props = {
  isMenuOpen: boolean;
};

interface IStatus {
  color: string;
  label: string;
  quantity: number;
}

const MobileNav = ({ isMenuOpen }: Props) => {
  const headerHeight = useSelector(
    (state: RootState) => state.nav.headerHeight
  );

  const statuses: IStatus[] = [
    {
      label: "Planned",
      color: PLANNED_COLOR,
      quantity: 2,
    },
    {
      label: "In-Progress",
      color: IN_PROGRESS_COLOR,
      quantity: 1,
    },
    {
      label: "Live",
      color: LIVE_COLOR,
      quantity: 3,
    },
  ];

  return (
    <Stack
      gap={3}
      position="fixed"
      top={headerHeight}
      bottom={0}
      padding={3}
      right={isMenuOpen ? 0 : "-100%"}
      sx={{
        transition: "all 0.3s ease-in-out",
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      <Card sx={{ padding: 3, borderRadius: "10px" }}>
        <CardContent>
          <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
            <Chip label="All" />
            {Object.values(ProductCategory).map((category) => (
              <Chip key={category} label={category} />
            ))}
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ padding: 3, borderRadius: "10px" }}>
        <CardContent>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={2}
          >
            <Typography fontWeight="bold" variant="h6">
              Roadmap
            </Typography>
            <Link
              href="TODO"
              style={{
                color: SECONDARY_MAIN_COLOR,
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              View
            </Link>
          </Stack>
          <Stack gap={1}>
            {statuses.map(({ color, label, quantity }) => (
              <Status
                key={label}
                label={label}
                color={color}
                quantity={quantity}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
      <Paper></Paper>
    </Stack>
  );
};

export default MobileNav;

type DotProps = {
  color: string;
};

const Dot = ({ color }: DotProps) => {
  return (
    <Box
      sx={{
        width: "10px",
        height: "10px",
        backgroundColor: color,
        borderRadius: "50%",
      }}
    ></Box>
  );
};

const Status = ({ color, label, quantity }: IStatus) => {
  return (
    <Stack flexDirection="row" alignItems="center" gap={2}>
      <Dot color={color} />
      <Typography flexGrow={1} letterSpacing="0.5px" color="GreyText">
        {label}
      </Typography>
      <Typography fontWeight="bold">{quantity}</Typography>
    </Stack>
  );
};
