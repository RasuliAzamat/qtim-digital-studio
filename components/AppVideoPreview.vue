<template>
  <transition name="fade">
    <div v-if="src" class="video-wrap">
      <video ref="myVideo" :src="src" class="video" autoplay loop playsinline muted @timeupdate="onTimeUpdate($event)">
      </video>
      <div ref="progressBar" class="progress">
      </div>
    </div>
  </transition>
</template>

<script>
  export default {

    data() {
      return {
        currentDuration: null,
        progress: 0,
      }
    },
    computed: {
      src() {
        return this.$store.state.previewVideo.currentVideoSrc
      }
    },
    watch: {

    },
    methods: {
      onTimeUpdate(e) {
        const video = e.target
        const currentSecondsLeft = Number(Math.floor(((video.duration - video.currentTime) % 60)).toFixed(0))
        const currentMinutesLeft = Number(Math.floor(((video.duration - video.currentTime) / 60)) % 60)
        const formatedTime = `${currentMinutesLeft ? currentMinutesLeft < 10 ? '0'+currentMinutesLeft : currentMinutesLeft : '00'}:${currentSecondsLeft ? currentSecondsLeft < 10 ? '0'+currentSecondsLeft : currentSecondsLeft : '00'}`
        this.$store.commit('previewVideo/setCurrentVideoTime', formatedTime)
        this.progress = (video.currentTime / video.duration) * 100
        if (this.$refs.progressBar) {
          this.$refs.progressBar.style.width = `${this.progress}%`
        }
      },

    }
  }
</script>

<style lang="scss" scoped>
.video-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 444;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, .24);
    z-index: 2;
  }
  .video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.progress {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 6px;
  transition: all .1s linear;
  background-color: #fff;
}
</style>