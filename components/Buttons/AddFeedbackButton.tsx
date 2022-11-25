import { Add } from '@mui/icons-material';
import { Button, useMediaQuery } from '@mui/material';
import React from 'react'

type Props = {}

const AddFeedbackButton = (props: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Button
      color="secondary"
      variant="contained"
      startIcon={<Add />}
      size={isMobile ? "medium" : "large"}
    >
      Add Feedback
    </Button>
  );
}

export default AddFeedbackButton
