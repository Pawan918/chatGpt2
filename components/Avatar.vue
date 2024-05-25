<template>
  <div class="rounded-full overflow-hidden">
    <img :src="src" alt="user profile" />
  </div>
</template>
<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "images/user-default.jpg",
  },
});
</script>
