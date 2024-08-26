<template>
  <div>
    <h2 class="text-[24px] font-[400] text-black mb-6">{{ title }}</h2>
    <ul class="space-y-3">
      <li v-for="item in items" :key="item.text">
        <a
          :href="item.href"
          class="text-[#2B6F70] font-medium text-[16px] hover:underline"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
