<template>
  <div
    :style="{
      width,
      borderRadius,
      backgroundColor,
      boxShadow,
      border,
    }"
    :class="classProps"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "auto",
  },
  borderRadius: {
    type: String,
    default: "0",
  },
  backgroundColor: {
    type: String,
    default: "transparent",
  },
  boxShadow: {
    type: String,
    default: "none",
  },
  border: {
    type: String,
    default: "none",
  },
  classProps: {
    type: String,
    default: "none",
  },
});
</script>

<style scoped></style>
