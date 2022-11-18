import CommentIcon from "@mui/icons-material/Comment";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Card, CardContent, Chip, Typography } from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { INFO_DARK_COLOR, INFO_LIGHT_COLOR } from "../lib/constants";
import { capitalize } from "../lib/helpers";
import { Product } from "../lib/interfaces";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { title, description, category, comments } = product;

  return (
    <Card>
      <CardContent sx={{ padding: 3 }}>
        <Typography fontWeight="bold" variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography color="GrayText" variant="body2" gutterBottom>
          {description}
        </Typography>
        <Chip label={capitalize(category)} sx={{ marginTop: 1 }} />
        <Stack flexDirection="row" justifyContent="space-between" mt={1.5}>
          <UpvoteButton product={product} />
          <Button
            sx={{ color: INFO_DARK_COLOR }}
            startIcon={<CommentIcon sx={{ color: INFO_LIGHT_COLOR }} />}
          >
            {comments?.length || "0"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

type UpvoteButtonProps = {
  product: Product;
};

const UpvoteButton = ({ product }: UpvoteButtonProps) => {
  const [upvotes, setUpvotes] = useState(product.upvotes);

  const handleUpvote = async () => {
    const apiUrl = `http://localhost:8000/products/${product.id}/upvote`;

    try {
      const response = await axios.patch(apiUrl);
      const { data } = response;

      setUpvotes(data.upvotes);
    } catch (err) {
      console.log(err);
    }
  };

  const chipStyles: SxProps = {
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
    },
  };

  return (
    <Chip
      onClick={async () => handleUpvote()}
      label={
        <>
          <UpIcon />
          {upvotes}
        </>
      }
      sx={chipStyles}
    />
  );
};
