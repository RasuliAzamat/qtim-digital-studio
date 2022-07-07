<template>
  <div>
    <transition name="fade">
      <div v-if="isModal" class="backdrop"></div>
    </transition>
    <transition name="fade">
      <div v-if="isModal" class="modal-overlay" @click.prevent="$emit('modal-close')">
        <div class="modal" @click.stop>
          <button class="btn btn--close"  @click.prevent="$emit('modal-close')">
            Close
          </button>
          <iframe width='1216px' height='715px' src='https://player.vimeo.com/video/225434434?&title=0&byline=0&portrait=0'></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      isModal: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isModal(val) {
        if (val) {
          document.body.classList.add('no-scroll')
          const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
          console.log( scrollbarWidth)
          // document.body.style.paddingRight = scrollbarWidth + 'px';
        }
        else{
          document.body.classList.remove('no-scroll')
          document.body.style.paddingRight = 0
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.backdrop, .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.backdrop {
  z-index: 1200;
  background: rgba(#101010, .9);
}
.modal-overlay {
  z-index: 1255;
  display: flex;
  overflow: auto;
  padding: 100px 30px;
  @media screen and (max-width: 600px){
    padding: 50px 0;
  };

}
.modal {
  margin: auto;
  width: 86.9%;
  position: relative;
  height: 0;
  padding-bottom:50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  .btn--close {
    // position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    font-size: 20px;
    line-height: 100%;
    color: #F3F3F3;
    z-index: 5;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>