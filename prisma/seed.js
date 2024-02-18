import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function main() {
  try {
    const gauthamVanjre = await prisma.user.upsert({
      where: { username: "@gautham10" },
      update: {},
      create: {
        name: "Gautham Vanjre",
        username: "@gautham10",
        email: "gauthamvanjre@gmail.com",
        createdAt: new Date(),
        expenses: {
          create: [
            {
              amount: 100,
              category: "need",
              description: "Spent on food",
              createdAt: new Date(),
            },
            {
              amount: 400,
              category: "wants",
              description: "Spent on movie",
              createdAt: new Date(),
            },
          ],
        },
      },
    });

    console.log("Create 1 user with 2 expenses ", gauthamVanjre);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
