import {ref} from "vue";

export default function () {
    const personName = ref("张三")

    function changePersonName(value) {
        personName.value = value
    }

    return {personName, changePersonName}
}