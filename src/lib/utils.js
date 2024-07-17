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

export function getAccessToken() {
  return JSON.parse(
    localStorage.getItem("token")
  )?.accessToken;
}

export function convertConcurrency(price) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(price);
}
export function formatCurrencyVND(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
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

export const convertToDate = (str) => {
  const year = str.substring(0, 4);
  const month = str.substring(4, 6);
  const day = str.substring(6, 8);
  const hour = str.substring(8, 10);
  const minute = str.substring(
    10,
    12
  );
  const second = str.substring(
    12,
    14
  );

  // Creating a new Date object
  const date = new Date(
    `${year}-${month}-${day}T${hour}:${minute}:${second}`
  );

  // Formatting to "dd/mm/yyyy hh:mm:ss"
  const formattedDate =
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

  return formattedDate;
};

export function adjustTextareaHeight(event) {
  const textarea = event.target;
  textarea.style.height = "auto"; // Reset height to auto to get the correct new height
  textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to scroll height
  const minHeight = 20; // Minimum height for the textarea, adjust as needed
  if (
    textarea.scrollHeight <
    textarea.clientHeight
  ) {
    textarea.style.height = `${minHeight}px`; // Temporarily shrink to force recalculation
    textarea.style.height = `${Math.max(
      textarea.scrollHeight,
      minHeight
    )}px`; // Adjust to new content or minHeight
  }

  // Apply overflow:hidden when height is less than 100px
  if (textarea.clientHeight < 100) {
    textarea.style.overflow =
      "hidden";
  } else {
    textarea.style.overflow =
      "scroll"; // or "auto" if you prefer
  }
}

export function getJsonRecommend(data) {
  return data?.candidates[0]?.content
    .parts[0]
    .jsonRecommendReturnType;
}