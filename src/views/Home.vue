<template>
  <body class="bg-gdark bg-clip-content w-full h-screen">
    <section class="text-gray-400 body-font" ref="vantaRef">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-gray-200">SOME CATCHY HERO TITLE HERE IDK</h1>
          <p class="mb-8 leading-relaxed">Something to explain the purpose of the site</p>
          <div class="flex w-full md:justify-start justify-center items-end">
            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label for="hero-field" class="leading-7 text-sm text-gray-400">Ready to explore the skies?</label>
              <input type="text" id="hero-field" placeholder="Twitch name" name="hero-field" class="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-green-900 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Explore</button>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>

import * as p5 from 'p5'
import TOPOLOGY from 'vanta/src/vanta.topology'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
export default {
  mounted() {
    this.vantaEffect = TOPOLOGY({
      el: this.$refs.vantaRef,
      p5: p5,
      color: 0x666650,
      backgroundColor: 0x0     
    })
    window.addEventListener('resize', () => {this.vantaEffect.resize()});
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>
