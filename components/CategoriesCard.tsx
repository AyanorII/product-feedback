import { Card, CardContent, Chip, Stack } from '@mui/material';
import React from 'react'
import { ProductCategory } from '../lib/interfaces';

type Props = {}

const CategoriesCard = (props: Props) => {
  return (
    <Card sx={{ padding: 3, borderRadius: "10px" }}>
      <CardContent>
        <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
          <Chip label="All" />
          {Object.values(ProductCategory).map((category) => (
            <Chip key={category} label={category} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CategoriesCard;
