import CommentIcon from "@mui/icons-material/Comment";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { INFO_DARK_COLOR, INFO_LIGHT_COLOR } from "../lib/constants";
import { Product } from "../lib/interfaces";
import CategoryChip from "./CategoryChip";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { comments } = product;

  return (
    <Card>
      <CardContent sx={{ padding: 3 }}>
        <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
          <Grid item xs={12} sm>
            <Info product={product} />
          </Grid>
          <Grid
            item
            xs={6}
            sm="auto"
            sx={{ order: { sm: -1 }, paddingBlock: { lg: "2rem" } }}
          >
            <UpvoteButton product={product} />
          </Grid>
          <Grid item xs={6} sm="auto" display="flex" justifyContent="end">
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
              {comments?.length || "0"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

type InfoProps = {
  product: Product;
};

const Info = ({ product }: InfoProps) => {
  const { title, description, category } = product;

  return (
    <Stack alignItems="start">
      <Typography fontWeight="bold" variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography color="GrayText" variant="body2" gutterBottom>
        {description}
      </Typography>
      <CategoryChip category={category} sx={{ mt: 1 }} />
    </Stack>
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
    paddingBlock: { lg: "2rem" },
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      flexDirection: {
        lg: "column",
      },
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
