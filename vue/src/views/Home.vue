<template>
  <div>
    test
    {{ count }} {{ obj.foo }}
    <button @click="increment">count++</button>
  </div>
</template>

<script>
  import { ref, reactive, onMounted } from '@vue/composition-api'
  export default {
    setup() {
      onMounted(() => {
        console.log('mounted!')
      })

      const count = ref(0)

      const obj = reactive({foo: 'bar'})

      function increment () {
        count.value++
      }

      return {
        count,
        obj,
        increment
      }
    }
  }
</script>
