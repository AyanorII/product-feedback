import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Chip, SxProps } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Product } from "../../lib/interfaces";

type UpvoteButtonProps = {
  product: Product;
  direction?: "row" | "column";
};

const UpvoteButton = ({ product, direction = "column" }: UpvoteButtonProps) => {
  const [upvotes, setUpvotes] = useState(product.upvotes);

  const handleUpvote = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}/upvote`;

    try {
      const response = await axios.patch(apiUrl);
      const { data } = response;

      setUpvotes(data.upvotes);
    } catch (err) {
      console.log(err);
    }
  };

  const chipStyles: SxProps = {
    paddingBlock: { sm: direction === "column" ? "2rem" : "0" },
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      flexDirection: {
        sm: direction || "column",
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

export default UpvoteButton;
