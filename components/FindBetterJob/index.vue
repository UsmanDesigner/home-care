<template>
  <div class="flex flex-col gap-[30px]">
    <div class="flex flex-col items-center">
      <span class="sm:text-[20px] md:[30px] xl:text-[45px] font-[400]"
        >Find a Better Job in the</span
      >
      <span class="sm:text-[20px] md:[30px] xl:text-[50px] font-[700]"
        >Home Health Industry.</span
      >
    </div>
    <ReusableComponentsBox
      width="100%"
      backgroundColor="white"
      border="1px solid #E4E6E9"
      borderRadius="10px"
      classProps="!shadow-md p-[40px] flex flex-col lg:flex-row gap-5 lg:gap-1 justify-between items-center"
    >
      <FormFieldsInputField
        id="job-title"
        label="Your next job title"
        placeholder="Job Title Function"
        v-model="jobTitle"
        classProps="w-full lg:w-[318px] flex"
        @keyup.enter="handleSearchIfNeeded"
      />
      <FormFieldsAutoCompleteInput
        :suggestions="locations"
        id="job-location"
        label="Job location"
        placeholder="Anywhere, City, State, Zip Code, Remote"
        classProps="w-full lg:w-[354px]"
        v-model="jobLocation"
        :loading="loading"
        @input="debouncedHandleInput"
        @keyup.enter="handleSearchIfNeeded"
      />
      <FormFieldsButton
        title="Search Job →"
        backgroundColor="#2B6F70"
        @click="handleSearch"
        classProps="rounded-[10px] w-full lg:w-[138px] text-[14px] text-white px-[12px] h-[44px]"
        :loading="loadingSearch"
      />
      <FormFieldsButton
        title="Advanced Search"
        backgroundColor="white"
        @click="handleSearch"
        :postfix="DropDownIcon"
        classProps="rounded-[10px] text-[14px] font-[500] text-[#2B6F70] h-[44px] w-full lg:w-max"
      />
    </ReusableComponentsBox>
    <div class="flex items-center justify-center">
      <span
        class="text-[16px] font-[500] text-[#111111] text-center max-w-[920px] px-5 lg:px-0"
        >Browse real-time insights and research your next job in the broad Home
        Health and Elderly Care Industry. The only platform focused only on jobs
        in Senior Living, Hospice & Palliative Care, Home Care employers.</span
      >
    </div>
    <div class="flex flex-col lg:flex-row gap-5 justify-between">
      <FindBetterJobJobsStaticCard
        v-for="stat in statistics"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :change="stat.change"
        :subtext="stat.subtext"
        :date="stat.date"
        :changeIcon="stat.changeIcon"
        width="32%"
      />
    </div>
  </div>
</template>
<script setup>
import DropDownIcon from "@/assets/svgs/drop-down-icon.svg";
import { useJobSearch } from "~/composables/useJobSearch";

import { debounce } from "~/utils/debounce";
const {
  jobTitle,
  jobLocation,
  locations,
  loading,
  searchReults,
  fetchLocations,
  handleSearch,
  loadingSearch,
} = useJobSearch();

const handleInput = () => {
  fetchLocations(jobLocation.value);
};
const debouncedHandleInput = debounce(handleInput, 300);
const handleSearchIfNeeded = () => {
  if (jobTitle.value || jobLocation.value) {
    handleSearch();
  }
};

const statistics = ref([
  {
    title: "Total Jobs",
    value: "601,377",
    change: 6.47,
    subtext: "vs Last Week",
    date: "5/1/2024",
    changeIcon: "increase",
  },
  {
    title: "NEW JOBS IN HOME HEALTH",
    value: "4,899",
    change: 6.47,
    subtext: "vs Last Week 4.2k",
    date: "This Week",
    changeIcon: "increase",
  },
  {
    title: "EMPLOYERS HIRING NOW",
    value: "1,416",
    change: 6.47,
    subtext: "vs Previous Month 1.4k",
    date: "5/1/2024",
    changeIcon: "decrease",
  },
]);
</script>
<style scoped></style>
