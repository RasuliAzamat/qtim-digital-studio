<template>
 <div class="select" :class="[{'select--light': ['projects-id', 'projects', 'about'].includes($route.name)}]" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <div class="selected-value">
        <svg width="24" height="24">
          <use :xlink:href="require('@/static/images/sprite.svg') + `#${selected.src}`" ></use>
        </svg>
      </div>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
       v-for="(option, i) of options"
        :key="i"
        class="items__item"
        @click="
          selected = option;
          open = false;
          $emit('type-value', selected);
        "
      >
      <svg width="24" height="24">
        <use :href="require('~/static/images/sprite.svg') + `#${option.src}`" ></use>
      </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    default: {
      type: Object,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    typeSelect: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      options: [
        {
          type: 'uk',
          src: 'language-uk',
        },
        {
          type: 'rus',
          src: 'language-rus'
        }
      ],
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  watch: {
    default(val) {
      this.selected = val
    }
  },

}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  .items {
    position: absolute;
    left: 0;
    top: calc(100% + 8px);
    z-index: 1;
    transition: all .2s linear;

    &.selectHide {
      opacity: 0;
      visibility: hidden;
    }
    &__item {
      background: #101010;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
  .selected-value, .items__item {
    cursor: pointer;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    border: 2px solid rgba(255, 255, 255, 0.4);
    transition: all .2s linear;
    svg {
      margin: auto;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1)
    }
  }
  &--light {
    .selected-value, .items__item {
      border: 2px solid rgba(0, 0, 0, 0.1);
      background: #fff;
      &:hover {
        background: #fff;
      }
    }
  }
}

</style>