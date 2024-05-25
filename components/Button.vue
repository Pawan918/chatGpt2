<template>
  <button
    class="custom-button flex items-center justify-center text-white focus:outline-none"
    @click="handleClick"
    :class="[pill ? 'rounded-full p-[14px]' : 'rounded-md px-4 py-2', color]"
  >
    <!-- <span
      v-if="leftIcon"
      :class="[leftIcon, pill && !title ? '' : 'mr-2', 'w-5 h-5 ']"
    />
    <span v-if="title">{{ title }}</span>
    <span
      v-if="rightIcon"
      :class="[rightIcon, pill && !title ? '' : 'ml-2', 'w-5 h-5']"
    /> -->
  </button>
</template>
<script setup>
// import { ref, defineProps } from 'vue';
const props = defineProps({
  leftIcon: String,
  rightIcon: String,
  title: String,
  color: {
    type: String,
    default: "bg-blue-500",
  },
  pill: {
    type: Boolean,
    default: false,
  },
});
const handleClick = () => {
  emit("click");
};
</script>
