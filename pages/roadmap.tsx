import { Container, Grid, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import RoadmapColumn, {
  RoadmapColumnProps,
} from "../components/Roadmap/RoadmapColumn";
import RoadmapHeader from "../components/Roadmap/RoadmapHeader";
import RoadmapTabs from "../components/Roadmap/RoadmapTabs";
import { ProductsCount, ProductStatus } from "../lib/interfaces";
import { setInProgress, setLive, setPlanned } from "../store/productsSlice";

export const getServerSideProps = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/count`
  );
  const { data: count } = response;

  return {
    props: {
      count,
    },
  };
};

type Props = {
  count: ProductsCount;
};

const RoadmapPage = ({ count }: Props) => {
  const dispatch = useDispatch();

  const { inProgress, planned, live } = count;
  dispatch(setInProgress(inProgress));
  dispatch(setLive(live));
  dispatch(setPlanned(planned));

  const columns: RoadmapColumnProps[] = [
    {
      status: ProductStatus.PLANNED,
      quantity: planned,
      description: "Ideas prioritized for research",
    },
    {
      status: ProductStatus.IN_PROGRESS,
      quantity: inProgress,
      description: "Currently being developed",
    },
    {
      status: ProductStatus.LIVE,
      quantity: live,
      description: "Released features",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <RoadmapHeader />
      {isMobile ? (
        <RoadmapTabs columns={columns} />
      ) : (
        <Container sx={{marginTop: 5}}>
          <Grid container spacing={3}>
            {columns.map(({ status, description, quantity }) => (
              <Grid item xs key={status}>
                <RoadmapColumn
                  status={status}
                  description={description}
                  quantity={quantity}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default RoadmapPage;
