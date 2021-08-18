import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import NotesIndex from "../views/NotesIndex.vue";
import NotesNew from "../views/NotesNew.vue";
import NotesShow from "../views/NotesShow.vue";
import NotesEdit from "../views/NotesEdit.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/notes", name: "notes-index", component: NotesIndex },
  { path: "/notes/new", name: "notes-new", component: NotesNew },
  { path: "/notes/:id", name: "notes-show", component: NotesShow },
  { path: "/notes/:id/edit", name: "notes-edit", component: NotesEdit },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
