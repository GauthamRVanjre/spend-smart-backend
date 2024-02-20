import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        expenses: true,
      },
    });

    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error, could not get users" });
  }
});

export default router;
