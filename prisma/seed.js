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
      },
    });

    console.log("Create 1 user ", gauthamVanjre);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
