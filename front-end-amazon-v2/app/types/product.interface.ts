import { ICategory } from "./category.interface"
import { IReview } from "./review.interface"

export interface IProduct {
  images: string[],
  description: string,
  id: number,
  name: string,
  price: number,
  createdAt: string,
  slug: string,
  reviews: IReview[],
  category: ICategory
}

export type TypeProducts = {
  products: IProduct[]
}

export type TypePaginationProducts = {
  products: IProduct[],
  length: number
}