import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Chip } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Product } from "../../lib/interfaces";
import { chipStyles } from "./styles";

type UpvoteButtonProps = {
  product: Product;
};

const UpvoteButton = ({ product }: UpvoteButtonProps) => {
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
