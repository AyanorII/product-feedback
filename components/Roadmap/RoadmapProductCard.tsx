import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { COLORS_MAP } from "../../lib/constants";
import { capitalize, truncate } from "../../lib/helpers";
import { Product, ProductCategory } from "../../lib/interfaces";
import { CommentButton, UpvoteButton } from "../Buttons";
import CategoryChip from "../CategoryChip";

type ProductCardProps = {
  product: Product;
};

const RoadmapProductCard = ({ product }: ProductCardProps) => {
  const { title, description, comments, status, id } = product;

  return (
    <Box sx={{ position: "relative" }}>
      <Link
        href={`/products/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          sx={{
            borderTop: `6px solid ${COLORS_MAP[status]}`,
            minHeight: "250px",
          }}
        >
          <CardContent
            sx={{
              height: "250px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              gap={1}
              marginBottom={1}
            >
              <Box
                borderRadius="50%"
                width="8px"
                height="8px"
                sx={{ backgroundColor: COLORS_MAP[status] }}
              />
              <Typography color="GrayText">{capitalize(status)}</Typography>
            </Stack>
            <div>
              <Typography fontWeight="bold" variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography
                color="GrayText"
                variant="body2"
                marginBottom={1}
                maxWidth="50ch"
              >
                {truncate(description, 75)}
              </Typography>
              <CategoryChip category={ProductCategory.FEATURE} />
            </div>
          </CardContent>
        </Card>
      </Link>
      <Box position="absolute" bottom={15} left={15}>
        <UpvoteButton product={product} direction="row" />
      </Box>
      <Box position="absolute" bottom={15} right={15}>
        <CommentButton comments={comments?.length || 0} />
      </Box>
    </Box>
  );
};

export default RoadmapProductCard;
