<template>
  <div class="py-3 border-b border-[#444440] flex flex-col gap-2 text-sm">
    <div class="flex flex-row gap-2 items-center bg">
      <Avatar class="w-8 h-8" />
      <span>assistant</span>
    </div>
    <div v-html="markdownContent" />
  </div>
</template>
<script setup>
import { h, render } from 'vue'
import CopyButton from './CopyButton.vue';
import Button from './Button.vue';
const { $md } = useNuxtApp();
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const markdownContent = computed(() => $md.render(props.message.content));
watchEffect(() => {
  if (markdownContent.value) {
    setTimeout(() => {
      if (process.client) {
        const el = document.getElementsByClassName('shiki')
        Array.from(el).forEach(function (item) {
          if (item) {
            setTimeout(() => {

              if (!item.parentNode.classList.contains('parent-shiki')) {
                const parentNode = item.parentNode;
                const el = document.createElement('div');
                el.classList.add('parent-shiki', 'relative');
                parentNode.insertBefore(el, item);
                const lang = item.firstChild.classList[0].split('-')[1];
                const comp = h('div', {
                  class: 'flex item-center px-4 py-2 text-xs justify-between rounded-t-md h-12 bg-black mt-2'
                }, [lang !== '' ? h(Button, {
                  title: lang,
                  color: 'bg-purple-500'
                }) : h('div'), h(CopyButton, {
                  item
                })])
                render(comp, el);
                el.appendChild(item)
              }
            })
          }
        })
      }
    })
  }
})
</script>
<style scoped>
:deep(pre) {
  padding: 1rem;
  margin-bottom: 0.5rem;
  /* border-radius: 0.5rem; */
}

pre {
  padding: 10px;
}
</style>