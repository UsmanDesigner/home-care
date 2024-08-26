<template>
  <div class="star-rating">
    <span
      v-for="star in 5"
      :key="star"
      :class="['star', star <= rating ? 'filled' : 'empty']"
      >★</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.star {
  font-size: 1.5rem;
  color: #e4e6e9;
}

.star.filled {
  color: #f3a514;
}
</style>
