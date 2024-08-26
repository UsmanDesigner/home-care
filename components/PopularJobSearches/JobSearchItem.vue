<template>
  <div class="text-[#2B6F70] text-[16px] font-[500]">
    {{ title }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const title = ref(props.title);
watch(
  () => props.title,
  (newItems) => {
    title.value = newItems;
  },
  { deep: true }
);
</script>

<style scoped></style>
