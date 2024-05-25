<template>
  <div class="h-full bg-[#1d1d20] p-4">
    <Folder />
  </div>
</template>

<script setup>
import getNavItem from "~/utils/nav_item.js";
const navData = ref(getNavItem());
const addNavItems = (id, label) => {
  navData.value.navItems.push({
    id,
    label,
    isEditing: false,
  });
};
const addNavSubItems = (id, label) => {
  navData.value.navItemsSub.push({
    id,
    label,
    isEditing: false,
  });
};
</script>