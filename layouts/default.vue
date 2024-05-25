<template>
  <div class="w-full h-screen grid grid-cols-12 grid-rows-12">
    <Header class="col-span-full row-span-1" />
    <SideBar
      class="row-span-11"
      :class="isNavigationCollapse ? 'col-span-1' : 'col-span-2'"
    />
    <div
      class="row-span-11"
      :class="isNavigationCollapse ? 'col-span-11' : 'col-span-10'"
    >
      <slot />
    </div>
  </div>
</template>
<script setup>
import { useLayoutStore } from "~/stores/layout";
const layoutStore = useLayoutStore();
const { isNavigationCollapse } = storeToRefs(layoutStore);
</script>