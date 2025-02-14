import { requestHandler } from "./requestHandler";

export const hello = async () => {
  try {
  return await requestHandler("/api", "GET");
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error; // Rethrow the error if necessary
  }
};
