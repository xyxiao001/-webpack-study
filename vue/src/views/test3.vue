<template>
  <div>
    <p>
      <input type="text" v-model="debouncedText">
      <span>当前值为： {{ debouncedText }}</span>
    </p>
  </div>
</template>

<script>
  import { watchEffect }  from '@vue/composition-api'
  import { useDebouncedRef } from './utils'
  export default {
    setup() {
      const debouncedText =  useDebouncedRef('hello', 500)
      
      watchEffect(() => {
        console.log(
            `防抖测试 ${debouncedText.value}`
          )
      })

      return {
        debouncedText
      }
    }
  }
</script>
