import axios from "axios";
import { useDispatch } from "react-redux";
import RoadmapHeader from "../components/Roadmap/RoadmapHeader";
import RoadmapTabs from "../components/Roadmap/RoadmapTabs";
import { ProductsCount } from "../lib/interfaces";
import { setInProgress, setLive, setPlanned } from "../store/productsSlice";

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:8000/products/count");
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

  return (
    <div>
      <RoadmapHeader />
      <RoadmapTabs />
    </div>
  );
};

export default RoadmapPage;
