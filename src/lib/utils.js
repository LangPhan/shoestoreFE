import {
  BEGIE_TAUPE,
  BLACK,
  BOLD_ORANGE,
  BROWN,
  BUBBLEGUM_PINK,
  METALLICS,
  MUSTARD_YELLOW,
  NAVY_BLUE,
  OLIVE_GREEN,
  PISTACHIO_GREEN,
  RED,
  WHITE,
} from "@/constant";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function convertConcurrency(price) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(price);
}

export function convertQueryString(queryString) {
  // Parse the query string into an object
  const params = new URLSearchParams(queryString);

  // Create a new instance of URLSearchParams to build the new query string
  const newParams = new URLSearchParams();

  // Iterate over all keys in the original params
  for (const [key, value] of params) {
    // Check if the value contains a comma
    if (value.includes(",")) {
      // Split the value by comma and add each as a new entry
      value.split(",").forEach((val) => newParams.append(key, val));
    } else {
      // If no comma, just add the key-value pair as is
      newParams.append(key, value);
    }
  }
  // Return the new query string
  return newParams.toString();
}

export const handleColorList = (color) => {
  if (color === "Red") {
    return RED;
  } else if (color === "Brown") {
    return BROWN;
  } else if (color === "Bubblegum Pink") {
    return BUBBLEGUM_PINK;
  } else if (color === "Bold Orange") {
    return BOLD_ORANGE;
  } else if (color === "Pistachio Green") {
    return PISTACHIO_GREEN;
  } else if (color === "Navy Blue") {
    return NAVY_BLUE;
  } else if (color === "Metallics") {
    return METALLICS;
  } else if (color === "White") {
    return WHITE;
  } else if (color === "Black") {
    return BLACK;
  } else if (color === "Beige/Taupe") {
    return BEGIE_TAUPE;
  } else if (color === "Olive Green") {
    return OLIVE_GREEN;
  } else if (color === "Mustard Yellow") {
    return MUSTARD_YELLOW;
  }
};
