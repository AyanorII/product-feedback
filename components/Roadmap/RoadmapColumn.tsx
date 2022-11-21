import { Typography } from '@mui/material'
import React from 'react'
import { capitalize } from '../../lib/helpers'
import { ProductStatus } from '../../lib/interfaces'

type Props = {
  status: ProductStatus
  quantity: number
}

const RoadmapColumn = ({status, quantity}: Props) => {
  return (
    <div>
      <Typography variant="h5">{capitalize(status)} ({quantity})</Typography>
    </div>
  );
}

export default RoadmapColumn
