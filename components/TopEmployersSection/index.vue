<template>
  <div>
    <div class="flex flex-col gap-[30px]">
      <span class="text-[24px]">Top 10 Employer with the Most New Jobs</span>
      <div v-if="!loadingEmployers">
        <TopEmployersSectionJobRow
          v-for="(job, index) in jobs"
          :key="index"
          :title="job.name"
          :rating="job.rating"
          :postingDate="job.postingDate"
          :newJobs="job.newJobs"
          :change="job.change"
          :changeIcon="job.changeIcon"
          :icon="job.icon"
        />
      </div>
      <div v-else>
        <ReusableComponentsLoader classProps="h-16 w-16" />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full flex-wrap gap-[60px]">
      <div class="flex flex-col w-full lg:w-[calc(50%-30px)]">
        <span class="text-[24px] my-[30px]">
          Top 10 Cities with Most New Jobs
        </span>
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
        <span class="text-[24px] my-[30px]">
          Top 10 Core Title Most New Jobs
        </span>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import BJCHealthIcon from "@/assets/svgs/bhc-healthcare.svg";
import { useJobSearch } from "~/composables/useJobSearch";
const { fetchTop10Employers, loadingEmployers } = useJobSearch();

const jobs = ref([]);
const fetchJobs = async () => {
  const { data: employersData } = await useAsyncData(
    "fetchTop10Employers",
    fetchTop10Employers
  );
  jobs.value = employersData.value?.slice(0, 5).map((job) => ({
    icon: BJCHealthIcon,
    rating: 3,
    postingDate: "· Posted Yesterday",
    newJobs: "4,000",
    change: 6.47,
    changeIcon: "increase",
    name: job.name || "Unknown",
  }));
};

await fetchJobs();

const citiesWithJobs = [
  {
    city: "Atlanta Us, GA",
    newJobs: "8.000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  {
    city: "Orlando, FL",
    newJobs: "7.000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  {
    city: "Los Angeles, CS",
    newJobs: "6.000 New Jobs",
    change: 6.47,
    changeIcon: "decrease",
  },
  {
    city: "Dallas, TX",
    newJobs: "5.000 New Jobs",
    change: 6.47,
    changeIcon: "decrease",
  },
  { city: "Miami, FL", newJobs: "4.000 New Jobs" },
];

const coreTitlesWithJobs = [
  {
    city: "Atlanta UA, GA",
    newJobs: "8.000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  {
    city: "Orlando, FL",
    newJobs: "7.000 New Jobs",
    change: 6.47,
    changeIcon: "decrease",
  },
  {
    city: "Los Angeles, CS",
    newJobs: "6.000 New Jobs",
    change: 6.47,
    changeIcon: "increase",
  },
  { city: "Dallas, TX", newJobs: "5.000 New Jobs" },
  { city: "Miami, FL", newJobs: "4.000 New Jobs" },
];
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
