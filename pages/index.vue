<template>
  <div class="h-full w-full bg-black text-[#f4f4f4] px-4">
    <div class="h-full max-w-4xl mx-auto bg-[#1d1d20] flex flex-col">
      <div class="p-6 overflow-scroll scrollbar overflow-x-hidden h-full flex flex-col">
        <div v-if="!messages.length" class="flex flex-col gap-2 justify-center items-center h-full">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24">
              <path fill="#a9a9a9"
                d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4.724l-4.762 2.857a1 1 0 0 1-1.508-.743L7 21v-2H6a4 4 0 0 1-3.995-3.8L2 15V7a4 4 0 0 1 4-4zm-2.8 9.286a1 1 0 0 0-1.414.014a2.5 2.5 0 0 1-3.572 0a1 1 0 0 0-1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0-.014-1.414M9.51 8H9.5a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2" />
            </svg>
          </div>
          <div class="mb-5 text-[#a9a9a9] text-2xl font-semibold flex justify-center items-center">
            Hello, What Can I Do For You?
          </div>
        </div>
        <div class="mt-auto" v-else>
          <Chat v-for="message in messages" :key="message.content" :message="message" />
        </div>
      </div>
      <div class="mx-6">
        <ChatGenerating @cancel-streaming="onCancelStreaming" v-if="loading" />
        <div class="bg-black p-4 border-t-0 flex gap-4 mb-4 border rounded-b-lg border-[#444440]">
          <SearchBar class="flex-1" @handle-submit="handleSubmit" @input="handleInput" />
          <UButton icon="i-mdi-send" color="gray" size="xl" class="p-[0.75rem]" :ui="{ rounded: 'rounded-full' }" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $api } = useNuxtApp()
const config = useRuntimeConfig();
const inputVal = ref("");
const messages = ref([]);
const data = ref('');
const loading = ref(false);
const error = ref(null);
const controller = new AbortController();
const signal = controller.signal;
const handleInput = (value) => {
  inputVal.value = value;
};
const handleSubmit = (content) => {
  messages.value.push({
    content,
    role: "user",
  })

  sendRequest(content);
};
const onCancelStreaming = () => {
  console.log('clicked')
  controller.abort();
}
const sendRequest = async (content) => {
  loading.value = true;
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.public.apiKey}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content,
          },
        ],
        model: "mixtral-8x7b-32768",
        stream: true,
      }),
      signal: signal
    });
    if (!response.body || !response.body.getReader) {
      throw new Error('ReadableStream not supported by this browser.');
    }
    messages.value.push({
      role: 'assistant',
      content: '',
    });
    let responseData = ''
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let done = false;
    let buffer = '';

    while (!done) {
      const { value, done: streamDone } = await reader.read();
      done = streamDone;

      if (value) {
        buffer += decoder.decode(value, { stream: !done });

        let boundary = buffer.indexOf('\n\n');
        while (boundary !== -1) {
          const chunk = buffer.slice(0, boundary).trim();
          buffer = buffer.slice(boundary + 2);

          if (chunk.startsWith('data: ')) {
            const jsonStr = chunk.slice(6);
            if (jsonStr === '[DONE]') {
              done = true;
              break;
            }
            try {
              const jsonData = JSON.parse(jsonStr);
              const content = jsonData.choices[0].delta.content;
              if (content) {
                responseData += content
                messages.value[messages.value.length - 1].content = responseData
              }
            } catch (error) {
              console.error('Failed to parse JSON:', error);
            }
          }

          boundary = buffer.indexOf('\n\n');
        }
      }
    }
    loading.value = false;
  } catch (error) {
    console.error('Fetch failed:', error);
  }
  return { data, loading, error };
}
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