import { FirstType } from "./APITypes";

export const getHome = async () => {
  const fetchResp = await fetch("http://localhost:8081");
  const data = fetchResp.json();
  if (!fetchResp.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("fetch response: ", data);
};
