<template>
  <RegisteredNurseAnalyticsRNCharts />

  <div class="job-search-list">
    <h2 class="text-[32px] font-[400] mb-6">Locations near by</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[50px]">
      <PopularJobSearchesJobSearchItem
        v-for="(job, index) in jobs"
        :key="index"
        :title="job"
      />
    </div>
  </div>
</template>
<script setup>
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
