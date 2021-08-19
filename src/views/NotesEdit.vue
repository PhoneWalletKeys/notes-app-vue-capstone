<template>
  <div class="notes-edit">
    <form v-on:submit.prevent="updateNote()">
      <h1>Edit Note</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="currentNoteParams.name" />
      </div>
      <div>
        <label>Content:</label>
        <input type="text" v-model="currentNoteParams.content" />
      </div>
      <input type="submit" value="Submit" />
      <button v-on:click="destroyNote()">Delete</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentNoteParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/notes/${this.$route.params.id}`).then((response) => {
      console.log("Note info:", response.data);
      this.currentNoteParams = response.data;
    });
  },
  methods: {
    updateNote: function () {
      axios.patch(`/notes/${this.$route.params.id}`, this.currentNoteParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/notes/${response.data.id}`);
      });
    },
    destroyNote: function () {
      axios.delete(`/notes/${this.$route.params.id}`).then((response) => {
        console.log("This note is gone forever..", response.data);
        this.$router.push("/notes");
      });
    },
  },
};
</script>
