<template>
  <div>
    <AppProjects :projects="projects" />
    <section class="trusted">
      <div class="container container--small">
        <h2 class="intro-title intro-title--small">
          We are trusted
        </h2>
        <div class="trusted__brands">
          <div v-for="brand in brands" :key="brand.id" class="trusted__brands-col">
            <div class="trusted__brands-item">
              <img :src="require('@/static/images/brands/' + brand.src + '.svg')" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppWork :modal-form="modalForm" @modal-open="modalForm = true" />
    <AppModalForm :is-modal="modalForm" @close-modal="modalForm = false" />
  </div>
</template>

<script>
import AppProjects from '@/components/blocks/AppProjects'
import AppWork from '@/components/blocks/AppWork'
import AppModalForm from '@/components/AppModalForm'
  export default {
    components: {
      AppProjects,
      AppWork,
      AppModalForm
    },
    async asyncData({$axios, $services}) {
      try {
        const resAll = await Promise.all([$services.getPorjects('ru'), $services.getLocalizationText('ru')])
        const projects = resAll[0].data.sort(() => Math.random() - Math.random()).slice(0, 6) ?? []
        return {
          projects
        }
      }
      catch(e) {
        console.log(e)
      }
    },
    data() {
      return {
        modalForm: false,
        projects: [
          {title: 'Spotify – Music service', id: 1},
          {title: 'SkyGo – Unique travels', id: 2},
          {title: 'Conata – Apps for quick contact exchange', id: 3},
          {title: 'F1 app', id: 4},
          {title: 'Dashboard – Educational platform', id: 5},
          {title: 'NFT monkeys', id: 6}
        ],
        brands: [
          {src: 'lutra-light', id: 1},
          {src: 'n-light', id: 2},
          {src: 'nvitro-light', id: 3},
          {src: 'ozon-light', id: 4},
          {src: 'sber-light', id: 5},
          {src: 'sirius-light', id: 6},
          {src: 'peco-light', id: 7},
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
.trusted {
  background: #fff;
  padding-bottom: 80px;
  @media screen and (max-width: 600px){
    padding-bottom: 40px;
  };
  .intro-title {
    text-align: center;
    margin-bottom: 48px;
  }
  &__brands {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 575px){
      // justify-content: flex-start;
      margin: 0 -10px;
    };
    &-col {
      margin-bottom: 20px;
      &:not(:last-child) {
        margin-right: 20px;
        @media screen and (max-width: 575px){
          margin: 0;
        };
      }
      // margin: 0 10.3px 20px;
      // width: calc((100% / 7) - 20.6px);
      @media screen and (max-width: 575px){
        margin: 0;
        padding: 0 10px 20px;
        width: calc(100% / 2);
      };
    }
    &-item {
      background: #F3F3F3;
      border-radius: 999px;
      width: 156px;
      height: 65px;
      display: flex;
      @media screen and (max-width: 575px){
        width: auto;
      };
      img {
        margin: auto;
        display: block;
      }
    }
  }
}
</style>