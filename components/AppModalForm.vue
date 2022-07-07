<template>
  <!-- <transition name="fade"> -->
    <div
      v-if="isModal"
      class="modal-overlay"
    >
    <button class="modal-close" @click="modalClose">
      <img src="@/static/images/close.svg" alt="" />
    </button>
      <div v-if="currentContent === 'modal' && !loading" class="modal">
        <form class="form" action="" @submit.prevent="onSubmitForm">
          <h2 class="form__title">
            Describe the task
          </h2>
          <div class="form__choice">
            <div class="form__choice-caption">
              Choose a direction
            </div>
            <div class="form__choice-row">
              <div class="form__choice-inner">
                <div class="form__choice-col">
                  <div class="form-group">
                    <input id="web" v-model="choiceInput" name="choice" value="1" type="radio">
                    <label for="web">
                      Websites
                      <button @click.prevent="choiceInput = ''">
                        <img src="@/static/images/close.svg" alt="">
                      </button>
                    </label>
                  </div>
                </div>
                <div class="form__choice-col">
                  <div class="form-group">
                    <input id="mobile" v-model="choiceInput" name="choice" value="2" type="radio">
                    <label for="mobile">
                      Mobile development
                      <button @click.prevent="choiceInput = ''">
                        <img src="@/static/images/close.svg" alt="">
                      </button>
                    </label>
                  </div>
                </div>
                <div class="form__choice-col">
                  <div class="form-group">
                    <input id="appl" v-model="choiceInput" name="choice" value="3" type="radio">
                    <label for="appl">
                      Applications
                      <button @click.prevent="choiceInput = ''">
                        <img src="@/static/images/close.svg" alt="">
                      </button>
                    </label>
                  </div>
                </div>
                <div class="form__choice-col">
                  <div class="form-group">
                    <input id="crm" v-model="choiceInput" name="choice" value="4" type="radio">
                    <label for="crm">
                      CRM systems
                      <button @click.prevent="choiceInput = ''">
                        <img src="@/static/images/close.svg" alt="">
                      </button>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-controls">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your name">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your email">
            </div>
            <div class="form-group">
              <textarea id="" name="" cols="30" rows="10" class="form-control form-control--area" placeholder="Tell us about your ptoject">
              </textarea>
            </div>
            <div class="form-files">
              <div class="form-group form-group--file">
                <input id="file" type="file" class="form-control form-control--file" @change="getFile($event)">
                <label for="file">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.57129 8.35673V2.64244C3.57129 2.26356 3.7218 1.9002 3.98971 1.63229C4.25762 1.36438 4.62098 1.21387 4.99986 1.21387H12.1427L19.2856 8.35673V18.3567C19.2856 18.7356 19.1351 19.099 18.8672 19.3669C18.5992 19.6348 18.2359 19.7853 17.857 19.7853H10.7141" stroke="#868686" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.1431 1.21387V8.35672H19.2859" stroke="#868686" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 11.2139V19.7853" stroke="#868686" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0.714355 15.5H9.28578" stroke="#868686" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Add attachment
                </label>
              </div>
              <div v-if="file" class="form-files__preview">
                <div class="form-files__preview-text">
                  {{file.name}}
                </div>
                <button @click.prevent="file = null">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1L1 9"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L9 9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="form-footer">
            <button class="btn btn--submit btn--main" type="submit">
              <span>Send request</span>
            </button>
          </div>
        </form>
      </div>
      <div v-if="currentContent === 'thanks' && !loading" class="thanks">
        <div class="thanks__header">
          <h2 class="thanks__title intro-title intro-title--small intro-title--light">
            The application has been successfully sent
          </h2>
          <div class="thanks__descr">
            We'll get back to you very soon, but in the meantime, check out our Instagram
          </div>
          <a href="#" class="btn btn--main">
            <span>on Instagram</span>
          </a>
        </div>
        <div class="slider-inst">
          <client-only>
            <swiper ref="mySwiper" :options="instSliderOptions" >
              <!-- slides -->
              <swiper-slide v-for="(slide, idx) in sliderInst" :key="idx">
                <div class="slider-inst__item" :class="'slider-inst__item--' + (idx + 1)">
                  <img :key="slide.id" :src="require('@/static/images/slider-inst/' + slide.name + '.png')" alt="">
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
      <div v-if="loading" class="loading">
        <svg>
          <use href="~/static/images/sprite.svg#spin-form"></use>
        </svg>
      </div>
      <div class="modal-social">
        <a href="#" class="hover hover--light">Facebook</a>
        <a href="#" class="hover hover--light">Instagram</a>
        <a href="#" class="hover hover--light">Telegram</a>
        <a href="#" class="hover hover--light">Behance</a>
        <a href="#" class="hover hover--light">Linkedn</a>
        <a href="#" class="hover hover--light">Privacy Policy</a>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
  export default {
    props: {
      isModal: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        choiceInput: '',
        currentContent: 'modal',
        loading: false,
        file: null,
        sliderInst: [
          {name: 'photo-1'},
          {name: 'photo-2'},
          {name: 'photo-3'},
          {name: 'photo-4'},
          {name: 'photo-5'},
        ],
        instSliderOptions: {
          centeredSlides: true,
          loop: true,
          speed: 700,

          allowTouchMove: false,
          autoplay: {
            delay: 3000,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // when window width is >= 640px
            600: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            991: {
              slidesPerView: 3.45,
              spaceBetween: 32,
            }
          }
        },
      }
    },
    methods: {
      onSubmitForm() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.currentContent = 'thanks'
        }, 1000)
      },
      getFile(e) {
        this.file = e.target.files[0]
        if (this.file) {
          console.log(this.file)
        }
      },
      modalClose() {
        this.$emit('close-modal')
          document.body.classList.remove('no-scroll')
        this.currentContent = 'modal'
      }
    }
  }
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #101010;
  z-index: 1000;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 150px 25px 32px;
  @media screen and (max-width: 768px){
    padding: 70px 20px 30px;
  };
}
.modal {
  max-width: 592px;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-bottom: 32px;
}

.modal-close {
  background: #292929;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 20px;
  top: 20px;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.25);
  }
  img {
    width: 12px;
  }
}
.form {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__title {
    font-weight: 400;
    font-size: 64px;
    line-height: 100%;
    color: #F3F3F3;
    margin-bottom: 60px;
  }
  &__choice {
    margin-bottom: 38px;
    overflow-x: auto;
    @media screen and (max-width: 768px){
      margin: 0 -20px 38px;
    };
    &-inner {
      display: flex;
      overflow: auto;
      @media screen and (max-width: 768px){
        padding: 0 20px;
      };
    }
    &-col {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
    &-caption {
      font-size: 24px;
      line-height: 120%;
      color: #868686;
      margin-bottom: 24px;
      @media screen and (max-width: 768px){
        padding-left: 20px;
      };
    }
    .form-group {
      input {
        display: none;
        &:checked ~ label {
          background: #fff;
          color: #101010;
          &:hover {
            background: #fff;
          }
          img {
            display: block;
          }
        }
      }
      label {
        width: 136px;
        height: 136px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 100%;
        border: 1px solid #868686;
        text-align: center;
        color: #F3F3F3;
        padding: 25px;
        transition: all .2s linear;
        cursor: pointer;
        &:hover {
          background-color: #232323;
        }
      }
      img {
        margin-top: 11px;
        display: none;
      }
    }
  }
  &-controls {
    .form-group {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
      &--file {
        &:not(:last-child) {
         margin-bottom: 0;
        }
        label {
          font-size: 24px;
          line-height: 120%;
          color: #868686;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all .2s linear;
          &:hover {
            color: #E2BEFF;
            path {
               stroke: #E2BEFF;
            }
          }
          svg {
            position: relative;
            top: -2px;
            margin-right: 16.71px;
            // fill: red;
            path {
              transition: all .2s linear;
              stroke: #868686;
            }
          }
        }
      }
    }
  }
  &-control {
    border: 1px solid #868686;
    border-radius: 16px;
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    color: #fff;
    padding: 0 24px;
    height: 72px;
    background: transparent;
    transition: all .2s linear;
    width: 100%;

    &:hover {
      background: rgba(255, 255, 255, 0.04);
    }
    &:focus {
      border-color: #9EFFBF;
    }
    &::placeholder {
      font-size: 24px;
      line-height: 120%;
      color: #FFFFFF;
    }
    &--area {
      height: 170px;
      padding-top: 24px;
      resize: none;
    }
    &--file {
      display: none;
    }
  }
  &-footer {
    margin-top: 40px;
  }
  .btn--submit {
    width: 169px;
    background: #fff;
    height: 52px;
  }
  &-files {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
      flex-direction: column;
      align-items: flex-start;
    };
    &__preview {
      margin-left: 32px;
      border: 1px solid #E2BEFF;
      border-radius: 8px;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 100%;
      color: #E2BEFF;
      @media screen and (max-width: 768px){
        margin: 0;
        margin-top: 25px;
      };
      button {
        margin-left: 8px;
        svg {
          path {
            stroke: #E2BEFF;

          }
        }
      }
    }
  }
}

.thanks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    max-width: 585px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
  &__descr {
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: #868686;
    max-width: 500px;
    width: 100%;
    margin: 16px auto 0;
  }
  .btn--main {
    background: #fff;
    width: 167px;
    height: 52px;
    color: #101010;
    display: flex;
    margin-top: 24px;
    &:hover {
      color: #101010;
    }
  }
  .slider-inst {
    margin: 127px -25px 0;
    @media screen and (max-width: 768px){
      margin: 50px -20px 0;
    };
    &__item {
      position: relative;
      overflow: hidden;
      padding-bottom: calc(384px / 384px * 100%);
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .swiper-container {

  }
}
.modal-social {
  max-width: 550px;
  margin: auto auto -10px;
  padding-top: 119px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 600px){
    padding-top: 30px;
  };
  a {
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #868686;
    padding: 0 5px 10px;
    white-space: nowrap;
  }
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  svg {
    animation: spin 2s linear infinite;
    width: 155px;
    height: 155px;
  }
}

</style>