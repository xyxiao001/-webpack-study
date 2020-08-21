<template>
  <form @submit="handleSubmit">
    <label>
      <span>Note:</span>
      <input v-model="currentNote" @input="handleNoteInput" placeholder="只能输单个字母哦">
    </label>
    <button type="submit">Send</button>
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  props: ["divRef"],
  setup(props, context) {
    const currentNote = ref("");
    const handleNoteInput = e => {
      const val = e.target.value && e.target.value.toUpperCase()[0];
      const validNotes = ["A", "B", "C", "D", "E", "F", "G"];
      currentNote.value = validNotes.includes(val) ? val : "";
    };
    const handleSubmit = e => {
      context.emit("note-sent", currentNote.value);
      currentNote.value = "";
      e.preventDefault();
    };

    return {
      currentNote,
      handleNoteInput,
      handleSubmit,
    };
  }
};
</script>