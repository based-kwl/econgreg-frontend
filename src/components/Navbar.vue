<template>
    <nav class="flex items-center justify-between flex-wrap p-3 bg-gdark">
        <div class="flex items-center flex-no-shrink text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Econgreg</span>
        </div>
        <div>
            <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-gray-400 mt-4 sm:mt-0">Login</a>
        </div>
    </nav>
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
