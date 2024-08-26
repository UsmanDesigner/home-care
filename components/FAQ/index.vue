<template>
  <div>
    <h2 class="text-[24px] mb-[40px]">Frequently asked questions</h2>
    <div class="flex flex-col gap-[10px]">
      <FAQItem
        v-for="(faq, index) in items"
        :key="index"
        :question="faq.question"
        :answer="faq.answer"
      />
    </div>
  </div>
</template>

<script setup>
import FAQItem from "./FAQItem.vue";
import { ref } from "vue";
const props = defineProps({
  items: {
    type: Array,
    default: () => [], // Default to an empty array if no items are provided
  },
});

const items = ref(props.items);
watch(
  () => props.items,
  (newItems) => {
    items.value = newItems;
  },
  { deep: true }
);
</script>

<style scoped></style>
