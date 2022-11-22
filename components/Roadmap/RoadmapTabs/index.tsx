import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { COLORS_MAP } from "../../../lib/constants";
import { ProductStatus } from "../../../lib/interfaces";
import { RootState } from "../../../store/store";
import RoadmapColumn, { RoadmapColumnProps } from "../RoadmapColumn";
import { tabIndicatorStyles, tabsStyles } from "./styles";

type Props = {};

const RoadmapTabs = (props: Props) => {
  const [value, setValue] = useState(ProductStatus.PLANNED);

  const handleChange = (_e: SyntheticEvent, newValue: ProductStatus) => {
    setValue(newValue);
  };

  const count = useSelector((state: RootState) => state.products.count);

  const columns: RoadmapColumnProps[] = [
    {
      status: ProductStatus.PLANNED,
      quantity: count.planned,
      description: "Ideas prioritized for research",
    },
    {
      status: ProductStatus.IN_PROGRESS,
      quantity: count.inProgress,
      description: "Currently being developed",
    },
    {
      status: ProductStatus.LIVE,
      quantity: count.live,
      description: "Released features",
    },
  ];

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: tabIndicatorStyles(COLORS_MAP[value] as string),
          }}
          sx={tabsStyles(COLORS_MAP[value] as string)}
        >
          <Tab label="Planned" value={ProductStatus.PLANNED} />
          <Tab label="In-progress" value={ProductStatus.IN_PROGRESS} />
          <Tab label="Live" value={ProductStatus.LIVE} />
        </Tabs>
      </Box>
      {columns.map(({ status, quantity, description }) => (
        <TabPanel key={status} value={status}>
          <RoadmapColumn
            status={status}
            quantity={quantity}
            description={description}
          />
        </TabPanel>
      ))}
    </TabContext>
  );
};

export default RoadmapTabs;
