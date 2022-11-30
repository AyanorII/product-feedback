import CommentIcon from "@mui/icons-material/Comment";
import { Button } from "@mui/material";
import { INFO_DARK_COLOR, INFO_LIGHT_COLOR } from "../../lib/constants";

type Props = {
  comments: number;
};

const CommentButton = ({ comments }: Props) => {
  return (
    <Button
      sx={{
        color: INFO_DARK_COLOR,
      }}
      startIcon={
        <CommentIcon
          sx={{
            color: INFO_LIGHT_COLOR,
          }}
        />
      }
    >
      {comments}
    </Button>
  );
};

export default CommentButton;
