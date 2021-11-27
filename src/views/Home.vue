<template>
  <body class="bg-gdark bg-clip-content w-full h-screen">
    <section class="text-gray-400 body-font h-1/2" ref="vantaRef">
      <div class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <img src="http://assets.greg.192.168.1.126.nip.io:8086/images/bw-helix-eg.png" class="object-contain h-1/5 w-1/5">
          <p class="mb-8 text-xl leading-relaxed text-gmilk">Control a telescope without buying one.</p>
          <div class="flex w-full md:justify-start justify-center items-end">
            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label for="hero-field" class="leading-7 text-sm text-gmilk">Ready to explore the skies?</label>
              <input type="text" id="hero-field" placeholder="Twitch name. E.g. Optoscope" name="hero-field" class="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-green-900 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Explore</span>
              </button>
            </div>
        </div>
      </div>
    </section>
    <div class="w-full h-1/5 bg-gdark flex justify-center items-center mt-10">
      <p class="text-9xl font-bold font-largeText text-gmilk">GALLERY</p>
    </div>
    <div class="w-full h-4/5 bg-gdark flex justify-center items-center -mt-24">
      <div class="bg-gdark w-4/5">
        <vue-carousel class="h-full border-2 border-gmilk" :data="data" indicators="hover"></vue-carousel>
      </div>
    </div>
    
    
    
  </body>
</template>

<script>

import * as p5 from 'p5'
import TOPOLOGY from 'vanta/src/vanta.topology'
import VueCarousel from '@chenfengyuan/vue-carousel';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
export default {
  name:"Home",
  components: {
    VueCarousel
  },
  data() {
    return {
      data: [
        '<div class="" style="height: 40rem;"> <img src="http://assets.greg.192.168.1.126.nip.io:8086/images/greg-andromeda1.png" class="h-full object-cover w-full"/> </div>',
        '<div class="" style="height: 40rem;"> <img src="http://assets.greg.192.168.1.126.nip.io:8086/images/greg-orion1.png" alt="..." class="h-full object-cover w-full"/> </div>',
        '<div class="" style="height: 40rem;"> <img src="http://assets.greg.192.168.1.126.nip.io:8086/images/greg-veil1.png" alt="..." class="h-full object-cover w-full"/> </div>',
      ],
    };
  },
  mounted() {
    this.vantaEffect = TOPOLOGY({
      el: this.$refs.vantaRef,
      p5: p5,
      color: 0x374d61,
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
