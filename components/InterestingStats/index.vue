<template>
  <div class="flex flex-col gap-[25px]">
    <span class="text-[24px]"
      >Interesting Stats on {{ jobTitle }} Jobs in
      <span class="text-[#2B6F70]">{{ location }}</span></span
    >
    <div class="flex flex-col gap-4 md:gap-10 md:flex-row justify-between">
      <FindBetterJobJobsStaticCard
        v-for="stat in statistics"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :change="stat.change"
        :subtext="stat.subtext"
        :date="stat.date"
        :changeIcon="stat.changeIcon"
        width="49%"
      />
    </div>
  </div>

  <div class="flex flex-col lg:flex-row w-full flex-wrap gap-[60px]">
    <div class="flex flex-col w-full lg:w-[calc(50%-30px)]">
      <span class="text-[24px] my-[30px]"
        >Rank of Cities within 25 Miles with the most Registered nurses
        jobs</span
      >
      <TopEmployersSectionCityJobRow
        v-for="(job, index) in citiesWithJobs"
        :key="'cities-' + index"
        :city="job.city"
        :newJobs="job.newJobs"
        :change="job.change"
        :changeIcon="job.changeIcon"
      />
    </div>
    <div class="flex flex-col w-full lg:w-[calc(50%-30px)]">
      <span class="text-[24px] my-[30px]"
        >Rank of Companies within 25 Miles with the most Registered
        {{ jobTitle }} jobs</span
      >
      <div>
        <TopEmployersSectionCityJobRow
          v-for="(job, index) in coreTitlesWithJobs"
          :key="'titles-' + index"
          :city="job.city"
          :newJobs="job.newJobs"
          :change="job.change"
          :changeIcon="job.changeIcon"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { formatLocation } from "~/composables/useGlobalActions";
const route = useRoute();
const jobTitle = computed(() => route.query.jobTitle || "");
const location = computed(() => formatLocation(route.query) || "");
const statistics = ref([
  {
    title: "Registered nurse jobs posted by in home care employers ",
    value: "4,899",
    change: 6.47,
    subtext: "vs Last Week 4.2k",
    date: "Over last 7 Days",
    changeIcon: "increase",
  },
  {
    title: "Number of Active Employers in Home Health Hiring Now",
    value: "39",
    change: 6.47,
    subtext: "vs Last Week 4.2k",
    date: "Over last 7 Days",
    changeIcon: "increase",
  },
]);
const citiesWithJobs = [
  {
    city: "Atlanta, GA",
    newJobs: "8,000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  {
    city: "Orlando, FL",
    newJobs: "7,000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  {
    city: "Los Angeles, CA",
    newJobs: "6,000 New Jobs",
    change: 6.47,
    changeIcon: "decrease",
  },
  {
    city: "Dallas, TX",
    newJobs: "5,000 New Jobs",
    change: 6.47,
    changeIcon: "decrease",
  },
  {
    city: "Miami, FL",
    newJobs: "4,000 New Jobs",
    change: 6.47,
    changeIcon: "decrease",
  },
];

const coreTitlesWithJobs = [
  {
    city: "Atlanta, GA",
    newJobs: "8,000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  {
    city: "Orlando, FL",
    newJobs: "7,000 New Jobs",
    change: 6.47,
    changeIcon: "decrease",
  },
  {
    city: "Los Angeles, CA", // Corrected "CS" to "CA"
    newJobs: "6,000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  {
    city: "Dallas, TX",
    newJobs: "5,000 New Jobs",
    changeIcon: "decrease",
  },
  {
    city: "Miami, FL",
    newJobs: "4,000 New Jobs",
    changeIcon: "decrease",
  },
];
</script>
