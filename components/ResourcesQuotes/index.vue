<template>
  <div>
    <div class="flex flex-col gap-[30px]">
      <span class="text-[24px]"
        >Resources the Talent and Talent Acquisition Pros in the Home Health
        Industry</span
      >
      <span class="text-[16px] font-[500]"
        >Daily, Weekly and Monthly Industry Reports</span
      >
      <ResourcesQuotesReportsList :reports="reports" />
    </div>
  </div>
</template>
<script setup>
const reports = [
  {
    title: "Ranking of the most valuable Home Health company in public markets",
    date: "April 2024",
  },
  {
    title: "Summary of Last Week’s News on Home Health Companies",
    date: "05/01 - 05/07",
  },
  {
    title: "Monthly Employer Ratings Tracker",
    date: "April 2024",
  },
  {
    title: "Social Advertising Trends in Home Health",
    date: "April 2024",
  },
  {
    title: "Employer Branding Strength",
    date: "April 2024",
  },
  {
    title: "Applicant Tracking System (ATS) Home Health Industry Report",
    date: "April 2024",
  },
];
</script>
<style scoped></style>
