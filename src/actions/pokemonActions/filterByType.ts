import { FILTER_BY_TYPE } from "types/actions";

export const filterByType = (filteredType: string) => ({
  type: FILTER_BY_TYPE,
  filteredType,
});
