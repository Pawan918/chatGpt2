<template>
    <div class="flex gap-1 items-center">
        <div class="cursor-pointer max-h-min" @click="copyHandler"
            :class="copied ? 'i-mdi-check' : 'i-mdi-content-copy'" />
        <div v-if="copied">copied</div>
    </div>
</template>
<script setup>
const props = defineProps(['item'])
const copied = ref(false);
const copyHandler = () => {
    {
        navigator.clipboard.writeText(props.item.innerText);
        copied.value = true;
        console.log('clicked', copied.value)
        setTimeout(() => {
            copied.value = false;
        }, 1500)
    }
}
</script>