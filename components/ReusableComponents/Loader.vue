<template>
  <div class="flex items-center justify-center">
    <svg
      :class="['animate-spin text-[#2B6F70]', classProps]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0116 0 8 8 0 01-16 0zm8-8a8 8 0 00-8 8h8V4z"
      ></path>
    </svg>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  classProps: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
