import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", () =>{ 
    const isNavigationCollapse = ref(false);
    const toggleNavigationCollapse = ()=> {
        console.log('hello')
        isNavigationCollapse.value = !isNavigationCollapse.value;
    };

    return { isNavigationCollapse, toggleNavigationCollapse}
});
