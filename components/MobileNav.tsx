import { Paper, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { BACKGROUND_COLOR } from "../lib/constants";
import { RootState } from "../store/store";
import CategoriesCard from "./CategoriesCard";
import RoadmapCard from "./RoadmapCard";

type Props = {
  isMenuOpen: boolean;
};

const MobileNav = ({ isMenuOpen }: Props) => {
  const headerHeight = useSelector(
    (state: RootState) => state.nav.headerHeight
  );

  return (
    <Stack
      gap={3}
      position="fixed"
      top={headerHeight}
      bottom={0}
      padding={3}
      right={isMenuOpen ? 0 : "-100%"}
      sx={{
        transition: "all 0.3s ease-in-out",
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      <CategoriesCard />
      <RoadmapCard />
    </Stack>
  );
};

export default MobileNav;
