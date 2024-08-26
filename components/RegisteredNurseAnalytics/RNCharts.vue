<template>
  <ClientOnly>
    <div class="border-[1px] p-[10px] lg:p-[40px] mb-[40px]">
      <span class="text-[24px] mb-[20px]">
        Registered Nurse Remote Jobs Market Analysis
      </span>
      <div
        class="flex items-center flex-col lg:flex-row justify-center lg:justify-around"
      >
        <div class="chart-container">
          <apexchart type="pie" :options="chartOptions" :series="series" />
        </div>
        <div class="bar-chart-container">
          <apexchart
            type="bar"
            :options="chartOptionsBar"
            :series="seriesBar"
          ></apexchart>
        </div>
      </div>
      <span class="text-[16px] font-[500]">
        Source: Talentify Research Team
      </span>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from "vue";

const series = ref([44, 55, 13, 33]);
const chartOptions = ref({
  chart: {
    type: "pie",
  },
  labels: ["Full Time", "Part Time", "Other", "Contract"],
  theme: {
    monochrome: {
      enabled: true,
      color: "#5BEDF0",
      shadeTo: "light",
      shadeIntensity: 0.6,
    },
  },
  title: {
    align: "center",
    style: {
      fontSize: "24px",
    },
  },
  plotOptions: {
    pie: {
      stroke: {
        show: false,
      },
    },
  },
  legend: {
    position: "right",
    verticalAlign: "center",
    horizontalAlign: "center",
    containerMargin: {
      left: 0,
      right: 0,
    },
    fontSize: "16px",
    markers: {
      width: 20,
      height: 20,
      offsetX: -10,
      offsetY: 4,
    },
  },

  stroke: {
    show: true,
    curve: "straight",
    lineCap: "butt",
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  series: [
    {
      justifyContent: "center",
    },
  ],
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
          height: 400,
        },
        legend: {
          position: "bottom",
          left: 35,
          right: 60,
          fontSize: "10px",
          markers: {
            width: 15,
            height: 15,
            offsetX: 0,
            offsetY: 0,
          },
          display: "flex",
        },
      },
    },
  ],
});
const chartOptionsBar = ref({
  series: [
    {
      name: "Sales",
    },
  ],
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "90%",
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  theme: {
    monochrome: {
      enabled: true,
      color: "#5BEDF0",
      shadeTo: "light",
      shadeIntensity: 0.6,
    },
  },
  grid: {
    borderColor: "transparent",
    yaxis: {
      lines: {
        show: false,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
});

const seriesBar = ref([
  {
    name: "sales",
    data: [
      { x: "$10", y: 400 },
      { x: "$20", y: 430 },
      { x: "$100", y: 448 },
      { x: "$50", y: 448 },
    ],
  },
]);
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 356px;
}

.bar-chart-container {
  position: relative;
  height: 340px;
  max-width: 500px;
  width: 100%;
  @media (max-width: 480px) {
    height: 100%;
  }
}
</style>
