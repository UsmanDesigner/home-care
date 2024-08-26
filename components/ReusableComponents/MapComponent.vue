<template>
  <div class="grid grid-cols-1 md:grid-cols-[60%,auto] gap-[50px] items-center">
    <div
      id="mapDiv"
      ref="mapDiv"
      style="width: 100%; max-width: 514px; height: 320px"
    ></div>
    <div class="flex flex-col gap-[6px] ml-[20px] w-full">
      <div
        v-for="(percentage, color) in colorPercentages"
        :key="color"
        class="flex items-center"
      >
        <div
          :style="{
            backgroundColor: color,
            width: '20px',
            height: '20px',
            marginRight: '10px',
            borderRadius: '50%',
          }"
        ></div>
        <span class="font-[500] text-[16px]">{{ percentage.toFixed(2) }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from "nuxt/app";
import { onMounted, ref, reactive } from "vue";
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";

const mapDiv = ref(null);
const { vueApp } = useNuxtApp();

const colorPercentages = reactive({});
const colorLabels = {
  "#4cc5c7": "Color 1",
  "#2b6f70": "Color 2",
  "#3c9c9e": "Color 3",
  "#1d4c4d": "Color 4",
  "#5bedf0": "Color 5",
};

onMounted(() => {
  const root = vueApp.amCharts5?.am5?.Root.new(mapDiv.value);
  root._logo.dispose();

  const chart = root.container.children.push(
    vueApp.amCharts5?.am5map?.MapChart.new(root, {
      panX: "rotateX",
      projection: vueApp.amCharts5?.am5map?.geoAlbersUsa(),
      logo: false,
    })
  );

  const polygonSeries = chart.series.push(
    vueApp.amCharts5?.am5map?.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_usaLow,
      exclude: ["US-AK", "US-HI"],
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    templateField: "polygonSettings",
  });

  const colors = [
    am5.color(0x2b6f70),
    am5.color(0x4cc5c7),
    am5.color(0x3c9c9e),
    am5.color(0x1d4c4d),
    am5.color(0x5bedf0),
  ];
  const colorCounts = {
    "#2b6f70": 0,
    "#4cc5c7": 0,
    "#3c9c9e": 0,
    "#1d4c4d": 0,
    "#5bedf0": 0,
  };

  const stateData = am5geodata_usaLow.features
    .filter((feature) => feature.id !== "US-AK" && feature.id !== "US-HI")
    .map((feature, index) => {
      const color = colors[index % colors.length].toCSSHex();
      colorCounts[color] += 1;
      return {
        id: feature.id,
        polygonSettings: {
          fill: color,
        },
      };
    });

  polygonSeries.data.setAll(stateData);

  const totalStates = stateData.length;
  Object.keys(colorCounts).forEach((color) => {
    colorPercentages[color] = (colorCounts[color] / totalStates) * 100;
  });
});
</script>

<style scoped></style>
