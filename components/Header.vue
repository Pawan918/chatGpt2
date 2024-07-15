<template>
  <div class="w-full text-white bg-[#343437] flex items-center justify-between p-4">
    <div>
      <UButton icon="i-mdi-hamburger-menu" color="gray" size="xl" class="p-[0.75rem]" :ui="{ rounded: 'rounded-full' }"
        @click="toggleNavigationCollapse" />
    </div>
  </div>
</template>

<script setup>
import { useLayoutStore } from "~/stores/layout";
const layoutStore = useLayoutStore();
const { toggleNavigationCollapse } = layoutStore;
</script>