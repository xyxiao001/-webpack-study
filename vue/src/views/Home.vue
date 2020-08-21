<template>
  <div>
    <p>
      count： {{ count }}
    </p>
    <el-button @click="increment">count++</el-button>
  </div>
</template>

<script>
  import { ref } from '@vue/composition-api'
  export default {
    setup() {
      const count = ref(0)

      const increment = () => {
        count.value++
      }

      return {
        count,
        increment
      }
    }
  }
</script>
