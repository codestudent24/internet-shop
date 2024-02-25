import { EnumProductSort } from "@/services/product/product.types";
import { Dispatch, FC, SetStateAction } from "react";

interface ISortDropdown {
  sortType: EnumProductSort,
  setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

export const SortDropdown: FC<ISortDropdown> = ({
  sortType, setSortType
}) => {
  return <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg mb-5">
    <select
      id="categoryFilter"
      className="appearance-none w-full py-1 px-2 bg-white cursor-pointer"
      defaultValue={sortType}
      onChange={(event) => setSortType(event.target.value as EnumProductSort)}
    >
      {(
        Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
      ).map(key => {
        return (
          <option
            value={EnumProductSort[key]}
            key={EnumProductSort[key]}
          >
            {EnumProductSort[key]}
          </option>
        )
      })}
    </select>
  </div>
}

export default SortDropdown