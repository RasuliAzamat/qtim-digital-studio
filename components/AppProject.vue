<template>
  <article class="project" :class="classType">
    <nuxt-link class="project__img" :to="`/projects/${item.slug}`">
      <img :src="urlImage" alt="">
    </nuxt-link>
    <nuxt-link to="#" class="project__title link-hover">
      {{item.title}}
    </nuxt-link>
  </article>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      classType: {
        type: String,
        default: ""
      },
      isStaticImages: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      urlImage() {
        return this.isStaticImages ? this.item.src : process.env.baseUrl + this.item.img
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    &:hover {
      .project__title {
        &::before {
          width: 100%;
        }
      }
    }
    &__title {
      font-size: 24px;
      line-height: 120%;
      color: #000000;
      @media screen and (max-width: 700px){
        font-size: 20px;
        line-height: 120%;
      };
    }
    &__img {
      padding-bottom: calc(559px / 558px * 100%);
      position: relative;
      display: block;
      margin-bottom: 25px;
      @media screen and (max-width: 700px){
        margin-bottom: 20px;
      };
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--light {
      .project__title {
        color: #fff;
        &::before {
          background: #fff;
        }
      }
      &:hover {
      .project__title {
        &::before {
          width: 100%;
        }
      }
    }
    }
  }
</style>