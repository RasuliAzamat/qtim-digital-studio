<template>
  <div>
    <header class="header" :class="[{'header--white': isLightPage}, {playingVideo: isPlayingVideo}]">
      <div class="container">
        <div class="header__inner">
          <nuxt-link to="/" class="logo" :class="currentLogoClass">
            <svg  width="84" height="25">
              <use href="~/static/images/sprite.svg#logo-white"></use>
            </svg>
          </nuxt-link>
          <div class="header__right">
            <nav class="nav">
              <nuxt-link class="hover" to="/works">
                Works
              </nuxt-link>
              <nuxt-link to="/about" class="hover">
                About
              </nuxt-link>
            </nav>
            <div class="actions">
              <div class="burger" :class="[{active: isOpenMobileMenu}, {'burger--dark': isLightPage}]" @click.prevent="isOpenMobileMenu = !isOpenMobileMenu">
                <span></span>
                <span></span>
              </div>
              <SelectLang
              :default="{ type: 'uk',  src: 'language-uk'}"
              />
              <button class="btn btn--main">
                <span>Let’s work</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="mobile-menu" :class="[{active: isOpenMobileMenu}, {'mobile-menu--light': isLightPage}]">
      <SelectLang
      :default="{ type: 'uk',  src: 'language-uk'}"
      />
      <nav class="nav">
        <nuxt-link class="hover" to="/projects">
          Works
        </nuxt-link>
        <nuxt-link to="/about" class="hover">
          About
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>
<script>
import SelectLang from '@/components/ui/SelectLang'
  export default {
    components: {
      SelectLang
    },
    props: {
      lightPagesArray: {
        type: Array,
        default: () => ([])
      }
    },
    data() {
      return {
        isOpenMobileMenu: false,
      }
    },
    computed: {
      isLightPage() {
        return this.lightPagesArray.includes(this.$route.name)
      },
      currentLogoClass() {
        return this.isLightPage ? 'logo--dark' : 'logo--light'
      },
      isPlayingVideo() {
        return this.$store.state.previewVideo.currentVideoSrc
      }
    },
    watch: {
      '$route': {
        handler(val) {
          this.isOpenMobileMenu = false
        },
        deep: true
      },
      isOpenMobileMenu(val) {
        if(val) document.body.classList.add('no-scroll')
        else document.body.classList.remove('no-scroll')
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  left: 0;
  z-index: 1000;
  top: 0;
  width: 100%;
  padding: 34.5px 0;
  background-color: #101010;
  @media screen and (max-width: 600px){
    padding: 16px 0;
  };
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    &--dark {
      fill: #101010;
    }
    &--light {
      fill: #ffffff;
    }
  }
  &__right {
    display: flex;
  }
  .actions {
    display: flex;
    .select {
      @media screen and (max-width: 768px){
        display: none;
      };
    }
    .btn {
      margin-left: 16px;
      background-color: #fff;
      @media screen and (max-width: 600px){
        margin-left: 8px;
      };
    }
  }
  &--white {
    background: #fff;
    .nav {
      a {
        color: #101010;
        &:hover {
          &::before, &::after {
            background-color: #101010;
          }
        }
      }

    }
    .actions {
      .btn {
        background: #101010;
        color: #fff;
        &:hover {
          color: #101010;
        }
      }
    }
  }
  &.playingVideo {
    background: transparent;
  }
}
.nav {
  display: flex;
  align-items: center;
  margin-right: 91px;
  @media screen and (max-width: 768px){
    display: none;
  };
  a {
    font-size: 20px;
    line-height: 100%;
    color: #F3F3F3;
    display: flex;
    &:not(:last-child) {
      margin-right: 48px;
    }
    &:hover {
      &::before, &::after {
        background-color: #fff;
      }
    }
  }
}
.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 70%;
  height: 100%;
  background: rgba(#101010, .9);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  align-items: center;
  transition: all .3s ease;
  &.active {
    left: 0;
  }
  .nav {
    order: 1;
    @media screen and (max-width: 768px){
      display: flex;
      flex-direction: column;
      margin: 0;
      a {
        margin: 0;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    };
  }
  .select {
    order: 2;
    margin-top: 50px;
  }
  &--light {
    background: rgba(#fff, .9);
    .nav {
      a {
        color: #101010;
        &:hover {
          &::before, &::after {
            background-color: #101010;
          }
        }
      }
    }
  }
}
</style>