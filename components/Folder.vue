<template>
  <div>
    <div v-if="item.isEditing">
      <UInput color="gray" :ui="{ color: { gray: { outline: 'dark:focus:ring-white' } } }" placeholder="Type Name..."
        autofocus @blur="$emit('menu-handler', $event, item, 'focusOut')" v-model="value"
        @keydown.prevent.enter="$emit('menu-handler', $event, item, 'renameSave', value)" />
    </div>
    <div v-else>
      <UTooltip :text="item.label" :popper="{ placement: 'right' }" class="w-full" :openDelay="1000">
        <UButton :label="isNavigationCollapse ? '' : item.label" color="gray" block class="group  hover:bg-gray-900"
          :variant="item.active ? 'soft' : 'outline'" :class="{ 'justify-around': rightMenu }"
          @click="$emit('click', $event, item)">
          <template #leading>
            <UIcon :name="item.icon" class="w-6 h-6" square dynamic />
          </template>
          <template #trailing v-if="rightMenu">
            <UPopover mode="hover" v-if="!isNavigationCollapse">
              <UIcon name="i-mdi-dots-horizontal" class="w-6 h-6 invisible group-hover:visible" />
              <template #panel>
                <div class="p-2">
                  <div v-for="(option, key) in options" :key="key">
                    <UButton :label="option.title" :color="option.color" block class="mb-2 gap-4"
                      :class="isNavigationCollapse ? 'justify-center' : 'justify-around'" :icon="option.icon"
                      variant="ghost" @click="$emit('menu-handler', $event, item, option.action)" />
                  </div>
                </div>
              </template>
            </UPopover>
          </template>
        </UButton>
      </UTooltip>
    </div>
  </div>
</template>
<script setup>
import { useLayoutStore } from "~/stores/layout";
const layoutStore = useLayoutStore();
const { isNavigationCollapse } = storeToRefs(layoutStore);
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  rightMenu: {
    type: Boolean,
    default: false,
  }
});
const value = props.item.label;
const options = ref([
  {
    title: "Rename",
    icon: "i-mdi-square-edit-outline",
    color: "gray",
    action: 'rename'
  },
  {
    title: "Share",
    icon: "i-mdi-share-all",
    color: "gray",
    action: 'share',
  },
  {
    title: "Delete",
    icon: "i-mdi-delete",
    color: "red",
    action: 'delete'
  },
]);
</script>
