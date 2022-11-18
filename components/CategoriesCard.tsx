import { Card, CardContent, Stack } from "@mui/material";
import { ProductCategory } from "../lib/interfaces";
import CategoryChip from "./CategoryChip";

type Props = {};

const CategoriesCard = (props: Props) => {
  return (
    <Card sx={{ padding: 3, borderRadius: "10px" }}>
      <CardContent sx={{ padding: 0 }}>
        <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
          <CategoryChip category="all" />
          {Object.values(ProductCategory).map((category) => (
            <CategoryChip key={category} category={category} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
