<template>
  <div class="job-listing p-4 border-b mb-4 flex flex-col gap-[15px]">
    <div class="flex items-center gap-[15px]">
      <img
        :src="job.icon ?? VisitingAngelIcon"
        width="24px"
        class="border-[1px] border-[#E4E6E9] rounded-[2px] p-[3px] h-[32px] w-[32px]"
      />
      <div class="flex flex-col justify-center">
        <a :href="job.jobUrl" target="_blank" rel="noopener noreferrer">
          <span
            class="text-[14px] md:text-[18px] font-[500] text-[#2B6F70] hover:underline cursor-pointer"
          >
            {{ job.title }}
          </span>
        </a>
        <div class="flex items-center gap-[1px] md:gap-[4px]">
          <span class="text-[10px] md:text-[12px] font-[500] text-[#111111]">{{
            job.companyName
          }}</span>

          <ReusableComponentsStarRating :rating="job.rating ?? 4" />

          <span
            class="text-[10px] md:text-[12px] font-[500] text-[#111111] relative ml-2"
          >
            <span
              class="period absolute top-[50%] left-[-6px] translate-y-[-65%]"
              >.</span
            >
            {{ formattedPublishedAt }}</span
          >
        </div>
      </div>
    </div>
    <div class="flex gap-[5px] mb-[5px]">
      <ReusableComponentsBox
        width="max-content"
        backgroundColor="#EAF1F1"
        border="1px solid #E4E6E9"
        borderRadius="5px"
        classProps="px-[6px] md:px-[10px] py-[5px] text-[10px] md:text-[12px] text-[#2B6F70] font-[500] uppercase"
        v-if="job.salary"
      >
        {{ job.salary }}
      </ReusableComponentsBox>
      <ReusableComponentsBox
        width="max-content"
        backgroundColor="white"
        border="1px solid #E4E6E9"
        borderRadius="5px"
        classProps="px-[6px] md:px-[10px] py-[5px] text-[10px] md:text-[12px] text-[#2B6F70] font-[500] uppercase"
        v-if="job.jobType"
      >
        {{ job.jobType }}
      </ReusableComponentsBox>
      <ReusableComponentsBox
        width="max-content"
        backgroundColor="white"
        border="1px solid #E4E6E9"
        borderRadius="5px"
        classProps="px-[6px] md:px-[10px] py-[5px] text-[10px] md:text-[12px] text-[#2B6F70] font-[500] uppercase"
        v-if="job.location"
      >
        {{ job.location }}
      </ReusableComponentsBox>
    </div>

    <ReusableComponentsTruncateText
      :text="job.jobSummary"
      :color="'000000'"
      :fsize="'14px'"
      :padding="'0'"
      :limit="200"
      :isNoPaddingComponent="true"
      readMoreText="read more"
      v-if="job.jobSummary"
    />

    <FormFieldsButton
      title="Apply Now →"
      @click="handleApplyNow"
      classProps="rounded-[10px] !border-[1px] !border-[#9BA4AC] w-max text-[14px] h-[44px] px-[20px] bg-white hover:bg-[#2B6F70] hover:text-white"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "nuxt/app";
import { formatDistanceToNow, parseISO } from "date-fns";
import VisitingAngelIcon from "@/assets/svgs/visiting-angel-icon.svg";

const router = useRouter();
const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});
const formattedPublishedAt = computed(() => {
  return formatDistanceToNow(parseISO(props.job.publishedAt), {
    addSuffix: true,
  });
});
const handleApplyNow = () => {
  window.open(props.job.jobUrl, "_blank", "noopener,noreferrer");
};
</script>

<style scoped>
.job-listing {
  background-color: white;
}
</style>
