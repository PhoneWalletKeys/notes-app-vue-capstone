<template>
  <div class="notes-index">
    <!-- <div class="container"> -->
    <div v-for="note in notes" :key="note.id">
      <ul>
        <li v-if="$parent.getUserId() == note.user_id">
          <router-link v-bind:to="`/notes/${note.id}/edit`">
            <h2>{{ note.name }}</h2>
            <p2>{{ note.content }}</p2>
          </router-link>
        </li>
      </ul>
      <!-- <router-link to="notes/new"><input type="submit" value="Create More Notes!" /></router-link> -->
    </div>
    <router-link to="notes/new"><input type="submit" value="Create More Notes!" /></router-link>
  </div>
  <!-- </div> -->
</template>

<style>
/* .card {
  width: 50%;
}
.selected {
  color: white;
  background-color: red;
  transition: background-color 1s ease;
} */
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
