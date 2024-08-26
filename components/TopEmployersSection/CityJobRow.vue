<template>
  <ReusableComponentsBox
    width="100%"
    backgroundColor="white"
    border="1px solid #E4E6E9"
    borderRadius="8px"
    classProps="px-[20px] py-[8px] flex items-center justify-between mb-[12px] min-h-[50px]"
  >
    <div>
      <h3 class="text-[12px] md:text-[16px] font-[500]">{{ city }}</h3>
    </div>
    <div class="flex items-center gap-[10px]">
      <p class="flex text-right text-[12px] md:text-[16px] mr-auto">
        {{ newJobs }}
      </p>
      <ReusableComponentsChangePill
        :change="change"
        :changeIcon="changeIcon"
        v-if="change"
      />
    </div>
  </ReusableComponentsBox>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  city: {
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
  changeIcon: {
    type: String,
    required: false,
  },
});
</script>

<style scoped></style>
