import {
  Avatar,
  Button,
  Grid,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { INFO_LIGHT_COLOR, PRIMARY_LIGHT_COLOR } from "../lib/constants";
import { Comment as IComment, User } from "../lib/interfaces";

type Props = {
  comment: IComment;
  user: User;
};

const Comment = ({ comment, user }: Props) => {
  const { content, replying_to, replies } = comment;

  const commentsStackStyles: SxProps = {
    position: { xs: "relative", sm: "static" },
    "&::before": {
      content: "''",
      position: "absolute",
      width: "1px",
      top: { xs: 0, sm: "60px" },
      bottom: 0,
      left: { xs: 0, sm: 18 },
      background: `${INFO_LIGHT_COLOR}40`,
    },
  };

  return (
    <Grid container justifyContent={{ sm: "end" }} position="relative">
      {/* ----------------------------- Avatar ----------------------------- */}
      <Grid item sm={1} mr={1} position="relative" zIndex={1000}>
        <Avatar
          sx={{ border: "1px solid #00000010" }}
          src={comment.user.photo}
          alt={user.username}
        />
      </Grid>
      {/* ----------------------------- Avatar ----------------------------- */}
      {/* ---------------------------- User Info --------------------------- */}
      <Grid item sm>
        <Stack>
          <Typography fontWeight="bold">{user.name}</Typography>
          <Typography sx={{ color: INFO_LIGHT_COLOR }}>
            @{user.username}
          </Typography>
        </Stack>
      </Grid>
      {/* ---------------------------- User Info --------------------------- */}
      {/* --------------------------- Reply Button ------------------------- */}
      <Grid item xs sm={1} display="flex" sx={{ justifyContent: "end" }}>
        <Button variant="text" sx={{ color: PRIMARY_LIGHT_COLOR }}>
          Reply
        </Button>
      </Grid>
      {/* --------------------------- Reply Button ------------------------- */}
      {/* ----------------------------- Comment ---------------------------- */}
      <Grid item xs={12} sm={11} mt={1}>
        <Typography color={INFO_LIGHT_COLOR} maxWidth="100%" ml={1}>
          {replying_to && (
            <Typography color="secondary" fontWeight="bold" component="span">
              @{replying_to}{" "}
            </Typography>
          )}
          {content}
        </Typography>
      </Grid>
      {/* ----------------------------- Comment ---------------------------- */}
      {replies?.length >= 1 && (
        <Stack
          gap={3}
          mt={3}
          pl={{ xs: 3, sm: 5 }}
          ml={{ sm: 3 }}
          sx={commentsStackStyles}
        >
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} user={reply.user} />
          ))}
        </Stack>
      )}
    </Grid>
  );
};

export default Comment;
