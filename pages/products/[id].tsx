import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { GoBackButton } from "../../components/Buttons";
import Comment from "../../components/Comment";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../lib/interfaces";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params!.id!;

  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
  const response = await axios.get(url);
  const product = response.data;

  return {
    props: {
      product,
    },
  };
};

type Props = {
  product: Product;
};

const pluralize = (str: string, condition: boolean): string =>
  condition ? str + "s" : str;

const ProductDetailsPage: NextPage<Props> = ({ product }: Props) => {
  const { comments_count, comments } = product;

  return (
    <Container maxWidth="md" sx={{ mb: 3, mt: { sm: 3, md: 4, lg: 5 } }}>
      <Stack flexDirection="row" justifyContent="space-between" mb={3}>
        <GoBackButton />
        <Button variant="contained" color="primary">
          Edit feedback
        </Button>
      </Stack>
      <ProductCard product={product} />
      <Card sx={{ mt: 3, padding: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {`${comments_count} ${pluralize(
              "Comment",
              comments_count > 1 || comments_count === 0
            )}`}
          </Typography>
          <Stack gap={4} mt={2} mb={2}>
            {comments.map((comment, index) => {
              const isLastComment = comments.length - 1 === index;

              return (
                <Box key={comment.id}>
                  <Comment comment={comment} user={comment.user} />
                  {!isLastComment && <Divider sx={{ marginTop: 3 }} />}
                </Box>
              );
            })}
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailsPage;
