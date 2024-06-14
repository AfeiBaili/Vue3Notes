import {computed, reactive, ref} from "vue";

export default function () {
    const person = ref("张三");

    const personName = computed(() => {
        return person.value + "~~"
    })

    const person2 = reactive({
        firstName: "John", lastName: "Doe",
    })
    const personName2 = computed({
        get() {
            return person2.firstName + " " + person2.lastName
        }, set(value) {
            [person2.firstName, person2.lastName] = value.split(" ")
        }
    })
    return {person, personName, person2, personName2};
}