<template>
  <div>
    <TheHeader :light-pages-array="lightPages" />
    <AppVideoPreview :src="currentVideoSrc" />
    <main class="main" :class="currentMainClass">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import checkIsMobile from '~/utils/checkIsMobile'
import AppVideoPreview from '@/components/AppVideoPreview'
export default {
  components: {
    TheHeader,
    AppVideoPreview
  },
  data() {
    return {
      lightPages: ['projects', 'projects-id', 'about', 'contacts'],
      currentVideoSrc: null,
      currentTimeVideo: '00:00'
    }
  },
  computed: {
    currentMainClass() {
      return this.lightPages.includes(this.$route.name) ? 'main--light' : 'main--dark'
    }
  },
  mounted() {
    if (checkIsMobile()) {
      document.body.classList.add('isMobile')
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 121px;
  &--dark {
    background-color: #101010;
  }
  &--light {
    background-color: #ffffff;
  }
  @media screen and (max-width: 600px){
    padding-top: 72px;
  };
}
</style>