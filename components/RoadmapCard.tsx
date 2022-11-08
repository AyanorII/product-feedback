import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IN_PROGRESS_COLOR,
  LIVE_COLOR,
  PLANNED_COLOR,
  SECONDARY_MAIN_COLOR,
} from "../lib/constants";
import { setInProgress, setLive, setPlanned } from "../store/productsSlice";
import { RootState } from "../store/store";
import { PRIMARY_MAIN_COLOR } from '../lib/constants';

const RoadmapCard = () => {
  const dispatch = useDispatch();

  const getProductsCounts = async () => {
    const response = await axios.get("http://localhost:8000/products/count");
    const { inProgress, live, planned } = await response.data;

    dispatch(setInProgress(inProgress));
    dispatch(setLive(live));
    dispatch(setPlanned(planned));
  };

  useEffect(() => {
    getProductsCounts();
  }, []);

  const statuses: IStatus[] = [
    {
      label: "Planned",
      color: PLANNED_COLOR,
      quantity: useSelector((state: RootState) => state.products.planned),
    },
    {
      label: "In-Progress",
      color: IN_PROGRESS_COLOR,
      quantity: useSelector((state: RootState) => state.products.inProgress),
    },
    {
      label: "Live",
      color: LIVE_COLOR,
      quantity: useSelector((state: RootState) => state.products.live),
    },
  ];

  return (
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
              color: PRIMARY_MAIN_COLOR,
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
  );
};

export default RoadmapCard;

type DotProps = {
  color: string;
};

interface IStatus {
  color: string;
  label: string;
  quantity: number;
}

const Dot = ({ color }: DotProps) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        borderRadius: "50%",
        width: "10px",
        height: "10px",
      }}
    />
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
