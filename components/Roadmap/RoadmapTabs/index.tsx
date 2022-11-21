import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import {
  INFO_DARK_COLOR,
  IN_PROGRESS_COLOR,
  LIVE_COLOR,
  PLANNED_COLOR,
} from "../../../lib/constants";
import { ProductStatus } from "../../../lib/interfaces";
import { tabIndicatorStyles, tabsStyles } from "./styles";

type Props = {};

const RoadmapTabs = (props: Props) => {
  const [value, setValue] = useState(ProductStatus.PLANNED);

  const handleChange = (_e: SyntheticEvent, newValue: ProductStatus) => {
    setValue(newValue);
  };

  const colorsMap = {
    [ProductStatus.PLANNED]: PLANNED_COLOR,
    [ProductStatus.IN_PROGRESS]: IN_PROGRESS_COLOR,
    [ProductStatus.LIVE]: LIVE_COLOR,
    [ProductStatus.SUGGESTION]: INFO_DARK_COLOR,
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: tabIndicatorStyles(colorsMap[value] as string),
          }}
          sx={tabsStyles(colorsMap[value] as string)}
        >
          <Tab label="Planned" value={ProductStatus.PLANNED} />
          <Tab label="In-progress" value={ProductStatus.IN_PROGRESS} />
          <Tab label="Live" value={ProductStatus.LIVE} />
        </Tabs>
      </Box>
      <TabPanel value={ProductStatus.PLANNED}>Planned</TabPanel>
      <TabPanel value={ProductStatus.IN_PROGRESS}>In-progress</TabPanel>
      <TabPanel value={ProductStatus.LIVE}>Live</TabPanel>
    </TabContext>
  );
};

export default RoadmapTabs;
