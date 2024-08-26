<template>
  <div :class="['relative', classProps]">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
      :id="id"
      v-bind="$attrs"
      v-model="localQuery"
      @input="onInput"
      @keydown.enter="handleEnter"
      :placeholder="placeholder"
      class="input-field"
    />
    <div
      v-if="loading"
      class="absolute right-3 top-1/2 transform -translate-y-1/2"
    >
      <ReusableComponentsLoader classProps="h-5 w-5" />
    </div>
    <ul
      v-if="filteredSuggestions?.length && showSuggestions"
      class="absolute w-full bg-white border border-gray-300 rounded mt-1 z-10"
    >
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        @click="selectSuggestion(suggestion)"
        class="p-2 hover:bg-gray-200 cursor-pointer"
      >
        {{ formatSuggestion(suggestion) }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  suggestions: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Start typing...",
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  classProps: {
    type: [String, Array, Object],
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "enter"]);

const localQuery = ref(props.modelValue);
const showSuggestions = ref(false);

const filteredSuggestions = computed(() =>
  props.suggestions.filter(
    (suggestion) =>
      suggestion.street ||
      suggestion.city ||
      suggestion.region ||
      suggestion.country
  )
);

const onInput = (event) => {
  showSuggestions.value = true;
  emit("update:modelValue", event.target.value);
};

const selectSuggestion = (selectedSuggestion) => {
  localQuery.value = formatSuggestion(selectedSuggestion);
  showSuggestions.value = false;
  emit("update:modelValue", localQuery.value);
};

const handleEnter = () => {
  if (localQuery.value.trim() !== "") {
    emit("enter");
  }
};

const formatSuggestion = (suggestion) => {
  const { street, city, region, country } = suggestion;
  return `${street ? `${street}, ` : ""}${city ? `${city}, ` : ""}${
    region ? `${region}, ` : ""
  }${country ? country : ""}`;
};

watch(localQuery, (newQuery) => {
  if (newQuery.trim() === "") {
    showSuggestions.value = false;
  }
});
</script>

<style scoped>
.input-label {
  position: absolute;
  top: 0;
  left: 1.3rem;
  background: white;
  padding: 0 0.3rem;
  font-weight: 500;
  color: #333;
  transition: 0.2s;
  transform: translateY(-55%);
}

.input-field {
  width: 100%;
  padding: 0.563rem 1rem;
  border: 1px solid #111111;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
}

.input-field:focus {
  border-color: #2b6f70;
}

.input-field:focus + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
  top: -0.5rem;
  left: 3rem;
  font-size: 14px;
  color: #007bff;
  background: white;
  font-weight: 500;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  cursor: pointer;
}
</style>
