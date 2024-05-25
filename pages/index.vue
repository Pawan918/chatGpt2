<template>
  <div class="h-full w-full bg-black text-[#f4f4f4]">
    <div class="h-full max-w-4xl mx-auto bg-[#1d1d20] flex flex-col">
      <div
        class="p-6 overflow-scroll scrollbar overflow-x-hidden h-full flex flex-col"
      >
        <div class="mt-auto">
          <Chat
            v-for="message in messages"
            :key="message.content"
            :message="message"
          />
        </div>
      </div>
      <div class="mx-6 py-6 min-h-24 bg-black p-4 rounded-b-lg flex gap-4 mb-4">
        <SearchBar
          class="flex-1"
          @handle-submit="handleSubmit"
          @input="handleInput"
        />
        <UButton
          icon="i-mdi-send"
          color="gray"
          size="xl"
          class="p-[0.75rem]"
          :ui="{ rounded: 'rounded-full' }"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const inputVal = ref("");
const messages = ref([
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]);
const handleInput = (value) => {
  inputVal.value = value;
};
const handleSubmit = (value) => {
  messages.value.push({
    content: value,
  });
};
</script>
<style>
.scrollbar {
  scrollbar-color: #444449 transparent;
  scrollbar-width: thin;
}

.input-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
