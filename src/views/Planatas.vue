<template>
  <div class="planatas">
    <iframe id="stel" ref="stel" src= "http://192.168.1.126:8080/" class= "h-screen w-4/5"></iframe>
    <button class="btn btn-blue" v-on:click="setLoc()">Button</button>
    
  </div>
</template>

<script>
export default {
  name: 'Planatas',
  methods: {
    receiveMsg(event) {
      console.log('msg', event.data)
    },
    setLoc() {
      const lat = -75
      const lon = 45
      this.$refs.stel.contentWindow.postMessage({ lat: lat, lon: lon }, '*')
    }
  },
  mounted() {
    window.addEventListener('message', this.receiveMsg, false)
  }
}
</script>