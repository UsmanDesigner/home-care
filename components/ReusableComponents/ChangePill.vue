<template>
  <div
    :class="['pill', changeDirection]"
    :style="{ backgroundColor: changeColor }"
  >
    <p class="text-[12px] md:text-[16px]">{{ changeSymbol }} {{ change }}%</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  change: {
    type: Number,
    required: true,
  },
  changeIcon: {
    type: String,
    required: true,
  },
});

const changeDirection = computed(() =>
  props.changeIcon === "increase" ? "increase" : "decrease"
);
const changeColor = computed(() =>
  props.changeIcon === "increase" ? "#2B6F70" : "#FF5A5F"
);
const changeSymbol = computed(() =>
  props.changeIcon === "increase" ? "↑" : "↓"
);
</script>

<style scoped>
.pill {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  display: inline-block;
  text-align: center;
  min-width: 65px;
}

.increase {
  background-color: #2b6f70;
}

.decrease {
  background-color: #ff5a5f;
}
</style>
