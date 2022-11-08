import CommentIcon from "@mui/icons-material/Comment";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Card, CardContent, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { INFO_DARK_COLOR, INFO_LIGHT_COLOR } from "../lib/constants";
import { capitalize } from "../lib/helpers";
import { Product } from "../lib/interfaces";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { title, description, category, upvotes, comments } = product;

  return (
    <Card>
      <CardContent sx={{ padding: 3 }}>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography color="GrayText" variant="body2">
          {description}
        </Typography>
        <Chip label={capitalize(category)} sx={{ marginTop: 1 }} />
        <Stack flexDirection="row" justifyContent="space-between" mt={1}>
          <Chip
            label={
              <>
                <UpIcon />
                {upvotes}
              </>
            }
            sx={{
              "& span": {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
            }}
          />
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
