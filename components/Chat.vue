<template>
  <div class="py-3 border-b border-[#444440] flex flex-col gap-2 text-sm">
    <div class="flex flex-row gap-2 items-center">
      <Avatar class="w-8 h-8" />
      <span>Bizbot</span>
    </div>
    {{ message.content }}
  </div>
</template>
<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>
