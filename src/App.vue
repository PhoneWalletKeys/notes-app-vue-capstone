<template>
  <div id="app">
    <div class="sidebar" data-color="black">
      <div class="logo">
        <!-- <a href="https://www.creative-tim.com" class="simple-text logo-mini"> -->
        <!-- <div class="logo-image-small">
          <img src="./assets/img/logo-small.png">
        </div> -->
        <!-- <p>CT</p> -->
        <!-- </a> -->
        <a href="/" class="simple-text logo-normal">
          <h3>Nota</h3>
          <!-- <div class="logo-image-big">
          <img src="../assets/img/logo-big.png">
        </div> -->
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li>
            <a href="/">
              <!-- <i class="nc-icon nc-bank"></i> -->
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="/notes/new">
              <!-- <i class="nc-icon nc-diamond"></i> -->
              <p>Notes</p>
            </a>
          </li>
          <li>
            <a href="/login">
              <!-- <i class="nc-icon nc-pin-3"></i> -->
              <p>Login</p>
            </a>
          </li>
          <li>
            <a href="/logout">
              <!-- <i class="nc-icon nc-pin-3"></i> -->
              <p>Logout</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel" style="height: 100vh">
      <!-- <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <div class="navbar-toggle">
            <button type="button" class="navbar-toggler">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a class="navbar-brand" href="javascript:;">Title</a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <form>
            <div class="input-group no-border">
              <input type="text" value="" class="form-control" placeholder="Search...">
              <div class="input-group-append">
                <div class="input-group-text">
                  <i class="nc-icon nc-zoom-split"></i>
                </div>
              </div>
            </div>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item btn-rotate dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="nc-icon nc-bell-55"></i>
                <p>
                  <span class="d-lg-none d-md-block">Some Actions</span>
                </p>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
      <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/notes">Notes</router-link>
      |
      <router-link to="/notes/new">Create</router-link>
    </div> -->
      <router-view />
      <!-- <div class="content"> -->
      <!-- <div class="row">
          <div class="col-md-12">
            <h3 class="description">This is the content</h3> -->
      <!-- </div> -->
      <!-- </div> -->
      <!-- </div> -->
      <!-- <footer class="footer" style="position: absolute; bottom: 0; width: -webkit-fill-available">
        <div class="container-fluid">
          <div class="row">
            <nav class="footer-nav">
              <ul>
                <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                <li><a href="https://www.creative-tim.com/blog" target="_blank">Blog</a></li>
                <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
              </ul>
            </nav>
            <div class="credits ml-auto">
              <span class="copyright">
                © 2020, made with
                <i class="fa fa-heart heart"></i>
                by Creative Tim
              </span>
            </div>
          </div>
        </div>
      </footer> -->
    </div>
  </div>
</template>

<style>
.content {
  background-color: clearColor;
  background-image: url("./assets/notebackground2.jpg");
}
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
