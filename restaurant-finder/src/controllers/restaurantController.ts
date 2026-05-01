import { Request, Response } from "express";
import { findNearbyRestaurants } from "../models/restaurantModel";

export const getNearbyRestaurants = async (req: Request, res: Response) => {

  const { lat, lng, radius } = req.query;

  try {

    const restaurants = await findNearbyRestaurants(
      Number(lat),
      Number(lng),
      Number(radius || 5)
    );

    res.json(restaurants);

  } catch (error) {

    console.error("ERROR:", error);

    res.status(500).json({
      message: "Error fetching restaurants",
      error
    });
  }
};
