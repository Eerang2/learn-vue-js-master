<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoFooter></TodoFooter>
    <TodoList></TodoList>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

// var my_cmp = {
//   template: '<div>my component</div>'
// }

// new Vue({
//   el: '',
//   components: {
//     'my_cmp': my_cmp
//   }
// })

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoFooter' : TodoFooter,
    'TodoList' : TodoList
  }

}
</script>

<style>

</style>