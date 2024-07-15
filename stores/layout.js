import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", () =>{ 
    const isNavigationCollapse = ref(false);
    const chatId = ref(null);
    const toggleNavigationCollapse = () => {
        isNavigationCollapse.value = !isNavigationCollapse.value;
    };
    const setChatId = (id) => {
        chatId.value = id;
    }
    return { isNavigationCollapse, toggleNavigationCollapse, chatId, setChatId}
});
