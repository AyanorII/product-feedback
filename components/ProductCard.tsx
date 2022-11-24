import { Box, Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import { Product } from "../lib/interfaces";
import CategoryChip from "./CategoryChip";
import CommentButton from "./CommentButton";
import UpvoteButton from "./UpvoteButton";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { comments_count, id } = product;

  return (
    <Card sx={{ position: "relative" }}>
      <Link
        href={`/products/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardContent sx={{ padding: 3 }}>
          <Box paddingBottom={{ xs: 6, sm: 0 }} paddingLeft={{ sm: 9 }}>
            <Info product={product} />
          </Box>
        </CardContent>
      </Link>
      <Box
        position="absolute"
        bottom={{ xs: 15, sm: "unset" }}
        top={{ sm: 25 }}
        left={25}
      >
        <UpvoteButton product={product} />
      </Box>
      <Box
        position="absolute"
        bottom={{ xs: 10, sm: "50%" }}
        right={15}
        sx={{
          transform: { sm: "translateY(50%)" },
        }}
      >
        <CommentButton comments={comments_count} />
      </Box>
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
