import { products } from "../data/products"

export const orderProduct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}