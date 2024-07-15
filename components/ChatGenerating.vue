<template>
    <div class="gap-3 flex flex-col justify-center  p-4 border rounded-t-lg border-b-0 border-[#444440]">
        <Avatar class="w-8 h-8" />
        <div class="flex gap-2 pl-2">
            <span class="text-green-500 tracking-wider text-md" @click="$emit('cancel-streaming')">
                Chat is generating ...
            </span>
            <span class="cursor-pointer text-sm underline">Cancel</span>
        </div>
    </div>
</template>
