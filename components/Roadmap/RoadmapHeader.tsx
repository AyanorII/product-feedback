import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { INFO_DARK_COLOR, LIGHT_COLOR } from "../../lib/constants";
import { AddFeedbackButton, GoBackButton } from "../Buttons";

type Props = {};

const RoadmapHeader = (props: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container disableGutters={isMobile} sx={{ marginTop: { md: 3 } }}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={{ xs: 2, md: 3 }}
        sx={{
          backgroundColor: INFO_DARK_COLOR,
          borderRadius: {
            md: "10px",
          },
        }}
      >
        <Stack>
          <GoBackButton color={LIGHT_COLOR} />
          <Typography
            variant="h6"
            color="#FFF"
            fontWeight="bold"
            paddingLeft={1}
          >
            Roadmap
          </Typography>
        </Stack>
        <AddFeedbackButton />
      </Stack>
    </Container>
  );
};

export default RoadmapHeader;
