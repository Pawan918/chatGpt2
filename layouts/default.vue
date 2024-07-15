<template>
  <div class="w-full h-screen flex flex-col relative">
    <Header class="w-full h-24" />
    <div class="flex w-full h-[calc(100%-6rem)]">
      <div class="z-10 h-full absolute md:relative lg:w-52 flex shrink md:shrink-0 bg-black">
        <SideBar class="h-full" :class="isNavigationCollapse ? 'hidden w-0 md:w-24 md:flex' : 'w-52'" />
      </div>
      <div class="w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useLayoutStore } from "~/stores/layout";
const layoutStore = useLayoutStore();
const { isNavigationCollapse } = storeToRefs(layoutStore);
</script>