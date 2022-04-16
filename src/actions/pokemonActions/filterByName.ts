import { FILTER_BY_NAME } from "types/actions";

export const filterByName = (name: string) => ({
  type: FILTER_BY_NAME,
  filteredName: name,
});
