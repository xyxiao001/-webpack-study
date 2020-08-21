<template>
  <div>
    <label>
      <span>name</span>
      <input v-model="name" />
    </label>
    <label>
      <span>surname</span>
      <input v-model="surname" />
    </label>

  </div>
</template>

<script>
  import { ref, watchEffect } from '@vue/composition-api'
  export default {
    setup() {
      const name = ref("Mary");
      const surname = ref("Poppins");
      watchEffect(() => {
        document.title = `${name.value} ${surname.value}`;
      });
      return {
        name,
        surname
      }
    }
  }
</script>
