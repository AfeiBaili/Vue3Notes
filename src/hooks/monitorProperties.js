import {ref, watch} from "vue";

export default function () {
    const name = ref("张三")
    watch(name, () => {
        console.log("监视属性", "name被更改了")
    })
    return {name}
}