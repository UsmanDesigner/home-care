<template>
  <ReusableComponentsBox
    width="100%"
    backgroundColor="white"
    border="1px solid #E4E6E9"
    borderRadius="8px"
    classProps="px-[20px] py-[8px] flex flex-col  lg:flex-row items-left lg:items-center justify-between mb-[10px]"
  >
    <div class="flex items-center gap-[20px]">
      <img :src="icon" />
      <h3 class="text-[16px] font-[500]">{{ title }}</h3>
      <ReusableComponentsStarRating :rating="rating" />
    </div>
    <div class="flex items-center gap-[20px]">
      <p class="text-[#2B6F70] text-[16px] font-[500]">
        {{ newJobs }} New Jobs
      </p>
      <ReusableComponentsChangePill :change="change" :changeIcon="changeIcon" />
    </div>
  </ReusableComponentsBox>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  postingDate: {
    type: String,
    required: true,
  },
  newJobs: {
    type: String,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  changeIcon: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
