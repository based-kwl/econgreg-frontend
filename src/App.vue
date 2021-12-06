<template>
  <div id="app" class="bg-gblack">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/Navbar.vue"


export default {
  name: '',
  components: {
    Navbar
  }
}
</script>