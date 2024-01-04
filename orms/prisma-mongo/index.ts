import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.create({
  //     data: {
  //       name: "Majeed",
  //       email: "majeed.dl@gmail.com",
  //       posts: {
  //         create: {
  //           title: "My first post",
  //           body: "Lots of really interesting stuff",
  //           slug: "my-first-post",
  //         },
  //       },
  //     },
  //   });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(allUsers, { depth: null });

  await prisma.post.update({
    where: {
      slug: "my-first-post",
    },
    data: {
      comments: {
        createMany: {
          data: [{ comment: "Great post!" }, { comment: "Can't wait to read more!" }],
        },
      },
    },
  });

  const allPosts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });

  console.dir(allPosts, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
