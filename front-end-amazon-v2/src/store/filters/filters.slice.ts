import { EnumProductSort } from "@/services/product/product.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterActionPayload, IFilterState } from "./filters.types";

const initialState: IFilterState = {
  isFilterUpdated: false,
  queryParams: {
    sort: EnumProductSort.NEWEST,
    searchTerm: '',
    page: 1,
    perPage: 20,
    ratings: ''
  }
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateQueryParam: (state, action: PayloadAction<IFilterActionPayload>) => {
      const { key, value } = action.payload
      state.queryParams[key] = value
      state.isFilterUpdated = true
    },
    reset: (state) => {
      state.isFilterUpdated = false
    }
  }
})