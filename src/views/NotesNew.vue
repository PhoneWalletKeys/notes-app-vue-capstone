<template>
  <div class="notes-new">
    <!-- <form v-on:submit.prevent="createNote()">
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
    </form> -->
    <form v-on:submit.prevent="createNote()">
      <h1>Create a Note!</h1>
      <ul>
        <li>
          <a href="#">
            <h2>Title</h2>
            <input type="text" v-model="newNoteParams.name" />
            <p>Content</p>
            <input type="text" v-model="newNoteParams.content" />
            <input type="submit" value="submit" />
          </a>
        </li>
        <li>
          <a href="#">
            <h2>Title</h2>
            <input type="text" />
            <p>Content</p>
            <input type="text" />
            <input type="submit" value="submit" />
          </a>
        </li>
        <li>
          <a href="#">
            <h2>Title</h2>
            <input type="text" />
            <p>Content</p>
            <input type="text" />
            <input type="submit" value="submit" />
          </a>
        </li>
        <!-- <li>
          <a href="#">
            <h2>Title</h2>
            <input type="text" v-model="newNoteParams.name" />
            <p>Content</p>
            <input type="text" v-model="newNoteParams.content" />
            <input type="submit" value="submit" />
          </a>
        </li>
        <li>
          <a href="#">
            <h2>Title</h2>
            <input type="text" v-model="newNoteParams.name" />
            <p>Content</p>
            <input type="text" v-model="newNoteParams.content" />
            <input type="submit" value="submit" />
          </a>
        </li>
        <li>
          <a href="#">
            <h2>Title</h2>
            <input type="text" v-model="newNoteParams.name" />
            <p>Content</p>
            <input type="text" v-model="newNoteParams.content" />
            <input type="submit" value="submit" />
          </a>
        </li> -->
      </ul>
    </form>
  </div>
</template>

<style>
form {
  display: inline-block;
}
/* ul {
  justify-content: center;
  display: flex;
}
li {
  justify-content: center;
  display: flex;
} */
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: arial, helvetica, sans-serif;
  font-size: 100%;
  margin: 0em;
  background: #666;
  color: black;
}
h2,
p {
  font-size: 100%;
  font-weight: normal;
  color: black;
}
ul,
li {
  list-style: none;
}
ul {
  overflow: hidden;
  padding: 3em;
}
ul li a {
  text-decoration: none;
  color: #000;
  background: #f6ff7a;
  display: block;
  height: 15em;
  width: 15em;
  padding: 1em;
  -moz-box-shadow: 5px 5px 7px rgba(33, 33, 33, 1);
  /* Safari+Chrome */
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  /* Opera */
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  -moz-transition: -moz-transform 0.15s linear;
  -o-transition: -o-transform 0.15s linear;
  -webkit-transition: -webkit-transform 0.15s linear;
}
ul li {
  margin: 1em;
  float: left;
}
ul li h2 {
  font-size: 140%;
  font-weight: bold;
  padding-bottom: 10px;
}
ul li p {
  font-family: "Lucida Console", arial, monospace;
  font-size: 180%;
}
ul li:nth-child(even) a {
  -o-transform: rotate(4deg);
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  position: relative;
  top: 5px;
}
ul li:nth-child(3n) a {
  -o-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  position: relative;
  top: -5px;
  background: #f6ff7a;
}
ul li:nth-child(5n) a {
  -o-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  position: relative;
  top: -10px;
  background: #f6ff7a;
}
ul li a:hover,
ul li a:focus {
  -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  -o-transform: scale(1.25);
  position: relative;
  z-index: 5;
}
</style>

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
