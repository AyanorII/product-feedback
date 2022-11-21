import GoBackIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { INFO_DARK_COLOR } from "../../lib/constants";
import AddFeedbackButton from "../AddFeedbackButton";

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
          <Button variant="text" href="/" startIcon={<GoBackIcon />}>
            Go Back
          </Button>
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
