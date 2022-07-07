<template>
  <div>
    <section class="intro">
      <div class="container container--small">
        <div class="intro__content">
          <h1 :style="currentVideoSrc ? 'visibility: hidden;': 'visibility: visible;'" class="intro-title intro-title--light">
            <span class="has-icon">We <img class="img-racket" src="~/static/images/racket.png" alt=""> develop</span>
            <span>
              digital products
            </span>
            <span class="has-icon">
              <img class="img-girl" src="@/static/images/girl.png" alt="">
              <span>
                of whatever complexity
              </span>
            </span>
          </h1>
          <nav class="nav" @mouseleave="onMouseLeave">
            <button v-for="btn in videosSrc" :key="btn.id" class="btn btn--showreel" :class="{active: btn.active}" @click.prevent="setCurrentVideoSrc(btn, $event)" @mouseenter="setCurrentVideoSrc(btn, $event)">{{btn.title}} <span>{{currentTimeVideo}}<img src="~/static/images/arrow-right.svg" alt=""></span></button>
          </nav>
        </div>
        <footer :style="currentVideoSrc ? 'visibility: hidden;': 'visibility: visible;'" class="intro__footer footer-intro">
          <div class="footer-intro__text">
            We are trusted
          </div>
          <div class="brand-slider">
            <client-only>
              <swiper ref="mySwiper" :options="brandsSliderOptions" >
                <!-- slides -->
                <swiper-slide v-for="slide in brandsSlides" :key="slide.id">
                  <div class="brand-slider__item" :class="'brand-slider__item--' + slide.src">
                    <img :key="slide.id" :src="require('@/static/images/brands/' + slide.src + '.svg')" alt="">
                  </div>
                </swiper-slide>
              </swiper>
            </client-only>
          </div>
          <div class="footer-intro__text footer-intro__text--dark">
            and 67 other companies
          </div>
        </footer>
      </div>
    </section>
    <div class="feature">
      <div class="container container--small">
        <div class="feature__inner">
          <div class="feature__img">
            <img src="@/static/images/wreath.png" alt="">
            <span>TOP 21 In runet ratings</span>
          </div>
          <div class="feature__descr">
            <div>The specifics of our work</div>
            <p>
              Establish a dialogue between the customer and his digital reflection (site, product, service). We build long-term relationships, so we try to protect the customer from future difficulties at the design stage
            </p>
          </div>
        </div>
      </div>
    </div>
    <section class="team">
      <div class="container container--small">
        <h2 class="page-title page-title--dark">
          Team
        </h2>
        <div class="team__inner">
          <div class="team__team" >
            <img class="" src="@/static/images/team/team-text.svg" alt="">
            <div v-for="(item, idx) in team" :key="idx" class="team__person" :class="'team__person--'+ (idx + 1)">
              <div class="team__person-img">
                <img :src="`${baseUrl}${item.img}`" alt="">
              </div>
              <div class="team__person-tooltip">
                <h5>{{item.name}}</h5>
                <div>{{item.position}}</div>
              </div>
            </div>
          </div>
          <div class="team__play">
            <button class="btn btn--showreel-play" @click.prevent="modalVideo = true">
              <img src="~/static/images/button-play.svg" alt="">
            </button>
            <span>Showreel</span>
          </div>
          <div class="team__footer">
            <nuxt-link to="/about" class="hover" >About company</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <AppProjects :projects="projects" />
    <section class="reviews">
      <div class="container container--small">
        <div class="reviews__shapes">
          <div class="reviews__shapes-col">
            <div class="shape shape--treangle">
              <div class="shape__img">
                <svg class="triangle main-svg">
                  <use href="@/static/images/sprite.svg#shape-triangle"></use>
                </svg>
                <svg class="circle circle--1 main-svg">
                  <use href="@/static/images/sprite.svg#shape-circle-big"></use>
                </svg>
                <svg class="circle circle--2 main-svg">
                  <use href="@/static/images/sprite.svg#shape-circle-big"></use>
                </svg>
                <svg class="circle circle--3 main-svg">
                  <use href="@/static/images/sprite.svg#shape-circle-big"></use>
                </svg>
              </div>
              <div class="shape__text">
                74% of clients reapply
              </div>
            </div>
          </div>
          <div class="reviews__shapes-col">
            <div class="shape shape--spin">
              <div class="shape__img">
                <svg ref="shapeSpin" width="160" height="160"  class="main-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.5" cx="79.9999" cy="147.538" r="11.9623" stroke="#F3F3F3" />
                  <circle opacity="0.7" cx="147.538" cy="79.9999" r="11.9623" stroke="#F3F3F3" />
                  <circle opacity="0.5" cx="105.729" cy="142.714" r="11.9623" stroke="#F3F3F3" />
                  <circle opacity="0.6" cx="128.241" cy="127.437" r="11.9623" stroke="#F3F3F3" />
                  <circle opacity="0.6" cx="142.714" cy="105.728" r="11.9623" stroke="#F3F3F3" />
                  <circle opacity="0.3" r="11.9623" transform="matrix(-1 0 0 1 12.4622 79.9999)" stroke="#F3F3F3"/>
                  <circle opacity="0.4" r="11.9623" transform="matrix(-1 0 0 1 54.2713 142.714)" stroke="#F3F3F3"/>
                  <circle opacity="0.4" r="11.9623" transform="matrix(-1 0 0 1 31.7589 127.437)" stroke="#F3F3F3"/>
                  <circle opacity="0.3" r="11.9623" transform="matrix(-1 0 0 1 17.2865 105.728)" stroke="#F3F3F3"/>
                  <circle opacity="0.8" cx="80.0001" cy="12.4625" r="11.9623" transform="rotate(-180 80.0001 12.4625)" stroke="#F3F3F3"/>
                  <circle opacity="0.1" cx="54.2713" cy="17.2867" r="11.9623" transform="rotate(-180 54.2713 17.2867)" stroke="#F3F3F3"/>
                  <circle opacity="0.1" cx="31.7589" cy="32.5631" r="11.9623" transform="rotate(-180 31.7589 32.5631)" stroke="#F3F3F3"/>
                  <circle opacity="0.2" cx="17.2865" cy="54.2716" r="11.9623" transform="rotate(-180 17.2865 54.2716)" stroke="#F3F3F3"/>
                  <circle opacity="0.8" r="11.9623" transform="matrix(1 0 0 -1 105.729 17.2867)" stroke="#F3F3F3"/>
                  <circle opacity="0.8" r="11.9623" transform="matrix(1 0 0 -1 128.241 32.5631)" stroke="#F3F3F3"/>
                  <circle opacity="0.7" r="11.9623" transform="matrix(1 0 0 -1 142.714 54.2716)" stroke="#F3F3F3"/>
                </svg>
              </div>
              <div class="shape__text">
                On call 24 hours
              </div>
            </div>
          </div>
          <div class="reviews__shapes-col">
            <div class="shape shape--square">
              <div class="shape__img">
                <svg class="square square--1 main-svg">
                  <use href="@/static/images/sprite.svg#shape-square"></use>
                </svg>
                <svg class="square square--2 main-svg">
                  <use href="@/static/images/sprite.svg#shape-square"></use>
                </svg>
                <svg class="square square--3 main-svg">
                  <use href="@/static/images/sprite.svg#shape-square"></use>
                </svg>
              </div>
              <div class="shape__text">
                Over 250 projects
              </div>
            </div>
          </div>
        </div>
        <div class="reviews__content">
          <h2 class="page-title">Review</h2>
          <div class="reviews__comments">
            <div v-for="comment in comments" :key="comment.id" class="reviews__comments-col">
              <div class="comment">
                <div class="comment__text">
                  <p>
                    {{comment.text}}
                  </p>
                </div>
                <div class="comment__main">
                  <img :src="require('~/static/images/comments/person-' + comment.id + '.png')" alt="" class="comment__avatar">
                  <div class="comment__content">
                    <h4 class="comment__name">{{comment.name}}</h4>
                    <div class="comment__pos">{{comment.pos}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews__footer">
          <nuxt-link class="btn btn--main btn--more btn--darken" to="#">
            <span>See More</span>
          </nuxt-link>
        </div>
      </div>
    </section>
    <AppWork :modal-form="modalForm" @modal-open="modalForm = true" />
    <AppModalForm :is-modal="modalForm" @close-modal="modalForm = false" />
    <AppModalVimeo :is-modal="modalVideo" @modal-close="modalVideo = false" />
  </div>
</template>
<script>
import AppProjects from '@/components/blocks/AppProjects'
import AppWork from '@/components/blocks/AppWork'
import checkIsTouchDevice from '@/utils/checkIsTouchDevice'
import AppModalForm from '@/components/AppModalForm'
import AppModalVimeo from '@/components/AppModalVimeo'
export default {
  components: {
    AppProjects,
    AppWork,
    AppModalForm,
    AppModalVimeo
  },
  props: {

  },
  async asyncData({$axios, $services}) {
    try {
      const resAll = await Promise.all([$services.getPorjects('ru'), $services.getTeam('ru'), $services.getLocalizationText('ru')])
      const projects = resAll[0].data.sort(() => Math.random() - Math.random()).slice(0, 4) ?? []
      const team = resAll[1].data ?? []
      const texts = resAll[2]
      console.log(resAll,texts, projects, team)
      return {
        team,
        projects
      }
    }
    catch(e) {
      console.log(e)
    }
  },
  data() {
    return {
      brandsSlides: [
        {src: 'lutra', id: 1},
        {src: 'n', id: 2},
        {src: 'nvitro', id: 3},
        {src: 'ozon', id: 4},
        {src: 'peco', id: 5},
        {src: 'sirius', id: 6},
      ],
      videosSrc: [
        {src: require('@/static/videos/showreel-1.mp4'), id: 1, title: 'Websites', active: false},
        {src: require('@/static/videos/showreel-2.mp4'), id: 2, title: 'Applications', active: false},
        {src: require('@/static/videos/showreel-1.mp4'), id: 3, title: 'Mobile development', active: false},
        {src: require('@/static/videos/showreel-2.mp4'), id: 4, title: 'CRM systems', active: false},
      ],
      // team: [
      //   {name: 'Fokin Anton', pos: 'ceo'},
      //   {name: 'Trushin Artyom', pos: 'cto'},
      //   {name: 'Trushin Artyom', pos: 'cto'},
      //   {name: 'Vishnevskaya Anastasiya', pos: 'Head of project management'},
      //   {name: "Lebedev Il'ya", pos: 'Head of backend development'},
      //   {name: 'Fokin Anton', pos: 'ceo'},
      //   {name: 'Bystrova Kseniya', pos: 'Head of project management'},
      // ],
      brandsSliderOptions: {
        centeredSlides: true,
        loop: true,
        speed: 700,

        allowTouchMove: false,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          // when window width is >= 640px
          600: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          }
        }
      },
      projects: [
        {title: 'Spotify – Music service', id: 1},
        {title: 'SkyGo – Unique travels', id: 2},
        {title: 'Conata – Apps for quick contact exchange', id: 3},
        {title: 'F1 app', id: 4},
      ],
      comments: [
        {name: 'Jacopo Pertile', pos: 'CEO Sirius', text: `Qtim became a full-fledged technical co-founder of my project. After the release of the platform raised 4 million euros to fight the virus epidemic in 6 weeks.`, id: 1},
        {name: 'Veronica Serebryakova', pos: 'Managing manager of Invitro', text: `The Qtim team implemented our brandbank platform within the deadline, taking into account all the limitations that were prescribed. Many things were revised on the recommendation of the guys and made on the basis of their experience in similar projects. We continue to develop our project in the same spirit.`, id: 2},
        {name: 'Arthur Karalov', pos: 'Director of development of fitness clubs', text: `The guys from Qtim rewrote the entire site from scratch in a couple of months. In the process of development they offered ideas to solve our "pains". We are still working with them. Everything is great!`, id: 3},
        {name: 'Repin Ivan', pos: 'Repin.agency', text: `The guys from Qtim rewrote the entire site from scratch in a couple of months. In the process of development they offered ideas to solve our "pains". We are still working with them. Everything is great!`, id: 4 },
      ],
      modalForm: false,
      modalVideo: false
    }
  },
  computed: {
    currentTimeVideo() {
      return this.$store.state.previewVideo.currenVideoTime
    },
    currentVideoSrc() {
      return this.$store.state.previewVideo.currentVideoSrc
    },
    baseUrl() {
      return process.env.baseUrl;
    }
  },

  methods: {
    setCurrentVideoSrc(btn, e) {
      this.$store.commit('previewVideo/setCurrentVideoTime', '00:00')
      this.$store.commit('previewVideo/setCurrentVideoSrc', btn.src)
      if(e.type === 'click' && checkIsTouchDevice()) {
        this.videosSrc.forEach(item => {
          item.active = false
        })
        btn.active = true
     }
    },
    onMouseLeave() {
      this.$store.commit('previewVideo/setCurrentVideoSrc', null)
      if (checkIsTouchDevice()) {
        this.videosSrc.forEach(item => {
          item.active = false
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.intro {
  background: #101010;
  min-height: calc(100vh - 189px);
  color: #fff;
  position: relative;
  padding: 30px 0 38px 0;
  .container {
    min-height: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 991px){
      padding-left: 20px;
    };
  }
  .intro-title {
    max-width: 570px;
    width: 100%;
  }
  &__content {
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    margin-bottom: 40px;
    @media screen and (max-width: 768px){
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    };
  }
  .nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 286px;
    width: 100%;
    position: relative;
    z-index: 500;
    @media screen and (max-width: 768px){
      flex-wrap: wrap;
      margin-bottom: -12px;
      margin-top: 24px;
      flex-direction: row;
      max-width: none;
    };
    .btn--showreel {
      border: 1px solid rgba(243, 243, 243, 0.2);
      font-size: 20px;
      padding: 18px 23.2px;
      color: #fff;
      white-space: nowrap;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      transition: all .3s;
      position: relative;
      @media (any-hover: hover){
        &:hover {
          border-color: transparent;
          background-color: #fff;
          color: #232323;
          span {
            opacity: 1;
            visibility: visible;
            display: flex;
          }
        }
      };
      &.active {
        border-color: transparent;
        background-color: #fff;
        color: #232323;
        span {
          opacity: 1;
          visibility: visible;
          display: flex;
        }
      }
      span {
        margin-left: 20px;
        font-size: 16px;
        color: #868686;
        line-height: 16px;
        margin-right: 8px;
        display: none;
        // position: absolute;
        // opacity: 0;
        // visibility: hidden;
      }
      img {
        position: relative;
        top: -1px;
        margin-left: 8px;
      }
      @media screen and (max-width: 600px){
        font-size: 16px;
        padding: 12px 19.23px;
      };

      &:not(:last-child) {
        margin-bottom: 16px;
        @media screen and (max-width: 768px){
          margin-bottom: 12px;
          margin-right: 12px;
        };
      }
    }
  }
  .brand-slider {
    max-width: 550px;
    overflow: hidden;
    position: relative;
    width: 100%;
    @media screen and (max-width: 600px){
      max-width: 100%;
      .swiper-container {
        padding: 0 20px;
      }
    };
    &::before, &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 165px;
      @media screen and (max-width: 600px){
        content: none;
      };
    }
    &::before {
      background: linear-gradient(270deg, #101010 50%, rgba(16, 16, 16, 0) 100%);
      right: -60px;
      z-index: 2;
      top: 0;
    }
    &::after {
      background: linear-gradient(90deg, #101010 50%, rgba(16, 16, 16, 0) 100%);
      left: -60px;
      z-index: 2;
      top: 0;
    }
    &__item {
      background: #232323;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 65px;
      width: 144px;
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
      @media screen and (max-width: 600px){
        width: 100%;
        height: 49px;
        &--nvitro {
          img {
            width: 56px;
          }
        }
        &--ozon {
          img {
            width: 48px;
          }
        }
        &--n {
          img {
            width: 25px;
          }
        }
        &--peco {
          img {
            width: 57px;
          }
        }
        &--lutra {
          img {
            width: 75px;
          }
        }
        &--sirius {
          img {
            width: 65px;
          }
        }
      };
    }
  }
  .footer-intro {
    // overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px){
      flex-direction: column;
    };
    @media screen and (max-width: 600px){
      margin: 0 -20px;
    };
    &__text {
      font-size: 20px;
      line-height: 100%;
      color: #F3F3F3;
      @media screen and (max-width: 768px){
        margin-bottom: 20px;
      };
      &--dark {
        color: #868686;
        @media screen and (max-width: 768px){
          display: none;
        };
      }
    }
  }
}
.feature {
  background-color: #fff;
  padding: 120px 0;
  @media screen and (max-width: 600px){
    padding: 40px 0 50px 0;
  };
  &__inner {
    display: flex;
    @media screen and (max-width: 850px){
      flex-direction: column;
      align-items: flex-start;
    };
  }
  &__img {
    @media screen and (max-width: 850px){
      order: 2;
    };
    img {
      margin: 0 auto;
      @media screen and (max-width: 600px){
        width: 102px;
        height: auto;
        display: block;
      };
    }
    span {
      display: block;
      max-width: 118px;
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      line-height: 120%;
      margin-top: 24px;
      @media screen and (max-width: 600px){
        font-size: 16px;
        line-height: 120%;
      };
    }
  }
  &__descr {
    max-width: 592px;
    width: 100%;
    margin-left: auto;
    padding-left: 25px;
    @media screen and (max-width: 850px){
      margin-left: 0;
      order: 1;
      padding-left: 0;
      padding-bottom: 48px;
    };
    p {
      font-size: 36px;
      color: #232323;
      line-height: 124%;
      @media screen and (max-width: 600px){
        font-size: 24px;
        line-height: 120%;
      };
    }
    div {
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 32px;
      letter-spacing: 0.01em;
      @media screen and (max-width: 600px){
        font-size: 14px;
        line-height: 120%;
        margin-bottom: 24px;
      };
    }
  }
}
.team {
  background-color: #fff;
  padding: 110px 0;
  @media screen and (max-width: 600px){
    padding: 40px 0 32px;
  };
  .page-title {
    display: none;
    text-align: center;
    @media screen and (max-width: 715px){
      display: block;
    };
  }
  &__team {
    position: relative;
    max-width: 1008px;
    width: 100%;
    margin: 0 auto;
    &::before,&::after {
      position: absolute;
      content: "";
      width: 71.41px;
      height: 77.3px;
      background-repeat: no-repeat;
      background-size: contain;
      @media screen and (max-width: 715px){
        content: none;
      };
    }
    &::after {
      background-image: url('~/static/images/team/line-big.svg');
      bottom: -24px;
      left: 213px;
      @media screen and (max-width: 1262px){
        bottom: -18px;
        left: 125px;
        width: 51.41px;
        height: 51.41px;

      };
    }
    &::before {
      background-image: url('~/static/images/team/line-big_right.svg');
      bottom: 181px;
      right: -36px;
      @media screen and (max-width: 1262px){
        bottom: 99px;
        right: -25px;
        width: 51.41px;
        height: 51.41px;
      };
    }
    @media screen and (max-width: 1262px){
      width: 600px;
    };
    @media screen and (max-width: 715px){
      width: auto;
      display: flex;
      flex-wrap: wrap;
      margin: 48px -20px 0;
    };
    img {
      display: block;
      width: 100%;
      @media screen and (max-width: 715px){
        display: none;
      };
    }
  }
  &__person {
    position: absolute;
    cursor: pointer;
    @media screen and (max-width: 715px){
      position: static;
      width: calc((100% / 3) - 40px);
      margin: 0 20px;
      margin-bottom: 24px;
    };
    @media screen and (max-width: 575px){
      width: calc(50% - 40px);
    };
    &-img {
      width: 100px;
      height: 100px;
      @media screen and (max-width: 1262px){
        width: 60px;
        height: 60px;
      };
      @media screen and (max-width: 715px){
        position: relative;
        margin: 0 auto 16px;
        width: 100px;
        height: 100px;
      };
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 50%;
    }
    &:hover {
      @media screen and (min-width: 715px){
        .team__person-tooltip {
          opacity: 1;
          transform: translateY(-8px) translateX(-50%);
          visibility: visible;
        }
      };
    }
    &-tooltip {
      pointer-events: none;
      font-size: 16px;
      line-height: 120%;
      background: #E2BEFF;
      visibility: hidden;
      border-radius: 8px;
      padding: 12px 10px 11px;
      text-align: center;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateY(10px) translateX(-50%);
      transition: all .12s ease-out .12s;
      opacity: 0;
      min-width: 117px;
      @media screen and (max-width: 715px){
        position: static;
        visibility: visible;
        opacity: 1;
        max-width: none;
        background: transparent;
        padding: 0;
        transform: none;
        font-size: 14px;
      };
      h5 {
        font-size: 16px;
        line-height: 120%;
        margin-bottom: 4px;
      }
      div {
        @media screen and (max-width: 715px){
          color: #868686;
        };
      }
      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 4.5px 0 4.5px;
        border-color: #e2beff transparent transparent transparent;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (max-width: 715px){
          content: none;
          position: static;
        };
      }
    }
    &--1 {
      top: -36px;
      left: 62px;
      @media screen and (max-width: 1262px){
        top: -28px;
        left: 6%;
      };
      @media screen and (max-width: 715px){
        .team__person-img {
          &::before {
            background-image: url('~/static/images/team/line-1.svg');
            top: -7px;
            left: -16px;
          }
        }
      };
    }
    &--2 {
      top: 231px;
      left: 65px;
      @media screen and (max-width: 1262px){
        left: 6%;
        top: 137px;
      };
    }
    &--3 {
      top: 47px;
      left: 290px;
      @media screen and (max-width: 1262px){
        top: 26px;
        left: 29%;
      };
    }
    &--4 {
      top: 231px;
      left: 437px;
      @media screen and (max-width: 1262px){
         top: 137px;
         left: 44%;
      };
       @media screen and (max-width: 715px){
        .team__person-img {
          &::before {
            background-image: url('~/static/images/team/line-2.svg');
            top: 54px;
            left: -13px;
          }
        }
      };

    }
    &--5 {
      top: 231px;
      left: 687px;
      @media screen and (max-width: 1262px){
        top: 137px;
        left: 67.5%;
      };
      @media screen and (max-width: 715px){
        .team__person-img {
          &::before {
            background-image: url('~/static/images/team/line-3.svg');
            top: 56px;
            left: 73px;
          }
        }
      };
    }
    &--6 {
      top: 47px;
      left: 812px;
      @media screen and (max-width: 1262px){
        top: 26px;
        left: 80.5%;
      };
    }
    &--7 {
      top: 231px;
      left: 941px;
      @media screen and (max-width: 1262px){
        top: 137px;
        left: 93.5%;
      };
      @media screen and (max-width: 715px){
        .team__person-img {
          &::before {
            background-image: url('~/static/images/team/line-4.svg');
            top: -4px;
            left: 74px;
          }
        }
      };
    }
    &--1, &--4, &--5, &--7 {
      @media screen and (max-width: 715px){
        .team__person-img {
          position: relative;
          left: auto;
          top: auto;
          right: auto;
          bottom: auto;
          &::before {
            content: "";
            position: absolute;
            background-position: center;
            background-size:contain;
            background-repeat: no-repeat;
            width: 40px;
            height: 50px;
          }
        }
      };
    }
  }
  &__play {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 109px;
    @media screen and (max-width: 715px){
      margin-top: 36px;
    };
    span {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.01em;
      color: #101010;
      margin-top: 16px;
    }
  }
  &__footer {
    text-align: center;
    margin-top: 60px;
    @media screen and (max-width: 600px){
      margin-top: 35px;
    };
    a {
      font-size: 20px;
      line-height: 100%;
      color: #101010;
    }
  }
}
.reviews {
  padding: 120px 0 160px;
  overflow: hidden;
  @media screen and (max-width: 600px){
    padding: 20px 0 50px;
  };
  &__shapes {
    margin: 0 -16px;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 991px){
      margin: 0;
    };
    &-col {
      padding: 0 16px;
      width: calc(100% / 3);
      @media screen and (max-width: 991px){
        width: 100%;
        margin-bottom: 20px;
        padding: 0;
      };
    }
    .shape {
      background: #1B1B1B;
      height: 386px;
      position: relative;
      padding: 34px 25px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      cursor: pointer;
      @media screen and (max-width: 600px){
        height: 336px;
      };
      &__img {
        position: absolute;
        top: 44%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &__text {
        font-size: 24px;
        line-height: 120%;
        color: #F3F3F3;
      }

      &--treangle {
        svg {
          stroke: #868686;
          fill: transparent;
          transition: all 1.4s cubic-bezier(0,0,0.58,1);
          &.triangle {
            width: 117.41px;
            height: 101.85px;
          }
          &.circle {
            width: 56.59px;
            height: 56.59px;
            position: absolute;
            &--1 {
              top: -30px;
              left: 32px;
            }
            &--2 {
              top: 72px;
              left: -27px;
            }
            &--3 {
              top: 72px;
              left: 91px;
            }
          }
        }
        &:hover {
          svg {
            stroke: #E2BEFF;
            &.circle {
              transform: scale(0.849);
              // width: 48px;
              // height: 48px;
              &--1 {
                top: 21px;
                left: 32px;
              }
              &--2 {
                top: 49px;
                left: 14px;
              }
              &--3 {
                top: 49px;
                left: 46px;
              }
            }
          }
        }
      }
      &--spin {
        .main-svg {
            animation-duration: 5000ms;
            animation-iteration-count: infinite;
            // transition: all 5s linear;
            animation-timing-function: linear;
        }
        &:hover {
          svg {
            animation-name: spin;
            circle {
              stroke: #9EFFBF;
            }
          }
        }
      }
      &--square {
        .shape__img {
          width: 151px;
          height: 151px;
        }
        .square{
           stroke: #868686;
            fill: #6D6D6D;
            position: absolute;
            width: 111px;
            height: 111px;
            // transform: rotate(35deg) perspective(15px);
          rect {
            stroke: #868686;
            fill: #6D6D6D;
          }
          &--1 {
            top: -10px;
          }
          &--2 {
            top: 10px;
            left: 20px;
          }
          &--3 {
            top: 30px;
            left: 41px;
          }
        }

      }
    }
  }
  &__content {
    padding-top: 120px;
    .page-title {
      margin-bottom: 60px;
      @media screen and (max-width: 600px){
        text-align: center;
        margin-bottom: 45px;
      };
    }

  }
  &__comments {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -68px;
    @media screen and (max-width: 1366px){
      margin: 0 -25px;
    };
    @media screen and (max-width: 991px){
      margin: 0;
    };
    &-col {
      width: 50%;
      padding: 0 68px 60px;
      @media screen and (max-width: 1366px){
        padding: 0 25px 60px;
      };
      @media screen and (max-width: 991px){
        padding: 0 0 48px;
        width: 100%;
      };
      @media screen and (max-width: 600px){
        padding: 0 25px 48px;
      };
    }
    .comment {
      &__text {
        font-size: 24px;
        line-height: 120%;
        color: #F3F3F3;
        @media screen and (max-width: 600px){
          font-size: 20px;
        };
      }
      &__main {
        margin-top: 24px;
        display: flex;
        align-items: center;
      }
      &__avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        flex-shrink: 0;
        margin-right: 20px;
      }
      &__name {
        font-size: 16px;
        line-height: 100%;
        color: #F3F3F3;
        margin-bottom: 4px;
      }
      &__pos {
        font-size: 16px;
        line-height: 100%;
        color: rgba(#F3F3F3, .4);

      }
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}

</style>