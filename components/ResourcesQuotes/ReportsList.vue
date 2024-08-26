<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
    <ReusableComponentsBox
      v-for="(report, index) in reports"
      :key="index"
      width="100%"
      backgroundColor="white"
      border="1px solid #E4E6E9"
      borderRadius="8px"
      classProps="p-5 flex flex-col gap-[10px]"
    >
      <h3 class="text-[16px] text-[#2B6F70] font-[500]">{{ report.title }}</h3>
      <p class="text-black text-[12px] font-[500] ml-auto mt-auto">
        {{ report.date }}
      </p>
    </ReusableComponentsBox>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  reports: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
