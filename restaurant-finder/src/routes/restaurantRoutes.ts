import express from "express";
import { getNearbyRestaurants } from "../controllers/restaurantController";

const router = express.Router();

router.get("/nearby", getNearbyRestaurants);

export default router;
