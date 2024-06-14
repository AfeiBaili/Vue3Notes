<script setup>
import {ref} from "vue";
import PropsComponent from "@/components/PropsComponent.vue";
import ComponentEvent from "@/components/ComponentEvent.vue";
import PiniaDome from "@/components/PiniaDemo.vue"
import AComponent from "@/components/AComponent.vue";

import templateSyntax from "@/hooks/templateSyntax";
import changeNameDome from "@/hooks/changeNameDome";
import computeAttributes from "@/hooks/computeAttributes";
import monitorProperties from "@/hooks/monitorProperties";
import formEntry from "@/hooks/formEntry";
import componentEvent from "@/hooks/componentEvent";
import SlotDemo from "@/components/SlotDemo.vue";
import TransitionDemo from "@/components/TransitionDemo.vue";
import TransitionGroupDemo from "@/components/TransitionGroupDemo.vue";

const name1 = templateSyntax()
const obj1 = changeNameDome()
const obj2 = computeAttributes()
const obj3 = monitorProperties()
const obj4 = formEntry()

const value = ref("你好")

function getRefs($refs) {
  console.log($refs.ref1.count++)
}

// eslint-disable-next-line no-undef
defineExpose({value})

</script>

<template>
  <div>
    <h1>模板语法</h1>
    <div>{{ name1.name }}</div>

    <h1>更改响应式名字</h1>
    <h3>{{ obj1.personName.value }}</h3>
    <button @click="obj1.changePersonName('李四')">点我更改张三的名字</button>

    <h1>计算属性</h1>
    <h3>{{ obj2.personName.value }}</h3>
    <button @click="obj2.person.value+='-'">点我更改名字</button>
    <h3>{{ obj2.personName2.value }}</h3>
    <input v-model="obj2.person2.firstName" type="text">
    <br>
    <input v-model="obj2.person2.lastName" type="text">
    <br>
    <input v-model="obj2.personName2.value" type="text">
    <h1>监视属性</h1>
    <h3>{{ obj3.name.value }}</h3>
    <button @click="obj3.name.value = '李四'">点我更改名字</button>
    <h1>表单输入</h1>
    <h3>Value:{{ obj4.radioValue.value }}</h3>
    <input v-model="obj4.radioValue.value" type="radio" value="one">one
    <input v-model="obj4.radioValue.value" type="radio" value="tow">tow
    <h1>Props</h1>
    <PropsComponent :value="value"></PropsComponent>
    <h1>事件</h1>
    <ComponentEvent @print="componentEvent"></ComponentEvent>
    <h1>Pinia</h1>
    <PiniaDome></PiniaDome>
    <h1>Attrs&refs&parent</h1>
    <AComponent ref="ref1"></AComponent>
    <button @click="getRefs($refs)">点我获取$refs</button>
    <h1>插槽</h1>
    <SlotDemo>
      <template v-slot:slot2>
        <div>我是用具名传进去的DIV2</div>
      </template>

      <template v-slot="props">
        {{ props.text }}
      </template>
    </SlotDemo>
    <h1>动画</h1>
    <h2>Transition</h2>
    <TransitionDemo></TransitionDemo>
    <h2>TransitionGroup</h2>
    <TransitionGroupDemo></TransitionGroupDemo>
  </div>
</template>

<style>
body {
  background-color: #2b2b2b;
  color: whitesmoke;
}
</style>
