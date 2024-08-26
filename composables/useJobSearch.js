import { ref } from "vue";
import { useApi } from "~/services/api";
import { useRouter, useRoute } from "nuxt/app";
import { useJobSearchData } from "@/composables/useState.js";

export function useJobSearch() {
  const $api = useApi();
  const page = ref(1);
  const pageSize = ref(10);
  const jobTitle = ref("");
  const jobLocation = ref("");
  const locations = ref([]);
  const loading = ref(false);
  const loadingIndustryList = ref(false);
  const fetchIndustriesData = ref([]);
  const loadingSearch = ref(false);
  const loadingEmployers = ref(false);
  const fetchEmployersData = ref([]);
  const searchResults = ref([]);
  const router = useRouter();
  const route = useRoute();
  const jobSearchData = useJobSearchData();
  const totalResults = useState(() => 10);

  const fetchLocations = async (query) => {
    loading.value = true;
    try {
      const response = await $api.GET("/ca/localization/search-address/", {
        query,
      });
      locations.value = response;
    } catch (error) {
      console.error("Error fetching location:", error);
    } finally {
      loading.value = false;
    }
  };
  const handleSearch = async () => {
    if (loadingSearch.value === true) return;
    const query = route.query;
    loadingSearch.value = true;

    const jobTitleValue = query.jobTitle || jobTitle.value;
    const jobLocationValue = jobLocation.value;
    const pageValue = page.value;
    const pageSizeValue = query.pageSize || pageSize.value;

    const formatLocation = (location) => {
      const { street, city, region, country } = location;
      return `${street ? `${street}, ` : ""}${city ? `${city}, ` : ""}${
        region ? `${region}, ` : ""
      }${country ? country : ""}`;
    };

    const selectedLocation = locations.value.find(
      (location) =>
        formatLocation(location).toLowerCase() ===
        jobLocationValue.toLowerCase()
    );

    const payload = {
      industry: "Home Health",
      jobTitle: jobTitleValue || undefined,
      city: query.city || selectedLocation?.city || undefined,
      region: query.region || selectedLocation?.region || undefined,
      country: query.country || selectedLocation?.country || undefined,
      page: pageValue,
      pageSize: parseInt(pageSizeValue),
    };
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => value !== undefined)
    );

    const queryString = new URLSearchParams(filteredPayload).toString();

    try {
      const response = await $api.GET(`/search/advanced-search?${queryString}`);
      searchResults.value = response;
      jobSearchData.value = response;
      totalResults.value = response.pagination.totalItems;

      router.push({ path: "/registered-jobs", query: filteredPayload });

      return response;
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      loadingSearch.value = false;
    }
  };

  const handleLoadMore = async () => {
    if (loadingSearch.value) return;

    const remainingItems =
      totalResults.value - jobSearchData.value.items?.length;

    if (remainingItems <= 0) {
      return;
    }

    if (remainingItems < 10) {
      pageSize.value += remainingItems;
    } else {
      pageSize.value += 10;
    }

    await handleSearch();
  };

  const fetchIndustriesjobList = async () => {
    loadingIndustryList.value = true;
    const query = "Home Health";
    const url = `/ca/industry-job-list/${encodeURIComponent(query)}/`;
    try {
      const response = await $api.GET(url);
      fetchIndustriesData.value = response.industries;
      return response.industries;
    } catch (error) {
      console.error("Error fetching industries:", error);
    } finally {
      loadingIndustryList.value = false;
    }
  };

  const fetchTop10Employers = async () => {
    loadingEmployers.value = true;
    const url = `/ca/client/home-health/list`;
    try {
      const response = await $api.GET(url);
      fetchEmployersData.value = response.clients;
      return response.clients;
    } catch (error) {
      console.error("Error fetching employers:", error);
    } finally {
      loadingEmployers.value = false;
    }
  };

  return {
    jobTitle,
    jobLocation,
    locations,
    loading,
    searchResults,
    fetchLocations,
    handleSearch,
    loadingSearch,
    fetchIndustriesjobList,
    fetchIndustriesData,
    loadingIndustryList,
    loadingEmployers,
    fetchEmployersData,
    fetchTop10Employers,
    handleLoadMore,
    totalResults,
  };
}
