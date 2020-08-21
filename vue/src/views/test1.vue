<template>
  <div>
    <p>
      count： {{ count }}
    </p>
    <button @click="increment">count++</button>
  </div>
</template>

<script>
  import { ref, watchEffect } from '@vue/composition-api'
  const  useDebugState = (label, initialValue) => {
      const state = ref(initialValue);
      watchEffect(() => {
        console.log(`${label}: `, state.value);
      });
    return state;
  }
  
  export default {
    setup() {
      const count = useDebugState('监听的 count', 0)
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
