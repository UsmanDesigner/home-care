<template>
  <nav class="breadcrumb flex items-center space-x-2 mt-[10px]">
    <template v-for="(crumb, index) in crumbs" :key="index">
      <span
        v-if="index !== crumbs.length - 1"
        @click="navigateTo(crumb.href)"
        class="text-[#2B6F70] cursor-pointer font-[500]"
      >
        {{ crumb.label }}
      </span>
      <span v-else class="text-black font-[500]">
        {{ crumb.label }}
      </span>
      <span v-if="index !== crumbs.length - 1" class="text-gray-500">></span>
    </template>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  crumbs: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["navigate"]);

const navigateTo = (href) => {
  emit("navigate", href);
};
</script>

<style scoped>
.breadcrumb {
  font-size: 1rem;
}
</style>
