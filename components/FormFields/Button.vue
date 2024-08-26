<template>
  <div class="relative">
    <button
      :style="{ backgroundColor: backgroundColor }"
      :class="['custom-button', classProps]"
      :disabled="disabled || loading"
      @click="$emit('click')"
    >
      <span v-if="prefix" class="icon-wrapper">
        <img :src="prefix" class="icon" />
      </span>
      {{ title }}
      <span v-if="postfix" class="icon-wrapper">
        <img :src="postfix" class="icon" />
      </span>

      <div v-if="loading" class="loading-overlay">
        <ReusableComponentsLoader classProps="h-5 w-5" />
      </div>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  prefix: {
    type: [Object, String],
    default: null,
  },
  postfix: {
    type: [Object, String],
    default: null,
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  classProps: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
}

.custom-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.icon-wrapper {
  margin: 0 0.5rem;
}

.icon {
  font-size: 1.25rem;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
  border-radius: 0.375rem;
}
</style>
