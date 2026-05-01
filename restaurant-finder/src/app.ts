import express from "express";
import restaurantRoutes from "./routes/restaurantRoutes";

const app = express();

app.use(express.json());

app.use("/restaurants", restaurantRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
