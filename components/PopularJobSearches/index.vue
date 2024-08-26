<template>
  <div class="job-search-list">
    <h2 class="text-2xl font-semibold mb-6">
      Popular Job Searches in Home Health this week
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[50px]"
      v-if="!loadingIndustryList"
    >
      <PopularJobSearchesJobSearchItem
        v-for="(job, index) in fetchIndustriesData"
        :key="index"
        :title="job.industry"
      />
    </div>
    <div class="mt-[50px]" v-if="loadingIndustryList">
      <ReusableComponentsLoader classProps="h-16 w-16" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useJobSearch } from "~/composables/useJobSearch";

const { loadingIndustryList, fetchIndustriesjobList } = useJobSearch();
const { data: fetchIndustriesData } = await useAsyncData(
  "fetchIndustriesjobList",
  fetchIndustriesjobList
);

const jobs = ref([
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
  "Core Job Title Jobs in City, State",
]);
</script>

<style scoped></style>
