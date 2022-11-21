import { Typography } from "@mui/material";
import { capitalize } from "../../lib/helpers";
import { ProductStatus } from "../../lib/interfaces";

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
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {capitalize(status.replace(/[^a-zA-Z]/, " "))} ({quantity})
      </Typography>
      <Typography color="GrayText" fontWeight="medium">
        {description}
      </Typography>
    </div>
  );
};

export default RoadmapColumn;
