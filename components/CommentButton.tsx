import { Button } from '@mui/material';
import React from 'react'
import { INFO_DARK_COLOR, INFO_LIGHT_COLOR } from '../lib/constants';
import CommentIcon from '@mui/icons-material/Comment';

type Props = {
  comments: number
}

const CommentButton = ({comments}: Props) => {
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
}

export default CommentButton
