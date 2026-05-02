import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import { pool } from "./db";
import express from "express";
import restaurantRoutes from "./routes/restaurantRoutes";

const app = express();
app.use(express.json());

(async () => {
  try {
    const res = await pool.query("SELECT * FROM restaurants");
    console.log(" DB Connected:", res.rows);
  } catch (err: any) {
     console.error("FULL ERROR:", {
    message: err.message,
    code: err.code,
    detail: err.detail,
  });
  }
})();

app.use("/restaurants", restaurantRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
