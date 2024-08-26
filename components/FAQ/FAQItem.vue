<template>
  <ReusableComponentsBox
    width="100%"
    backgroundColor="white"
    border="1px solid #E4E6E9"
    borderRadius="8px"
    classProps="p-[10px] flex flex-col"
  >
    <div
      @click="toggle"
      class="flex justify-between items-center cursor-pointer"
    >
      <h3 class="text-[16px] font-[500] text-[#000000]">{{ question }}</h3>
      <svg
        :class="{ 'rotate-180': isOpen }"
        class="w-5 h-5 text-[#111111] transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
    <div v-show="isOpen" class="mt-2 text-gray-600">
      <p>{{ answer }}</p>
    </div>
  </ReusableComponentsBox>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
