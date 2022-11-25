import GoBackIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { INFO_DARK_COLOR } from "../../lib/constants";

type Props = {
  href?: string;
  color?: string;
};

const GoBackButton = ({ href = "/", color = INFO_DARK_COLOR }: Props) => {
  return (
    <Button
      variant="text"
      href={href}
      startIcon={<GoBackIcon />}
      sx={{ color }}
    >
      Go Back
    </Button>
  );
};

export default GoBackButton;
