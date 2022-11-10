import { Container, Grid, Stack, Typography } from "@mui/material";
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
  return (
    <Container maxWidth="md">
      <Grid container padding="2rem 0 1rem" gap={2} alignItems="stretch">
        <Grid xs item>
          <Banner />
        </Grid>
        <Grid xs item sx={{ "& > div": { height: "100%" } }}>
          <CategoriesCard />
        </Grid>
        <Grid xs item>
          <RoadmapCard />
        </Grid>
      </Grid>
    </Container>
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
