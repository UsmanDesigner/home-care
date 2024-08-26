import { ref } from "vue";
import { useNuxtApp } from "#app";
import { useRoute } from "nuxt/app";

export function useRegisteredJobs() {
  const { $api } = useNuxtApp();
  const faqs = ref([]);
  const loading = ref(false);
  const route = useRoute();

  const fetchFaqs = async () => {
    const query = route.query;
    loading.value = true;
    try {
      const response = await $api.GET(
        `/ca/interview-questions?coreJobTitle=${query.jobTitle}`
      );
      faqs.value = response?.[0]?.faq;
      return faqs.value;
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    } finally {
      loading.value = false;
    }
  };

  return {
    faqs,
    loading,
    fetchFaqs,
  };
}
