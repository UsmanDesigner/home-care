import { useState } from "nuxt/app";

export const useJobSearchData = () => {
  return useState("jobSearchData", () => []);
};
