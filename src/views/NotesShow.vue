<template>
  <div class="notes-show">
    <div class="container">
      <h2>{{ note.name }}</h2>
      <p>{{ note.content }}</p>
      <li v-if="$parent.getUserId() == note.user_id">
        <router-link v-bind:to="`/notes/${note.id}/edit`"><button>Edit Note</button></router-link>
      </li>

      <router-link to="/notes">Back to all notes</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      note: {},
    };
  },
  created: function () {
    axios.get("/notes/" + this.$route.params.id).then((response) => {
      this.note = response.data;
      console.log(response.data);
    });
  },
};
</script>
