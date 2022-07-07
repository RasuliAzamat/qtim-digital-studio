<template>
  <section class="projects">
    <div class="container container--small">
      <h2 class="page-title page-title--dark">
        Projects
      </h2>
      <div class="projects__choose">
        <div class="projects__choose-inner">
          <nuxt-link v-for="link in links" :key="link.title" to="#" event="" class="link-hover" :class="{active: link.active}" @click.native.prevent="setActiveLink(link)">
            {{link.title}}
            <span>{{link.values}}</span>
            <img src="@/static/images/close.svg" alt="">
          </nuxt-link>
        </div>
      </div>
      <div class="projects__row">
        <div v-for="project in projects" :key="project.id" class="projects__col">
          <AppProject :item="project" />
        </div>
      </div>
      <div class="projects__footer">
        <nuxt-link to="/projects" class="btn btn--main btn--more">
          <span>See More</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppProject from '@/components/AppProject'
  export default {
    components: {
      AppProject
    },
    props: {
      projects: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        links: [
          {href: '#', title: 'All', values: 48, active: true},
          {href: '#', title: 'Websites', values: 12, active: false},
          {href: '#', title: 'Applications', values: 24, active: false},
          {href: '#', title: 'Mobile development', values: 8, active: false},
          {href: '#', title: 'CRM systems', values: 4, active: false},
        ],
        activeLink: ''
      }
    },
    methods: {
      setActiveLink(link) {
        this.links.forEach(item => {
          item.active = false
        })
        link.active = true
      }
    }
  }
</script>

<style lang="scss" scoped>

.projects {
  padding: 60px 0 160px;
  background-color: #fff;
  @media screen and (max-width: 600px){
    padding: 40px 0 60px;
  };
  .page-title {
    margin-bottom: 50px;
    @media screen and (max-width: 600px){
      margin-bottom: 26px;
      text-align: center;
    };
  }
  &__choose {
    @media screen and (max-width: 768px){
      margin: 0 -20px;
    };
    &-inner {
      display: flex;
      align-items: center;
      overflow-x: auto;
      @media screen and (max-width: 768px){
        padding: 0 20px;
      };
    }
    a {
      font-size: 16px;
      line-height: 100%;
      color: #101010;
      display: flex;
      align-items: center;
      white-space: nowrap;
      padding: 0px 0px;
      background-color: transparent;
      border-radius: 999px;
      position: relative;
      transition: background .3s;
      margin: 0 20.83px;
      margin-right: 32.83px;
      // overflow: hidden;
      img {
        margin-left: 7px;
        opacity: 0;
        transition: all .2s linear;
        visibility: hidden;
        position: relative;
        top: -1px;
        // display: none;
      }
      span {
        margin-left: 8px;
      }
      &.active {
        background-color: #F3F3F3;
        padding: 16px 20.83px;
        margin: 0;
        &:not(:last-child) {
          margin-right: 12px;
        }
        img {
          visibility: visible;
          opacity: 1;
          display: block;
        }
      }
    }
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    margin: 60px -50px 0;
    @media screen and (max-width: 1350px){
       margin: 60px -20px 0;
    };
    @media screen and (max-width: 700px){
      margin: 32px 0 0;
    };
  }
  &__col {
    padding: 0 50px;
    width: 50%;
    min-height: 733px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1350px){
      padding: 0 20px;
    };
    @media screen and (max-width: 1150px){
      min-height: 644px;
    };
    @media screen and (max-width: 1030px){
      min-height: auto;
      margin-bottom: 40px;
      .project {
        flex-grow: 1;
      }
    };
    @media screen and (max-width: 700px){
      width: 100%;
      padding: 0;
    };
    &:nth-child(even) {
      justify-content: flex-end;
    }

  }
  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    @media screen and (max-width: 1030px){
      margin-top: 5px;
    };
    a {
      border-radius: 999px;
      font-weight: 400;
      font-size: 20px;
      line-height: 100%;
      color: #101010;
    }
  }
}
</style>