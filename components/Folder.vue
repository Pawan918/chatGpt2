<template>
  <div>
    <UButton
      :label="isNavigationCollapse ? '' : title"
      color="gray"
      block
      class="justify-around group hover:bg-gray-900"
      variant="outline"
    >
      <template #leading>
        <UIcon name="i-mdi-chat-add" class="w-6 h-6" square />
      </template>
      <template #trailing>
        <UPopover mode="hover" v-if="!isNavigationCollapse">
          <UIcon
            name="i-mdi-dots-horizontal"
            class="w-6 h-6 invisible group-hover:visible"
            @click="handleOptionMenu"
          />
          <template #panel>
            <div class="p-2">
              <div v-for="(option, key) in options" :key="key">
                <UButton
                  :label="option.title"
                  :color="option.color"
                  block
                  class="mb-2 justify-around gap-4"
                  :icon="option.icon"
                  variant="ghost"
                />
              </div>
            </div>
          </template>
        </UPopover>
      </template>
    </UButton>
  </div>
</template>
<script setup>
import { useLayoutStore } from "~/stores/layout";
const layoutStore = useLayoutStore();
const { isNavigationCollapse } = storeToRefs(layoutStore);
const props = defineProps({
  title: {
    type: String,
    default: "New Chat",
  },
});
const handleOptionMenu = () => {};
const options = ref([
  {
    title: "Rename",
    icon: "i-mdi-square-edit-outline",
    color: "gray",
  },
  {
    title: "Share",
    icon: "i-mdi-share-all",
    color: "gray",
  },
  {
    title: "Delete",
    icon: "i-mdi-delete",
    color: "red",
  },
]);
</script>
