import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { capitalize } from "../../lib/helpers";
import { Product, ProductStatus } from "../../lib/interfaces";
import RoadmapProductCard from "./RoadmapProductCard";

export type RoadmapColumnProps = {
  status: ProductStatus;
  quantity: number;
  description: string;
};

const RoadmapColumn = ({
  status,
  quantity,
  description,
}: RoadmapColumnProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${status
        .toLowerCase()
        .replace("_", "-")}`
    );

    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {capitalize(status.replace(/[^a-zA-Z]/, " "))} ({quantity})
      </Typography>
      <Typography color="GrayText" fontWeight="medium" marginBottom={3}>
        {description}
      </Typography>
      <Stack gap={3}>
        {products.map((product) => {
          return <RoadmapProductCard key={product.id} product={product} />;
        })}
      </Stack>
    </div>
  );
};

export default RoadmapColumn;
