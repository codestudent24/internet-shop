import ProductService from "@/services/product/product.service";
import { EnumProductSort } from "@/services/product/product.types";
import { TypePaginationProducts } from "@/types/product.interface";
import Heading from "@/ui/Heading";
import Loader from "@/ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import Button from "../button/Button";
import { SortDropdown } from "./SortDropdown";
import ProductItem from "./product-item/ProductItem";

interface ICatalogPagination {
  data: TypePaginationProducts,
  title?: string,
}

const CatalogPagination: FC<ICatalogPagination> = (
  {data, title}
) => {
  const [page, setPage] = useState(1)
  const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

  const { data: response, isLoading } = useQuery({
    queryKey: ['products', sortType, page],
    queryFn: () => ProductService.getAll({
      page,
      perPage: 4,
      sort: sortType
    }),
    initialData: data
  })

  if (isLoading) return <Loader />

  return <section>
    {title && <Heading className="mb-5">{title}</Heading>}
    <SortDropdown sortType={sortType} setSortType={setSortType} />
    {response.products.length ?
      <>
        <div className="grid grid-cols-4 gap-10">
          {response.products.map(
            product => <ProductItem product={product} key={product.id} />
          )}
        </div>
        <div className="text-center mt-16">
          {Array.from({ length: Math.ceil(response.length / 4) }).map((_, index) => {
            const pageNumber = index + 1
            return (
              <Button
                variant={ page === pageNumber ? 'orange' : 'white' }
                size="sm"
                onClick={() => setPage(pageNumber)}
                className="mx-3"
                key={pageNumber}
              >
                {pageNumber}
              </Button>
            )
          })}
        </div>
      </> :
      <div>There are no products</div>
    }
  </section>
}

export default CatalogPagination