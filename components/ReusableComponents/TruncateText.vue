<template>
  <div
    class="tabs-desc !mb-[0px]"
    :class="
      isNoPaddingComponent && !isNoLineHeightComponent
        ? 'no-padding'
        : isNoPaddingComponent && isNoLineHeightComponent
        ? 'no-padding no-line-height'
        : null
    "
    :style="`padding:${padding}`"
  >
    <p
      class="mb-[0px]"
      :class="isNoPaddingComponent ? 'p-0' : 'pb-[10px] pt-[10px]'"
      :style="`color:#${color ?? '141414'}; font-size:${fsize};`"
    >
      <template v-if="typeof truncatedDescription(text) == 'string'">
        <p
          v-if="textDesc"
          v-html="
            replaceURLs(
              text?.length > limit ? truncatedDescription(text) : text,
              'blue-text'
            )
          "
        ></p>
        <p
          v-else="text"
          v-html="
            replaceURLs(
              text?.length > limit ? truncatedDescription(text) : text,
              'blue-text'
            )
          "
        ></p>
      </template>
      <template v-else-if="typeof truncatedDescription(text) == 'object'">
        <template
          v-for="(textDesc, index) in truncatedDescription(text)"
          :key="index"
        >
          <span v-if="textDesc" v-html="replaceURLs(textDesc, 'blue-text')">
          </span>
          <br v-if="index !== truncatedDescription(text)?.length - 1" />
        </template>
      </template>
      <span
        @click="toggleDescription"
        class="text text-[#3578F8] text-sm cursor-pointer mb-0"
        v-if="text?.length > (limit ?? 250)"
      >
        {{ showMoreText() }}
      </span>
    </p>
  </div>
</template>
<script setup>
import { replaceURLs } from "@/composables/useGlobalActions";
const props = defineProps({
  text: String,
  color: String,
  fsize: String,
  padding: String,
  limit: Number,
  id: {
    type: String,
    required: true,
  },
  isNoPaddingComponent: Boolean,
  readMoreText: String,
  isNoLineHeightComponent: {
    type: Boolean,
    default: false,
  },
});
const expandedStates = ref({});
const showMoreText = () => {
  const text =
    props.readMoreText === "read more" && showLess.value
      ? "read more"
      : props.readMoreText !== "read more" && showLess.value
      ? "see more"
      : props.readMoreText !== "read more" && !showLess.value
      ? "see less"
      : showLess.value
      ? "see more"
      : "read less";
  return text;
};
const showLess = computed(() => {
  return expandedStates.value[props.id] ?? true;
});
const toggleDescription = () => {
  expandedStates.value[props.id] = !showLess.value;
};
const truncatedDescription = (description) => {
  if (showLess.value) {
    if (description?.includes("\n") && description?.length <= props.limit) {
      return description?.split("\n");
    } else if (
      description?.includes("\n") &&
      description?.length >= props.limit
    ) {
      let strArr = description?.split("\n");
      let lenCount = 0;
      let newArr = [];
      strArr.forEach((item, index) => {
        lenCount += item.length;
        if (strArr[0].length > props.limit && index == 0) {
          newArr.push(strArr[0].slice(0, props.limit) + "...");
        }
        if (lenCount < props.limit) {
          newArr.push(item);
        }
      });
      if (newArr.length > 1) {
        newArr[newArr.length - 1] = newArr[newArr.length - 1] + "...";
      }
      return newArr;
    } else {
      return description?.slice(0, props.limit) + "...";
    }
  } else {
    return description?.split?.("\n");
  }
};
</script>
<style lang="scss" scoped>
.tabs-desc {
  padding: 0px 15px !important;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
    line-height: 20px;
  }
  &:is(.no-line-height) {
    p {
      line-height: normal !important;
    }
  }
  &:is(.no-padding) {
    padding: 0 !important;
    p {
      padding: 0 !important;
    }
  }
}
</style>
