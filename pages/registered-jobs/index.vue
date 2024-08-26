<template>
  <div>
    <div class="bg-white px-[20px] sm:px-[30px] customMedia:px-0">
      <SectionWidth>
        <ReusableComponentsBreadCrumb
          :crumbs="breadcrumbs"
          @navigate="handleNavigate"
        />
      </SectionWidth>
    </div>

    <section id="find-better-job">
      <SectionWidth>
        <div v-if="loadingSearch">
          <ReusableComponentsLoader classProps="h-16 w-16" />
        </div>
        <RegisteredNurseJobs v-if="!loadingSearch" />
      </SectionWidth>
    </section>
    <section id="interesting-stats">
      <SectionWidth>
        <InterestingStats />
      </SectionWidth>
    </section>
    <section id="registered-nurse-stats">
      <SectionWidth>
        <RegisteredNurseAnalytics />
      </SectionWidth>
    </section>
    <section id="frequently-asked-questions">
      <SectionWidth>
        <FAQ :items="faqs" v-if="!loading" />
        <div v-if="loading">
          <ReusableComponentsLoader classProps="h-16 w-16" />
        </div>
      </SectionWidth>
    </section>
  </div>
</template>
<script setup>
import SectionWidth from "~/components/ReusableComponents/SectionWidth.vue";
import { useRouter, useRoute } from "vue-router";
import { useRegisteredJobs } from "~/composables/useRegisteredJobs.js";
import { useJobSearch } from "~/composables/useJobSearch.js";

const router = useRouter();
const route = useRoute();
const jobTitle = computed(() => route.query.jobTitle || "");
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: `${jobTitle.value} Jobs`, href: "/registered-jobs" },
];
const handleNavigate = (href) => {
  router.push(href);
};

const { loading, fetchFaqs } = useRegisteredJobs();
const { loadingSearch } = useJobSearch();
const { data: faqs } = useAsyncData("faqs", fetchFaqs);
</script>
<style scoped>
section {
  padding: 40px 0;
  @media (max-width: 1140px) {
    padding: 40px 30px;
  }
  @media (max-width: 640px) {
    padding: 40px 20px;
  }
}
section:nth-child(even) {
  background-color: #fff;
}
section:nth-child(odd) {
  background-color: #f8f9f9;
}
h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}
p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
