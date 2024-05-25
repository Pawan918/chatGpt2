<template>
  <div
    contenteditable="plaintext-only"
    class="border border-white border-solid rounded-full px-4 py-3 text-sm overflow-y-scroll max-h-16 input-scrollbar relative empty:before:content-[attr(placeholder)]"
    @input="handleInput"
    ref="editableDiv"
    placeholder="Type Something here..."
    @keydown.enter="handleKeydown"
  />
</template>

<script setup>
const emit = defineEmits(["input", "handle-submit"]);
const content = ref("");

const handleInput = (event) => {
  content.value = event.target.innerText;
  emit("input", content);
};
const handleKeydown = (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    handleSubmit();
  }
};
const handleSubmit = () => {
  emit("handle-submit", content);
};
</script>
