import { getCurrentInstance } from "vue";
import { ProgressConfig } from "../index.vue";

export const useProgress = () => {
    const props = getCurrentInstance()?.props as unknown as ProgressConfig

}