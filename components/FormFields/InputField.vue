<template>
  <div :class="['labelled-input-container', classProps]">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
      :id="id"
      v-bind="$attrs"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  classProps: {
    type: [String],
    default: "",
  },
});
</script>

<style scoped>
.labelled-input-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

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
</style>
