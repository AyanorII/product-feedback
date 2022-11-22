import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Product } from "../lib/interfaces";
import CategoryChip from "./CategoryChip";
import CommentButton from "./CommentButton";
import UpvoteButton from "./UpvoteButton";

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
            <CommentButton comments={comments?.length || 0} />
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
