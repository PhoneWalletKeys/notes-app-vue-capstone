<template>
  <div>
    <div v-for="note in notes" :key="note.id">
      <router-link v-bind:to="`/notes/${note.id}`">
        <h2>Title: {{ note.name }}</h2>
        <p>Content: {{ note.content }}</p>
      </router-link>
    </div>
  </div>
</template>

<style>
.card {
  width: 50%;
}
.selected {
  color: white;
  background-color: red;
  transition: background-color 1s ease;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Here are notes!",
      notes: [],
      currentNote: {},
    };
  },
  created: function () {
    this.indexNotes();
  },
  methods: {
    indexNotes: function () {
      axios.get("http://localhost:3000/notes").then((response) => {
        this.notes = response.data;
        console.log("All notes:", this.notes);
      });
    },
  },
};
</script>
