<template>
  <section ref="work" class="work">
    <div class="container container--small">
      <div class="work__caption">
        Is there a project?
      </div>
      <div class="work__body">
        <div class="work__body-col">
          <nuxt-link to="#" class="work__title">
            <h2 >
              Let’s work together
            </h2>
          </nuxt-link>
        </div>
        <div class="work__body-col">
          <address class="work__address">
            <div class="work__address-block">
              <span class="caption">For all questions</span>
              <a href="tel:+79202780068">+7 (920) 278—00—68</a>
              <a href="mailto:qtim@agency.com">qtim@agency.com</a>
            </div>
            <div class="work__address-block">
              <span class="caption">Office in Russia</span>
              <div>
                139 Ruben Station Lake Drew, NM 52678
              </div>
              <nuxt-link to="#" class="btn btn--location">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </nuxt-link>
            </div>
            <div class="work__address-block">
              <span class="caption">Office in Dubai</span>
              <div>
                139 Ruben Station Lake Drew, NM 52678
              </div>
              <nuxt-link to="#" class="btn btn--location">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </nuxt-link>
          </div>
          </address>
        </div>
      </div>
      <footer class="work__footer">
        <div class="work__footer-col">
          <a href="#" class="hover">Facebook</a>
          <a href="#" class="hover">Instagram</a>
          <a href="#" class="hover">Telegram</a>
        </div>
        <button ref="btnGo" class="btn btn--go" @click="openModalForm($event)">
         <span>Go</span>
        </button >
         <div class="work__footer-col">
          <a href="#" class="hover">Behance</a>
          <a href="#" class="hover">Linkedn</a>
          <a href="#" class="hover mobile--pos">Privacy Policy</a>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      modalForm: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      modalForm(val) {
        if (!val) this.$refs.work.style.background = '#E2BEFF'
      }
    },
    beforeDestroy() {
      this.$refs.btnGo.classList.remove('started')
    },
    methods: {
      openModalForm(e) {
        if (!e.target.classList.contains('started')) {
          this.$refs.work.classList.add('started')
          document.body.classList.add('no-scroll')
          // e.target.classList.add('started')
          e.target.addEventListener('animationend', () => {
            this.$refs.work.style.background = '#101010'
            this.$refs.work.classList.remove('started')
            // this.$router.push('/form')
            setTimeout(() => {
            }, 500)
            this.$emit('modal-open')
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.work {
  overflow: hidden;
  background-color: #E2BEFF;
  padding: 140px 0 30px;
  @media screen and (max-width: 600px){
    padding: 50px 0 14px;
  };
  &__caption {
    margin-bottom: 56px;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #101010;
    @media screen and (max-width: 600px){
      margin-bottom: 24px;
    };
  }
  &__title {
    color: #101010;
    transition: all .2s linear;
    max-width: 464px;
    display: block;
    h2 {
      background-image: linear-gradient(to right, #101010 0%, #101010 100%);
      background-repeat: repeat-x;
      background-position: 0 100%;
      background-size: 100% 3px;
      font-size: 112px;
      line-height: 100%;
      font-weight: 400;
      display: inline;
      @media screen and (max-width: 600px){
        font-size: 80px;
        line-height: 100%;
      };
    }
    &:hover {
      color: #7941A7;
      h2 {
        background-image: linear-gradient(to right, #7941A7 0%, #7941A7 100%);
      }
    }
  }
  &__body {
    display: flex;
    flex-wrap: wrap;
    &-col {
      &:first-child {
        width: 69%;
        @media screen and (max-width: 768px){
          width: 100%;
        };
      }
      &:last-child {
        width: 31%;
        flex-grow: 1;
        @media screen and (max-width: 768px){
          width: 100%;
          margin-top: 48px;
        };
      }
    }
  }
  &__address {
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 152px;
    @media screen and (max-width: 600px){
      flex-wrap: wrap;
      flex-direction: row;
      max-width: 100%;
      margin: 0 -13.5px;
    };
    .caption {
      display: block;
      margin-bottom: 12px;
    }
    a {
      display: block;
      color: #101010;
    }
    .btn--location {
      background: #101010;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      margin-top: 8px;
      transition: all ease .3s;
      &:hover {
        transform: scale(1.25);
      }
      svg {
        margin: auto;
      }
    }
    &-block {
      @media screen and (max-width: 600px){
        padding: 0 13.5px;
        &:first-child {
          width: 100%
        }
        &:nth-child(2), &:nth-child(3) {
          width: 50%;
        }
      };
      &:not(:last-child) {
        margin-bottom: 36px;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 273px;
    position: relative;
    @media screen and (max-width: 935px){
      justify-content: center;
    };
    &-col {
      position: relative;
      z-index: 6;
      margin: 0 -16px;
      display: flex;
      @media screen and (max-width: 600px){
        margin: 0 -9.5px;
        &:last-child {
          padding-left: 20px
        }
      };
    }
    a {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.01em;
      color: #101010;
      margin: 0 16px;
      @media screen and (max-width: 935px){
        color: #868686;
      };
      @media screen and (max-width: 600px){
        font-size: 14px;
        margin: 0 9.5px;
      };
      &.mobile--pos {
        @media screen and (max-width: 600px){
          position: absolute;
          top: -194px;
          left: -72px;
          color: #000;
        };
      }
    }
    .btn--go {
      width: 358px;
      height: 358px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background: #101010;
      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      color: #fff;
      bottom: -210px;
      z-index: 5;
      transition: all .3s ease;
      @media screen and (max-width: 935px){
        width: 375px;
        height: 375px;
        bottom: -198px;
      };
      &:hover {
        @media (any-hover: hover){
          transform:translateX(-50%) scale(1.285);
        };
      }
      span {
        position: absolute;
        top: 122px;
        transition: opacity .2s ease;
        pointer-events: none;
        @media screen and (max-width: 935px){
          top: 100px;
        };
      }

    }
  }
  &.started {
    .btn--go {
      // transition: all 1s ease;
      // transform: translateX(-50%) scale(8.285);
      animation: goToPage 1s ease;
      @keyframes goToPage {
        to {
          transform: scale(30);
        }
      }
      span {
        opacity: 0;
      }

    }
    .work__footer-col {
      opacity: 0;
    }
  }
}
</style>