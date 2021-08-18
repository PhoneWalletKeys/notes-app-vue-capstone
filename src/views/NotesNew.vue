<template>
  <div class="notes-new">
    <form v-on:submit.prevent="createNote()">
      <h1>Create Note</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <p>
          Title
          <input type="text" v-model="newNoteParams.name" />
        </p>
        <p>
          Body
          <input type="text" v-model="newNoteParams.content" />
        </p>
      </div>
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      errors: [],
      status: "",
      newNoteParams: {},
    };
  },
  methods: {
    createNote: function () {
      console.log("Creating a note!");
      axios
        .post("/notes", this.newNoteParams)
        .then((response) => {
          this.$router.push("/notes");
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
