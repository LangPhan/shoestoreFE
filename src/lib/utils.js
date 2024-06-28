import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function covertConcurrency(price) {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return USDollar.format(price)
}

export function convertQueryString(queryString) {
  // Parse the query string into an object
  const params = new URLSearchParams(queryString);

  // Create a new instance of URLSearchParams to build the new query string
  const newParams = new URLSearchParams();

  // Iterate over all keys in the original params
  for (const [key, value] of params) {
    // Check if the value contains a comma
    if (value.includes(',')) {
      // Split the value by comma and add each as a new entry
      value.split(',').forEach(val => newParams.append(key, val));
    } else {
      // If no comma, just add the key-value pair as is
      newParams.append(key, value);
    }
  }
  // Return the new query string
  return newParams.toString();
}