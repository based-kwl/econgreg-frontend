<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/Navbar.vue"
import Home from "./views/Home.vue"


export default {
  name: '',
  components: {
    Navbar,
    Home
  }
}
</script>