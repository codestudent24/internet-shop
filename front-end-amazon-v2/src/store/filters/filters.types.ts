import { TypeProductDataFilters } from "@/services/product/product.types";

export interface IFilterState {
  isFilterUpdated: boolean,
  queryParams: TypeProductDataFilters
}

export interface IFilterActionPayload {
  key: keyof TypeProductDataFilters,
  value: string
}