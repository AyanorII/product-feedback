import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { COLORS_MAP } from "../../lib/constants";
import { capitalize } from "../../lib/helpers";
import { Product, ProductCategory } from "../../lib/interfaces";
import CategoryChip from "../CategoryChip";
import CommentButton from "../CommentButton";
import UpvoteButton from "../UpvoteButton";

type ProductCardProps = {
  product: Product;
};

const RoadmapProductCard = ({ product }: ProductCardProps) => {
  const { title, description, comments, status } = product;
  return (
    <Card sx={{ borderTop: `6px solid ${COLORS_MAP[status]}` }}>
      <CardContent>
        <Stack flexDirection="row" alignItems="center" gap={1} marginBottom={1}>
          <Box
            borderRadius="50%"
            width="8px"
            height="8px"
            sx={{ backgroundColor: COLORS_MAP[status] }}
          />
          <Typography color="GrayText">
            {capitalize(status).replace("_", "-")}
          </Typography>
        </Stack>
        <Typography fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography color="GrayText" marginBottom={1}>
          {description}
        </Typography>
        <CategoryChip category={ProductCategory.FEATURE} />
        <Stack flexDirection="row" justifyContent="space-between" marginTop={2}>
          <UpvoteButton product={product} />
          <CommentButton comments={comments?.length || 0} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RoadmapProductCard
