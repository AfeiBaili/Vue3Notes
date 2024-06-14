import {defineStore} from "pinia";

export default defineStore("count", {
    state() {
        return {count: 0};
    },
    getters: {
        print() {
            return ""
        }
    }
})