import { Grid, Stack, Typography } from "@mui/material";
import {
  DANGER_LIGHT_COLOR,
  LIGHT_COLOR,
  LIVE_COLOR,
  SECONDARY_MAIN_COLOR,
} from "../lib/constants";
import CategoriesCard from "./CategoriesCard";
import RoadmapCard from "./RoadmapCard";

type Props = {};

const Header = (props: Props) => {
  const cardHeight = "192px";

  return (
    <Grid
      container
      padding={{ xs: "2rem 0 1rem", lg: 0 }}
      gap={2}
      alignItems="stretch"
    >
      <Grid item xs lg={12} height={cardHeight}>
        <Banner />
      </Grid>
      <Grid
        item
        xs
        lg={12}
        height={cardHeight}
        sx={{ "& > div": { height: "100%" } }}
      >
        <CategoriesCard />
      </Grid>
      <Grid item xs lg={12} height={cardHeight}>
        <RoadmapCard />
      </Grid>
    </Grid>
  );
};

export default Header;

const Banner = () => {
  return (
    <Stack
      justifyContent="end"
      sx={{
        borderRadius: "10px",
        height: "100%",
        padding: 1.5,
        background: `linear-gradient(211deg, ${DANGER_LIGHT_COLOR} 0%, ${SECONDARY_MAIN_COLOR} 46%, ${LIVE_COLOR} 100%)`,
      }}
    >
      <Typography variant="h6" fontWeight="bold" color={LIGHT_COLOR}>
        Frontend Mentor
      </Typography>
      <Typography color={LIGHT_COLOR}>Feedback Board</Typography>
    </Stack>
  );
};
