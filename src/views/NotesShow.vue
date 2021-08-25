<template>
  <div class="notes-show">
    <div class="container">
      <ul>
        <li v-if="$parent.getUserId() == note.user_id">
          <router-link v-bind:to="`/notes/${note.id}/edit`">
            <h2>{{ note.name }}</h2>
            <p>{{ note.content }}</p>
            <!-- <input type="submit" value="edit" /> -->
          </router-link>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <router-link to="/notes"><input type="submit" value="Back to all notes" /></router-link>
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
