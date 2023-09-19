import prisma from "./database/database";
import { posts } from "@prisma/client";

async function find() {

  const users = await prisma.posts.findMany();

  return users

};

(async () => {
  const users = await find();
  console.log(users)
})();