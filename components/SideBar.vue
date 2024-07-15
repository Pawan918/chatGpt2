<template>
  <div class="h-full w-full flex-col overflow-y-scroll overflow-hidden scrollbar bg-[#1d1d20]"
    :class="isNavigationCollapse ? 'px-2 py-4' : 'p-4'">
    <div class="flex gap-4 flex-col">
      <div v-for="(item, index) in navData.navItems" :key="index">
        <Folder :item="item" @click="handleFolderClick" />
      </div>
      <div class="h-[1px] w-full border-b border-[#444440]" />
      <div v-if="navData.navItems.length" class="flex gap-4 flex-col">
        <div v-for="(item, key) in navData.navItemsSub" :key="key">
          <Folder :item="item" :rightMenu='true' @menu-handler="handleOptionClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import getNavItem from "~/utils/nav_item.js";
import { uniqueId } from "~/utils/function"
import { useLayoutStore } from "~/stores/layout";
const layoutStore = useLayoutStore();
const { isNavigationCollapse } = storeToRefs(layoutStore);
const navData = ref(getNavItem());
const addNavSubItem = (id, label) => {
  navData.value.navItemsSub.push({
    id,
    label,
    icon: 'i-mdi-chat-processing',
    isEditing: false,
    action: 'show'
  });
};
const renameNavItem = (id) =>
  navData.value.navItemsSub.forEach((item) => item.id == id ? item.isEditing = true : item.isEditing = false
  );
const deleteNavSubItem = (id, label) => {
  console.log(id, label);
};
const renameSaveNaItem = (item, label) => {
  navData.value.navItemsSub.forEach((ele) => {
    if (ele.id == item.id) {
      ele.label = label;
      ele.isEditing = false
    }
  })
}
const handleFolderClick = (e, item) => {
  if (item && item.action === 'add') {
    const id = uniqueId();
    addNavSubItem(id, 'New Chat')
  }
}
const handleNavInputFocusOut = () => navData.value.navItemsSub.forEach((item) => item.isEditing = false)
const handleOptionClick = (e, item, action, value) => {
  switch (action) {
    case 'rename':
      renameNavItem(item.id)
      break;
    case 'delete':
      deleteNavSubItem()
      break;
    case 'focusOut':
      handleNavInputFocusOut()
      break;
    case 'renameSave':
      renameSaveNaItem(item, value)
      break;
  }
}
</script>
<style scoped lang="scss">
.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>