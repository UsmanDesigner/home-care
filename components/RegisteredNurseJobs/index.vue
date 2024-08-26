<template>
  <Head>
    <Title>
      Showing top {{ jobSearchData?.items?.length }} Results for your search "{{
        route.query?.jobTitle ?? ""
      }}"
    </Title>
    <Meta name="keywords" :content="route?.query?.jobTitle ?? ''" />
    <Meta
      name="og:description"
      :content="`Showing all results for job title ${
        route.query?.jobTitle ?? ''
      } in ${route.query?.industry ?? ''} -- Home Care Insights`"
    />
    <Meta
      name="og:title"
      :content="`Showing top ${
        jobSearchData?.items?.length ?? ''
      } Results for your search ${route.query?.jobTitle ?? ''}`"
    />
    <Meta name="og:image" :content="AppLogo" />
    <Meta name="og:url" :content="route.fullPath" />
    <Meta name="al:web:url" :content="route.fullPath" />
    <Meta name="al:ios:url" :content="route.fullPath" />
  </Head>
  <div>
    <div class="flex flex-col lg:flex-row justify-between">
      <div class="flex flex-col gap-[5px] mb-[15px]">
        <span class="text-[24px] text-[#000000]"> {{ jobTitle }} Jobs </span>
        <span class="text-[16px] font-[500]">
          {{ jobs?.length }} {{ jobTitle }} Jobs within 25 miles of
          {{ location }}
          <a href="#" class="text-[#2B6F70] underline">Change location</a>
        </span>
      </div>
      <FormFieldsButton
        title="Open job and company filters →"
        backgroundColor="white"
        @click="handleOpenJob"
        classProps="rounded-[10px] !border-[1px] !border-[#9BA4AC] text-[14px] h-[44px] px-[20px]"
      />
    </div>
    <div v-for="(job, index) in jobSearchData?.items" :key="index" class="mb-4">
      <RegisteredNurseJobsJobListing :job="job" />
    </div>
    <div
      class="flex items-center justify-center text-center"
      v-if="totalResults > jobSearchData.items.length"
    >
      <FormFieldsButton
        :title="buttonTitle"
        @click="handlePageChange"
        classProps="rounded-[10px] !border-[1px] !border-[#9BA4AC] w-full md:w-max text-[14px] h-[44px] px-[20px] bg-white hover:bg-[#2B6F70] hover:text-white"
        :loading="loadingSearch"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useJobSearchData } from "@/composables/useState.js";
import { useJobSearch } from "~/composables/useJobSearch";
import { formatLocation } from "~/composables/useGlobalActions";
import AppLogo from "../assets/svgs/home-care-logo.svg";

const route = useRoute();
const jobSearchData = useJobSearchData();
const jobTitle = computed(() => route.query.jobTitle || "");
const location = computed(() => formatLocation(route.query) || "");

const { handleLoadMore, handleSearch, loadingSearch, totalResults } =
  useJobSearch();
const { data } = await useAsyncData("handleSearch", handleSearch);

const screenWidth = ref(window?.innerWidth);
const updateScreenWidth = () => {
  screenWidth.value = window?.innerWidth;
};

const handleOpenJob = () => {};
const handlePageChange = () => {
  handleLoadMore();
};

const buttonTitle = computed(() =>
  screenWidth.value >= 768
    ? `Load more jobs ${jobTitle.value} jobs in ${location.value}`
    : "Load more jobs"
);

const jobs = computed(() => jobSearchData.value?.items);

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
