import { ProductStatus } from "./interfaces";

/* --------------------------------- Colors --------------------------------- */
export const PRIMARY_MAIN_COLOR = "#4661E6";
export const PRIMARY_LIGHT_COLOR = "#7C91F9";
export const SECONDARY_MAIN_COLOR = "#AD1FEA";
export const SECONDARY_LIGHT_COLOR = "#C75AF6";
export const INFO_DARK_COLOR = "#3A4374";
export const INFO_LIGHT_COLOR = "#656EA3";
export const DANGER_MAIN_COLOR = "#D73737";
export const DANGER_LIGHT_COLOR = "#E98888";

export const PLANNED_COLOR = "#F49F85";
export const IN_PROGRESS_COLOR = "#AD1FEA";
export const LIVE_COLOR = "#62BCFA";

export const LIGHT_COLOR = "#FFFFFF";
export const BACKGROUND_COLOR = "#F2F4FF";

export const COLORS_MAP = {
  [ProductStatus.PLANNED]: PLANNED_COLOR,
  [ProductStatus.IN_PROGRESS]: IN_PROGRESS_COLOR,
  [ProductStatus.LIVE]: LIVE_COLOR,
  [ProductStatus.SUGGESTION]: INFO_DARK_COLOR,
};
/* --------------------------------- Colors --------------------------------- */
