import { pool } from "../db";

export const findNearbyRestaurants = async (
  lat: number,
  lng: number,
  radius: number
) => {

  const query = `
    WITH nearby AS (
    SELECT *,
    (
      6371 * acos(
        cos(radians($1)) *
        cos(radians(latitude)) *
        cos(radians(longitude)-radians($2)) +
        sin(radians($1)) *
        sin(radians(latitude))
      )
    ) AS distance
    FROM restaurants
  )
  SELECT *
  FROM nearby
  WHERE distance < $3
  ORDER BY distance;
  `;

  const result = await pool.query(query, [lat, lng, radius]);

  return result.rows;
};
