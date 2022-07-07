<template>
  <div>
    <section class="intro">
      <div class="container container--small">
        <div class="intro__text">
          <h1 class="intro-title">
            Sirius International Platform
            <a href="sirius-platform.com" target="_blank">
              sirius-platform.com
            </a>
          </h1>
          <div class="intro__descr">
            Sirius is a web platform that has been designed to collect donations from for-profit companies. The object of the charity is the projects of non-profit organizations.
          </div>
        </div>
        <div class="intro__items">
          <div v-for="(item, idx) in introItems" :key="idx" class="intro__items-col" >
            <div class="intro__items-item ball-item" :class="{active: idx === introItems.length - 1}">
              <div v-if="item.value" class="ball-item__value">
                {{item.value}}
              </div>
              <div class="ball-item__text">
                {{item.text}}
              </div>
            </div>
          </div>
        </div>
        <div class="intro__skills skills">
          <div v-for="(skill, idx) in introSkills" :key="idx" class="skills__item">
            <div class="skills__item-img">
              <img :src="require(`@/static/images/skills/${skill.src}.svg`)" alt="">
            </div>
            <div class="skills__item-text">{{skill.text}}</div>
          </div>
        </div>
      </div>
    </section>
    <div class="business">
      <div class="container container--small">
        <div class="business__img">
          <img src="@/static/images/bikes/bike-1.png" alt="">
        </div>
        <div class="business__text">
          <small>About</small>
          <div class="business__descr">
            <p>
              The business model of this service is an aggregator that brings together commercial and noncommercial organizations and charges a commission for transactions. The percentage that goes to the account of the platform owner is discussed individually with each company. The platform also has a subscription system. It allows nonprofits to post more than one project for which they collect donations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <section class="issues">
      <div class="container container--small">
        <div class="issues__images issues__row">
          <div class="issues__col">
            <div class="issues__img">
              <img src="@/static/images/bikes/bike-2.png" alt="">
            </div>
          </div>
          <div class="issues__col">
            <div class="issues__img">
              <img src="@/static/images/bikes/bike-3.png" alt="">
            </div>
          </div>
        </div>
        <div class="issues__row">
          <div class="issues__col--text issues__col">
            <div class="issues__text">
              <h2 class="intro-title intro-title--small">
                Technical issues
              </h2>
            </div>
          </div>
          <div class="issues__col--text issues__col">
            <div class="issues__text">
              <p>
                Commercial companies can conduct all cash transactions online. To implement this technical solution we integrated the platform with MangoPay payment system.
              </p>
              <p>
               MangoPay is a comprehensive payment system for markets, crowdfunding platforms and fintechs in Europe. It is licensed in all EU countries and guarantees data privacy. MangoPay uses data processing standards PSD 2, GDP and PCI DSS.
              </p>
              <p>
               We spent 150 hours on the implementation of this payment system. During integration we consulted with MangoPay development team. They helped us to implement the system and eliminate small bugs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="slider">
      <div class="container container--small">
        <div class="slider__slider">
          <div class="slider__slider-inner">
            <div v-for="(img, idx) in sliderItems" :key="idx" class="slider__slider-col">
              <div class="slider__slider-img" @click.prevent="indexSliderImage = idx">
                <div class="loup">
                  <img src="@/static/images/loupe.svg" alt="loup">
                </div>
               <img class="slider-img" :src="img" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-block">
      <div class="container container--small">
        <div class="img-block__img">
          <img src="@/static/images/bikes/bike-4.png" alt="">
        </div>
        <div class="img-block__img">
          <img src="@/static/images/bikes/bike-5.png" alt="">
        </div>
      </div>
    </div>
    <section class="results">
      <div class="container container--small">
        <div class="results__row">
          <div class="results__col">
            <h2 class="intro-title intro-title--small">
              Results
            </h2>
          </div>
          <div class="results__col">
            <ul class="results__list">
              <li class="results__list-item">
                We have developed a large-scale platform for charitable donations for nonprofit projects
              </li>
              <li class="results__list-item">
                We integrated the European payment system
              </li>
              <li class="results__list-item">
                Added a second solvent system
              </li>
              <li class="results__list-item">
                 We optimize the site and improve its functionality on an ongoing basis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="team">
      <div class="container container--small">
        <h2 class="intro-title intro-title--small">
          Team
        </h2>
        <div class="team__inner">
          <div v-for="(teamItem, idx) in team" :key="idx" class="team__col">
            <div class="team__item">
              <img :src="require(`@/static/images/team/${teamItem.src}.png`)" alt="">
              <div class="team__item-content">
                <h5 class="team__item-name">{{teamItem.name}}</h5>
                <div class="team__item-pos">{{teamItem.pos}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="review">
      <div class="container container--small">
        <div class="review__row">
          <div class="review__col">
            <h2 class="intro-title intro-title--small">
              Review
            </h2>
          </div>
          <div class="review__col">
            <div class="review__item">
              <div class="review__item-text">
                <p>
                  The Qtim team implemented our brandbank platform within the deadline, taking into account all the limitations that were prescribed. Many things were revised on the recommendation of the guys and made on the basis of their experience in similar projects. We continue to develop our project in the same spirit.
                </p>
              </div>
              <div class="review__item-person">
                <img src="@/static/images/comments/person-2.png" alt="" class="review__item-avatar">
                <div class="review__item-content">
                  <div class="review__item-name">Veronica Serebryakova</div>
                  <div class="review__item-pos">Managing manager of Invitro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="others">
      <div class="container container--small">
        <h2 class="intro-title intro-title--small intro-title--light">
          Other projects
        </h2>
        <div class="others__projects">
          <div v-for="(project,idx) in projects" :key="idx" class="others__projects-col">
            <AppProject :is-static-images="true" class-type="project--light" :item="project" />
          </div>
        </div>
        <div class="others__footer">
          <nuxt-link to="/projects" class="btn btn--main btn--more">
            <span>All projects</span>
          </nuxt-link>
        </div>
      </div>
    </section>
    <AppWork :modal-form="modalForm" @modal-open="modalForm = true" />
    <AppModalForm :is-modal="modalForm" @close-modal="modalForm = false" />
    <CoolLightBox
      :items="sliderItems"
      :index="indexSliderImage"
      :use-zoom-bar="true"
      @close="indexSliderImage = null">
    </CoolLightBox>

  </div>
</template>

<script>
import AppProject from '@/components/AppProject'
import AppWork from '@/components/blocks/AppWork'
import AppModalForm from '@/components/AppModalForm'
  export default {
    components: {
      AppProject,
      AppWork,
      AppModalForm
    },
     async asyncData({$services, params}) {
      try {
        const resAll = await Promise.all([$services.getPorjectBySlug('ru', params.id), $services.getLocalizationText('ru')])
        const project = resAll[0]
        console.log(project)
        return {
          project
        }
      }
      catch(e) {
        console.log(e)
      }
    },
    data() {
      return {
        modalForm: false,
        introItems: [
          {value: '2019', text: 'year'},
          {value: '1782', text: 'watch'},
          {value: '8', text: 'months'},
          {text: 'Find out the price'},
        ],
        projects: [
          {title: 'Spotify – Music service', id: 1, src: require('@/static/images/projects/project-1.png')},
          {title: 'SkyGo – Unique travels', id: 2, src: require('@/static/images/projects/project-2.png')},
        ],
         introSkills: [
          {src: 'skill-1', text: 'ReactjS'},
          {src: 'skill-2', text: 'PrimicCMS'},
          {src: 'skill-3', text: 'Figma'},
          {src: 'skill-4', text: 'GatsbyjS'},
        ],
        team: [
          {src: 'team-1', name: 'Fokin Anton', pos: 'CEO'},
          {src: 'team-5', name: 'Trushin Artyom', pos: 'COO'},
          {src: 'team-4', name: 'Vishnevskaya Anastasiya', pos: 'Head of project management'},
          {src: 'team-7', name: 'Bystrova Kseniya', pos: 'Head of project management'},
          {src: 'team-2', name: 'Bystrov Nikita', pos: 'Head of mobile development'},
          {src: 'team-6', name: 'Surtaev Nikita', pos: 'CTO'},
        ],
        sliderItems: [
          require('@/static/images/bikes/slide-1.png'),
          require('@/static/images/bikes/slide-2.png'),
          require('@/static/images/bikes/slide-3.png')
        ],
        indexSliderImage: null
      }
    },
    created() {
      console.log(this.$route)
    }
  }
</script>

<style lang="scss" scoped>
.intro {
  background: #fff;
  padding: 160px 0 40px;
  overflow: hidden;
  @media screen and (max-width: 768px){
    padding: 64px 0 40px;
  };
  &__text {
    display: flex;
    flex-wrap: wrap;
    .intro-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      a {
        font-size: 20px;
        line-height: 100%;
        color: #7941A7;
        margin-top: 20px;
        display: inline-block;

      }
      padding-right: 100px;
      width: 58%;
      @media screen and (max-width: 991px){
        width: 100%;
        padding-right: 0;
      };
    }
  }
  &__descr {
    font-size: 36px;
    line-height: 124%;
    color: #101010;
    width: 42%;
    align-self: flex-end;
    @media screen and (max-width: 991px){
      width: 100%;
      margin-top: 62px;
    };
    @media screen and (max-width: 600px){
      font-size: 24px;
      line-height: 120%;
    };
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 110px -49.5px 0;
    @media screen and (max-width: 1300px){
      margin: 110px -10px 0;
    };
    @media screen and (max-width: 768px){
      margin: 45px -10px 0;
    };
    &-col {
      padding: 0 49.5px 20px;
      width: calc(100% / 4);
      position: relative;
      @media screen and (max-width: 1300px){
        padding: 0 10px 20px;
      };
      @media screen and (max-width: 991px){
        width: calc(100% / 3);
      };
      @media screen and (max-width: 768px){
        width: calc(100% / 2);
      };
      &::after {
        position: absolute;
        content: "";
        height: 68px;
        width: 1px;
        background: #000000;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        @media screen and (max-width: 1300px){
          content: none;
        };
      }
      &:last-child {
        &::after {
          content: none;
        }
      }

    }
    .ball-item {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #101010;
      border: 1px solid #000000;
      position: relative;
      @media screen and (max-width: 768px){
        margin: 0 auto;
      };
      @media screen and (max-width: 600px){
        width: 158px;
        height: 158px;
      };
      &.active {
        background: #000;
        color: #fff;
      }
      &__value {
        font-size: 48px;
        line-height: 100%;
        @media screen and (max-width: 600px){
          font-size: 36px;
          line-height: 124%;
        };
      }
      &__text {
        font-size: 20px;
        line-height: 124%;
        @media screen and (max-width: 600px){
          font-size: 16px;
          line-height: 120%;
        };

      }
    }
  }
  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px -24px 0;
    @media screen and (max-width: 600px){
      margin: 32px -19px 0;
    };
    &__item {
      font-size: 20px;
      line-height: 124%;
      color: #101010;
      text-align: center;
      margin: 0 24px;
      @media screen and (max-width: 600px){
        font-size: 16px;
        line-height: 120%;
        margin: 0 19px;
      };
      &-img {
        margin-bottom: 17px;
        display: flex;
        justify-content: center;
        img {
          margin: 0 auto;
          height: auto;
        }
      }
      &:nth-child(1),&:last-child {
        img {
          width: 40px;
        }
      }
      &:nth-child(2) {
        img {
          width: 37.42px;
        }
      }
      &:nth-child(3) {
        img {
          width: 25.83px;
        }
      }
    }
  }
}
.business {
  padding: 40px 0 80px;
  &__img {
    position: relative;
    padding-bottom: calc(700px / 1216px * 100%);
    margin-bottom: 80px;
    @media screen and (max-width: 600px){
      margin-bottom: 48px;
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
  &__text {
    color: #101010;
    max-width: 695px;
    width: 100%;

    small {
      font-size: 16px;
      line-height: 100%;
      margin-bottom: 32px;
      display: block;
      @media screen and (max-width: 600px){
        margin-bottom: 24px;
      };
    }
    div {
      font-size: 36px;
      line-height: 124%;
      p {
        & + p {
          margin-top: 15px;
        }
      }
      @media screen and (max-width: 600px){
        font-size: 24px;
        line-height: 120%;
      };
    }
  }
}
.issues {
  color: #101010;
  padding: 40px 0 80px;
  @media screen and (max-width: 600px){
    padding: 40px 0;
  };
  .intro-title {
    @media screen and (max-width: 768px){
      margin-bottom: 24px;
    };
    @media screen and (max-width: 600px){
      font-size: 36px;
    };
  }
  &__row {
    display: flex;
    margin: 0 -16px;
    flex-wrap: wrap;
    @media screen and (max-width: 600px){
      margin: 0 -10px;
    };
  }
  &__images {
    margin-bottom: 80px;
    @media screen and (max-width: 600px){
      margin-bottom: 40px;
    };
  }
  &__img {
    position: relative;
    padding-bottom: calc(592px / 592px * 100%);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      object-fit: cover;

    }
  }
  &__col {
    width: 50%;
    padding: 0 16px;
    @media screen and (max-width: 600px){
      padding: 0 10px;
    };
    &--text {
      @media screen and (max-width: 768px){
        width: 100%;
      };
    }
  }
  &__text {
    font-size: 36px;
    line-height: 124%;
    @media screen and (max-width: 600px){
      font-size: 24px;
      line-height: 120%;
    };
    p + p {
      margin-top: 25px;
    }
  }
}
.slider {
  padding: 80px 0;
  overflow: hidden;
  @media screen and (max-width: 600px){
    padding: 40px 0;
  };
  &__slider {
    @media screen and (max-width: 600px){
      margin: 0 -20px;
    };
    &-inner {
      margin: 0 -16px;
      display: flex;
      overflow-x: auto;
      @media screen and (max-width: 600px){
        margin: 0 -6px;
        padding: 0 20px;
      };
    }
    &-img {
      position: relative;
      cursor: pointer;
      padding-bottom: calc(286px / 384px * 100%);
      @media (any-hover: hover){
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
          transition: all .2s linear;
          z-index: 1;
          opacity: 0;
        }
        &:hover {
          .loup {
            opacity: 1;
          }
          &::before {
            opacity: 1;
          }
        }
      };
      @media screen and (max-width: 768px){
        padding-bottom: 250px;
      };
      .slider-img {
        display: block;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .loup {
        position: absolute;
        width: 62.29px;
        height: 62.29px;
        background: #E2BEFF;
        border-radius: 50%;
        z-index: 2;
        display: flex;
        left: 12px;
        top: 12px;
        opacity: 0;
        transition: all .2s linear;
        img {
          margin: auto;
        }
      }
    }
    &-col {
      width: calc(100% / 3);
      padding: 0 16px;
      @media screen and (max-width: 768px){
        flex-shrink: 0;
        width: 335px;
      };
      @media screen and (max-width: 600px){
        padding: 0 6px;
      };
    }
  }
}
.img-block {
  padding: 80px 0;
  @media screen and (max-width: 600px){
    padding: 40px 0;
  };
  &__img {
    position: relative;
    & + .img-block__img {
      margin-top: 32px;
    }
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    &:first-child {
      padding-bottom: calc(1400px / 1216px * 100%);
    }
    &:last-child {
      padding-bottom: calc(680px / 1216px * 100%);
    }
  }
}
.results {
  padding: 80px 0;
  @media screen and (max-width: 600px){
    padding-top: 0;
    padding-bottom: 40px;
  };
  &__row {
    display: flex;
    flex-wrap: wrap;
  }
  &__col {
    width: 50%;
    @media screen and (max-width: 768px){
      width: 100%;
    };
    .intro-title {
      @media screen and (max-width: 768px){
        margin-bottom: 24px;
      };
    }
  }
  &__list {
    &-item {
      font-size: 36px;
      line-height: 124%;
      color: #101010;
      @media screen and (max-width: 600px){
        font-size: 24px;
        line-height: 120%;
      };
      &:not(:last-child) {
        border-bottom: 1px solid #000;
        margin-bottom: 32px;
        padding-bottom: 32px;
        @media screen and (max-width: 600px){
          padding-bottom: 24px;
          margin-bottom: 24px;
        };

      }
    }
  }
}
.team {
  padding: 80px 0;
  @media screen and (max-width: 600px){
    padding: 40px 0;
  };
  .intro-title {
    text-align: center;
    margin-bottom: 48px;
    @media screen and (max-width: 600px){
      margin-bottom: 40px;
    };
  }
  &__inner {
    display: flex;
    margin: 0 -32.5px;
    flex-wrap: wrap;
    justify-content: space-between;
     @media screen and (max-width: 1350px){
      margin: 0 -20px;
    };
  }
  &__col {
    padding: 0 32.5px 24px;
    // width: calc(100% / 6);
    @media screen and (max-width: 1350px){
      padding: 0 20px 24px;
    };
    @media screen and (max-width: 768px){
      width: calc(100% / 3);
    };
    @media screen and (max-width: 575px){
      width: 50%;
    };
  }
  &__item {
    text-align: center;
    color: #101010;
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      margin: 0 auto 16px;
      overflow: hidden;
    }
    &-content {
      max-width: 148px;
      margin: 0 auto;
      width: 100%;
    }
    &-name {
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 5px;
    }
    &-pos {
      color: #868686;
      font-size: 14px;
      line-height: 120%;
    }
  }
}
.review {
  padding: 140px 0;
  background: #F3F3F3;
  color: #101010;
  @media screen and (max-width: 600px){
    padding: 80px 0;
  };
  &__row {
    display: flex;
    flex-wrap: wrap;
  }
  &__col {
    width: 50%;
    @media screen and (max-width: 991px){
      width: 100%;
      &:first-child {
        margin-bottom: 40px;
      }
    };
  }
  &__item {
    &-text {
      font-size: 36px;
      line-height: 124%;
      @media screen and (max-width: 600px){
        font-size: 24px;
        line-height: 120%;
      };
    }
    &-person {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }
    &-avatar {
      width: 56px;
      height: 56px;
      object-fit: cover;
      border-radius: 50%;
      display: block;
      overflow: hidden;
      margin-right: 20px;
      flex-shrink: 0;
    }
    &-content {
      font-size: 16px;
      line-height: 100%;
    }

    &-pos {
      opacity: .4;
      margin-top: 4px;
    }
  }
}
.others {
  background: #101010;
  padding: 140px 0;
  @media screen and (max-width: 600px){
    padding: 80px 0;
  };
  .intro-title {
    margin-bottom: 60px;
    @media screen and (max-width: 600px){
      margin-bottom: 50px;
    };
  }
  &__projects {
    flex-wrap: wrap;
    display: flex;
    margin: 0 -50px;
    @media screen and (max-width: 1370px){
      margin: 0 -20px;
    };
    @media screen and (max-width: 600px){
      margin: 0;
    };
    &-col {
      width: 50%;
      padding: 0 50px;
      @media screen and (max-width: 1370px){
        padding: 0 20px;
      };
      @media screen and (max-width: 600px){
        padding: 0;
        width: 100%;
        &:not(:last-child) {
          padding-bottom: 40px;
        }
      };
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    a {
      color: #101010;
      &:hover {
        color: #101010;
      }
    }
  }
}
</style>