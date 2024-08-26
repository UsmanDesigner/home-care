<template>
  <ReusableComponentsBox
    :width="width"
    backgroundColor="white"
    border="1px solid #E4E6E9"
    borderRadius="8px"
    classProps="p-[20px] flex flex-col !w-full lg:w-auto"
  >
    <span class="text-[#000000] font-[500] text-[12px]">{{ title }}</span>
    <span class="text-[44px] font-[700] text-black">{{ value }}</span>
    <div class="flex justify-between items-center">
      <div class="flex gap-[10px] items-center">
        <ReusableComponentsChangePill
          :change="change"
          :changeIcon="changeIcon"
        />
        <span class="text-[12px] font-[500]">{{ subtext }}</span>
      </div>

      <span class="text-[12px] font-[500]">{{ date }}</span>
    </div>
  </ReusableComponentsBox>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
  subtext: {
    type: String,
    required: true,
  },
  date: {
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
