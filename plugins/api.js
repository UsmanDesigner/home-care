import { defineNuxtPlugin } from "#app";
import { useApi } from "~/services/api";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("api", useApi());
});
