<template>
  <div class="planatas">
    <div ref="twitchPlayer" class="m-10"></div>
    <div class="grid place-items-center h-full">
      <p> Select </p>
      <iframe id="stel" ref="stel" src= "http://192.168.1.126:8080/" class= "w-11/12" style="height: 90vh;"></iframe>
      <button class="btn bg-blue-500" v-on:click="setLoc()">Spaghet Set Loc</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Planatas',
  methods: {
    receiveMsg(event) {
      console.log('msg', event.data)
      if (event.data.status) {
        this.setLoc() //set location when ready
      }
    },
    setLoc() {
      const lat = -75
      const lon = 45
      this.$refs.stel.contentWindow.postMessage({ lat: lat, lon: lon }, '*')
    }
  },
  mounted() {
    
    console.log("mounted")
    const socket = new WebSocket('ws://api.greg.192.168.1.126.nip.io:8086/ws')

    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send('s9bpdzb5ls8kw8bvhxemg2gv9v8pc0');
    });

    // Listen for messageszzz
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
        socket.send('OK')
    });

    window.addEventListener('message', this.receiveMsg, false);
    const twitchRef = this.$refs.twitchPlayer;
    let twitchEmbed = document.createElement('script');
    const url = window.location.href;
    const user = url.split("/").pop();
    twitchEmbed.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
    twitchEmbed.addEventListener('load', () => {
	    const options = {
	      width: "100%",
	      height: "100%",
	      channel: user,
	      layout: "video"
	    };
	    new window.Twitch.Embed(twitchRef, options);
	  }, {once: true});
	  document.body.appendChild(twitchEmbed);

    
  }
}
</script>