import { Post } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
const resultGet = await prisma.post.findMany()
console.log("result get", resultGet)
return resultGet
}

async function getPost(id: number) {
const result = await prisma.post.findFirst({
  where: {id}
})
return result
}

async function createPost(postInfo: CreatePost) {

  const resultPost = await prisma.post.create({
    data: postInfo

  })
  return resultPost
}

async function deletePost(id: number) {
const resultDelete = await prisma.post.delete({
  where: {id}
})

return resultDelete
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;