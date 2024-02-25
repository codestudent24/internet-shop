import { IProduct } from "@/types/product.interface";
import Heading from "@/ui/Heading";
import Loader from "@/ui/loader/Loader";
import { FC } from "react";
import ProductItem from "./product-item/ProductItem";

interface ICatalog {
  products: IProduct[],
  isLoading?: boolean,
  title?: string,
}

const Catalog: FC<ICatalog> = (
  {products, isLoading, title}
) => {
  if (isLoading) return <Loader />

  return <section>
    {title && <Heading className="mb-5">{title}</Heading>}
    {products.length ? (
      <div className="grid grid-cols-4 gap-10">
        {products.map(
          product => <ProductItem product={product} key={product.id} />
        )}
      </div>
    ) : (
      <div>There are no products</div>
    )
    }
  </section>
}

export default Catalog