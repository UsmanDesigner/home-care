<template>
  <Head>
    <Title
      >Home Page Insights - Find a Better Job in the Home Health
      Industry.</Title
    >
    <meta name="og:image" :content="AppLogo" />

    <Meta name="og:url" :content="route.fullPath" />
    <meta name="al:web:url" :content="route.fullPath" />
    <meta name="al:ios:url" :content="route.fullPath" />
    <Meta
      name="og:title"
      :content="`Home Page Insights - Find a Better Job in the Home Health
    Industry.`"
    />
  </Head>
  <div>
    <section id="find-better-job">
      <SectionWidth>
        <FindBetterJob />
      </SectionWidth>
    </section>

    <section id="top-employess-section">
      <SectionWidth>
        <TopEmployersSection />
      </SectionWidth>
    </section>

    <section id="new-job-with-map">
      <SectionWidth>
        <NewJobsWithMapAndState />
      </SectionWidth>
    </section>

    <section id="resources-quotes">
      <SectionWidth>
        <ResourcesQuotes />
      </SectionWidth>
    </section>
    <section id="popular-job-searhes">
      <SectionWidth>
        <PopularJobSearches />
      </SectionWidth>
    </section>
    <section id="frequently-asked-questions">
      <SectionWidth>
        <FAQ :items="faqs" />
      </SectionWidth>
    </section>
  </div>
</template>

<script setup>
import SectionWidth from "~/components/ReusableComponents/SectionWidth.vue";
const route = useRoute();
import AppLogo from "../assets/svgs/home-care-logo.svg";
const faqs = ref([
  {
    question: "How long does it take to fly from New York to Paris?",
    answer:
      "The average flight time from New York to Paris is about 7 hours and 30 minutes.",
  },
  {
    question: "When are the cheapest days to fly from New York to Paris?",
    answer:
      "The cheapest days to fly are usually mid-week, such as Tuesdays and Wednesdays.",
  },
  {
    question:
      "Which airlines provide the cheapest flights from New York to Paris?",
    answer:
      "Budget airlines like Norwegian and low-cost carriers often provide the cheapest flights, but major airlines like Delta and Air France also offer competitive prices.",
  },
  {
    question: "When are direct flights from New York to Paris?",
    answer:
      "Direct flights are available daily from major airlines such as Delta, Air France, and American Airlines.",
  },
  {
    question: "Which airlines have direct flights from New York to Paris?",
    answer:
      "Airlines like Delta, Air France, and American Airlines provide direct flights from New York to Paris.",
  },
]);
</script>

<style scoped>
section {
  padding: 50px 0;
  @media (max-width: 1140px) {
    padding: 50px 30px;
  }
  @media (max-width: 640px) {
    padding: 40px 20px;
  }
}
section:nth-child(odd) {
  background-color: #fff;
}
section:nth-child(even) {
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
