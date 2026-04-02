import express from "express";
import authRoutes from "./modules/auth/routes/authRoutes";
import { logger } from "./core/utils/logger";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
