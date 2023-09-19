import prisma from "../database/database";
import { Product } from "@prisma/client";

const TABLE_NAME = "products";
export type CreatePost = Omit<Product, "id">

async function getProducts() {
  const resultGet = await prisma.product.findMany()
  console.log("result get", resultGet)
  return resultGet
}

async function getProduct(id: number) {
  const result = await prisma.product.findFirst({
    where: {id}
  })
  return result
}

async function createProduct(postInfo: CreatePost) {
  const resultPost = await prisma.product.create({
    data: postInfo

  })
  return resultPost
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;