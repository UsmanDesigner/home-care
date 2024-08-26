import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useNuxtApp } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = useNuxtApp();
  const amCharts5 = {
    am5,
    am5map,
  };
  vueApp.amCharts5 = amCharts5;
});
