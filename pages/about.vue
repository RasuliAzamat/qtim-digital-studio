<template>
  <div>
    <section class="intro">
      <div class="container container--small">
        <div class="intro__row">
          <div class="intro__col">
            <h1 class="intro-title">We develop digital products of whatever complexity </h1>
          </div>
          <div class="intro__col">
            <div class="intro__value">
              <div class="number">249</div>
              <div class="intro__text">
                Projects
              </div>
            </div>
          </div>
          <div class="intro__col">
            <div
              class="intro__video video-preview"
              @click.prevent="modalVideo = true"
            >
              <div class="video-preview__video">
                <video
                  src="@/static/videos/showreel-1.mp4"
                  autoplay
                  muted
                  loop
                ></video>
                <button>
                  Play
                </button>
              </div>
              <div class="video-preview__text">
                company video
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section ref="whatDo" class="what-do">
      <div class="container container--small">
        <h2 class="intro-title intro-title--small">What we do</h2>
      </div>
      <ul class="what-do__items list-items">
        <li v-for="(item,idx) in whatDoItems" :key="idx" class="list-items__item" :class="{active: isObserver}">
          <nuxt-link to="#" class="list-items__item-wrap">
            <div class="list-items__item-col">
              <h4 class="list-items__item-title">
                {{item.title}}
              </h4>
            </div>
            <div class="list-items__item-col">
              <div class="list-items__item-text">
                {{item.text}}
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="technologies">
      <div class="container container--small">
        <h2 class="intro-title intro-title--small">
          Technologies we use
        </h2>
        <ul class="technologies__items list-tech">
          <li v-for="(item, idx) in techItems" :key="idx" class="list-tech__item">
            <div class="list-tech__item-img">
              <img :src="require(`@/static/images/tech/${item.src}.svg`)" alt="">
            </div>
            <div class="list-tech__item-title">
              {{item.title}}
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="team">
      <div class="container container--small">
        <div class="team__row">
          <div class="team__col">
            <div v-if="chosenTeamItem" class="team__text">
              <div class="team__descr">
                <p>
                  {{chosenTeamItem.text}}
                </p>
              </div>
              <div class="team__author">
                {{chosenTeamItem.name}}
              </div>
            </div>
          </div>
          <div class="team__col">
            <div class="team__team">
              <div v-for="(item, idx) in team" :key="idx" class="team__team-col" :class="{active: chosenTeamItem.id === item.id}" @click.prevent="chosenTeamItem = item">
                <img :src="require(`@/static/images/team/${item.src}.png`)" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jobs">
      <div class="container container--small">
        <h2 class="intro-title intro-title--small">
          Jobs
        </h2>
      </div>
      <ul class="jobs__items list-jobs">
        <li v-for="(item,idx) in jobsItems" :key="idx" class="list-jobs__item">
          <nuxt-link to="#" class="list-jobs__item-link">
            <div class="list-jobs__item-col">
              <h4 class="list-jobs__item-title">
                {{item.name}}
              </h4>
              <div class="list-jobs__item-descr">
                {{item.decsr}}
              </div>
            </div>
            <div class="list-jobs__item-col">
              <div class="list-jobs__item-actions">
                <nuxt-link v-for="(link, idxAct) in item.actions" :key="idxAct" :to="link.src">
                  {{link.title}}
                </nuxt-link>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <AppModalVimeo
      :is-modal="modalVideo"
      @modal-close="modalVideo = false"
    />
  </div>
</template>

<script>
import AppModalVimeo from '@/components/AppModalVimeo'
export default {
  components: {
    AppModalVimeo,
  },
  data() {
    return {
      num: 245,
      modalVideo: false,
      chosenTeamItem: {src: 'team-1',name: 'Anton Fokin —  CEO', text: `We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`, id: 1},
      whatDoItems: [
        {title: 'Website', text: `Comprehensive design and redesign, audit, usability analysis`},
        {title: 'Applications', text: `Creation of websites and web applications of any complexity. Development of ready-made solutions, taking into account the specifics of business.`},
        {title: 'Mobile development', text: `We use modern cross-platform languages React Native and Flutter. This allows you to reduce the time and budget.`},
        {title: 'CRM systems', text: `Comprehensive design and redesign, audit, usability analysis`}
      ],
      techItems: [
        {src: 'html', title: 'HTML 5'},
        {src: 'css', title: 'CSS 3'},
        {src: 'js', title: 'Java Script'},
        {src: 'gsap', title: 'GSAP'},
        {src: 'pug', title: 'PUG'},
        {src: 'less', title: 'LESS'},
        {src: 'html', title: 'HTML 5'},
        {src: 'css', title: 'CSS 3'},
        {src: 'js', title: 'Java Script'},
        {src: 'gsap', title: 'GSAP'},
        {src: 'pug', title: 'PUG'},
        {src: 'less', title: 'LESS'}
      ],
      jobsItems: [
        {name: 'Middle Full Stack Developer', descr: 'Prashant is a full-stack developer with a broad and versatile coding skill set',
        actions: [{title: '1 vacancy', src: '#'}, {title: 'Remotely', src: '#'}]
        },
        {name: 'Frontend Developer', descr: 'Prashant is a full-stack developer with a broad and versatile coding skill set',
        actions: [{title: 'Learn more', src: '#'}]
        },
        {name: 'Web designer', descr: 'Prashant is a full-stack developer with a broad and versatile coding skill set',
        actions: [{title: '1 vacancy', src: '#'}, {title: 'Remotely', src: '#'}]
        }
      ],
      team: [
        {src: 'team-1',name: 'Anton Fokin —  CEO', text: `We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`,id: 1},
        {src: 'team-7',name: 'Bystrova Kseniya —  Head of project management', text: `2 We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`,id: 2},
        {src: 'team-3',name: 'Trushin Artyom —  COO', text: `3 We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`,id: 3},
        {src: 'team-2',name: 'Bystrov Nikita —  Head of mobile development', text: `4 We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`,id: 4},
        {src: 'team-5',name: "Lebedev Il'ya —  Head of backend development", text: `5 We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`,id: 5},
        {src: 'team-6',name: "Fokin Anton — CEO", text: `6 We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`,id: 6},
        {src: 'team-4',name: "Vishnevskaya Anastasiya —  Head of project management", text: `7 We have been doing web development for 8 years. We have assembled a strong team. Today the team consists of 39 people with at least 2 years of experience.`,id: 7},
      ],
      isObserver: false
    }
  },
  mounted() {
    const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения - половина изображения
        threshold: 0.8
    }
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
              this.isObserver = true
            }
        })
    }, options)
    observer.observe(this.$refs.whatDo)

  }
}
</script>

<style lang="scss" scoped>
.intro {
  padding: 119px 0 80px;
  color: #101010;
  @media screen and (max-width: 600px) {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
  }
  .intro-title {
    max-width: 800px;
    width: 100%;
  }
  &__col {
    &:first-child {
      // width: 60%;
      width: 79%;
      padding-right: 30px;
      @media screen and (max-width: 768px){
        order: 1;
        width: 100%;
      };
    }
    &:nth-child(2) {
      // width: 70%;
      width: 21%;
      // width: 100%;
      @media screen and (max-width: 768px){
        order: 3;
        display: flex;
        justify-content: center;
        width: 100%;
      };
    }
    &:last-child {
      width: 100%;
      @media screen and (max-width: 768px){
        order: 2;
      };
    }
  }
  &__value {
    @media screen and (max-width: 768px){
      display: flex;
      margin-top: 50px;
    };
    .number {
      font-size: 120px;
      line-height: 100%;
      @media screen and (max-width: 768px){
        margin-right: 17px;
      };
      @media screen and (max-width: 600px){
        font-size: 84px;
        line-height: 84%;
      };
    }
  }
  &__text {
    font-size: 20px;
    color: #000000;
    line-height: 100%;
  }
  .video-preview {
    margin-top: 55px;
    @media screen and (max-width: 600px) {
      margin-top: 40px;
    }
    &__video {
      position: relative;
      padding-bottom: calc(658px / 1216px * 100%);
      @media screen and (max-width: 600px){
        padding-bottom: 72%;
      };
      cursor: pointer;
      &:hover {
        button {
          transform: scale(1.12) translate(-50%, -50%);
        }
      }
      button {
        position: absolute;
        transition: all 0.3s ease;
        top: 50%;
        left: 50%;
        width: 124px;
        height: 124px;
        border-radius: 50%;
        display: flex;
        font-size: 24px;
        line-height: 94%;
        background: #e2beff;
        transform: translate(-50%, -50%);
        color: #000000;
        z-index: 2;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 768px) {
          width: 98px;
          height: 98px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        );
        z-index: 1;
      }
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__text {
      font-weight: 400;
      font-size: 14px;
      color: #868686;
      margin-top: 12px;
      @media screen and (max-width: 768px){
        display: none;
      };
    }
  }
}
.what-do {
  padding: 80px 0;
  @media screen and (max-width: 600px){
    padding: 60px 0 0;
  };
  .list-items {
    margin-top: 60px;
    @media screen and (max-width: 600px){
      margin-top: 30px;
    };
    &__item {
      position: relative;
      // border-bottom: 1px solid #101010;
      padding: 0 calc((100% - 1256px) / 2);
      transition: all .2s linear;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        max-width: 1216px;
        width: 100%;
        height: .7px;
        background: #101010;
        z-index: 1;
        transition: all .2s linear;
      }
      @media (any-hover: hover){
        &:hover {
          background: #9EFFBF;
          &::before {
            opacity: 0;
          }
        }
      };
      &.active {
        .list-items__item-wrap {
          opacity: 1;
          height: 160px;
          @media screen and (max-width: 768px){
            height: 253px;
          };
        }
      }
      &-wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        opacity: 0;
        padding: 15px 20px;
        height: 60px;
        transition: all 1s ease;
        color: #101010;
        @media screen and (max-width: 768px){
          flex-direction: column;
          justify-content: center;
          padding: 49px 20px;
        };
      }
      &-col {
        &:first-child {
          width: 50%;
          @media screen and (max-width: 768px){
            width: 100%;
          };
        }
        &:last-child {
          width: 50%;
          @media screen and (max-width: 768px){
            width: 100%;
          };
        }
      }
      &-title {
        font-size: 36px;
        padding-right: 20px;
        line-height: 124%;
        @media screen and (max-width: 768px){
          padding-bottom: 12px;
        };
      }
      &-text {
        font-size: 20px;
        line-height: 120%;
      }
    }
  }
}
.technologies {
  padding: 80px 0;
  @media screen and (max-width: 600px){
    padding: 50px 0 40px;
  };
  .intro-title {
    margin-bottom: 60px;
    @media screen and (max-width: 600px){
      margin-bottom: 40px;
    };

  }
  .list-tech {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(183px, 1fr));
    gap: 12px;
    @media screen and (max-width: 600px){
      grid-template-columns: repeat(2, 1fr);
    };
    &__item {
      background: #F3F3F3;
      height: 192px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding: 17px 0;
      @media screen and (max-width: 600px){
        height: 158px;
      }
      &-title {
        font-size: 16px;
        line-height: 124%;
        color: #101010;
      }
      &-img {
        width: 48px;
        display: flex;
        align-items: flex-end;
        margin-bottom: 35px;
        img {
          width: 100%;
          display: block;
          height: auto;
        }
      }
    }
  }
}
.team {
  padding: 100px 0 160px;
  @media screen and (max-width: 600px){
    padding: 40px 0;
  };
  &__row {
    display: flex;
    color: #101010;
  }
  &__col {
    &:first-child {
      width: 70%;
    }
    &:last-child {
      width: 30%;
    }
  }
  &__descr {
    font-size: 64px;
    line-height: 100%;
    text-indent: 100px;

  }
  &__text {
    max-width: 696px;
    width: 100%;
    &.active {
      animation: fadeText .3s ease;
    }
  }
  @keyframes fadeText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &__author {
    font-size: 16px;
    line-height: 100%;
    margin-top: 24px;
  }
  &__team {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    &-col {
      // width: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      &.active {
        &::before {
          opacity: 1;
        }
      }
      &:hover {
        &::before {
          opacity: 1;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      &:not(:last-child) {
        margin-right: 32px;
        margin-bottom: 32px;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        transition: all .2s linear;
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        z-index: 1;
      }
    }
  }
}
.jobs {
  .list-jobs {
    &__item {
      padding: 0 calc((100% - 1256px) / 2);
      transition: all .2s linear;
      &-link {
        display: flex;
        padding: 15px 20px;
      }
    }
  }
}
</style>