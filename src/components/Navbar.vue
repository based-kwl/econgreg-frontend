<template>
  <header class="text-gray-400 bg-gdark body-font">
    <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <router-link to="/" ><img src="http://assets.greg.192.168.1.126.nip.io:8086/images/bw-helix.png" class="object-contain h-10 w-10 "></router-link>
        <router-link to="/" class="text-xl">Econgreg</router-link>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-white">Sharted Link</a>
      </nav>
      <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    toggle() {
    	this.open = !this.open
    }
  }
};
</script>
