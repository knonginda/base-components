<script>
export default {
  name: 'BaseModal',

  props: {
    title: {
      type: [String, Array, Object],
      required: false,
      default: '',
    },

    overlayTheme: {
      type: String,
      required: false,
      default: 'normal',
    },

    modalTheme: {
      type: String,
      required: false,
      default: 'normal',
    },

    blocking: {
      type: Boolean,
      required: false,
      default: false,
    },

    isHideCloseButton: {
      type: Boolean,
      required: false,
      default: false,
    },

    width: {
      type: [Number, String],
      required: false,
      default: null,
    },

    height: {
      type: [Number, String],
      required: false,
      default: null,
    },

    buttonSpace: {
      type: String,
      default: 'flex-end',
      validator: function(value) {
        return ['flex-start', 'flex-end', 'space-between'].indexOf(value) !== -1
      },
    },
  },

  data() {
    return {
      visible: false,
      isOpen: false,
      closeIcon: ['far', 'times-circle'],

      backups: {
        body: {
          height: null,
          overflow: null,
        },
      },
    }
  },

  computed: {
    hasTitle() {
      return this.title || this.$slots.title
    },

    overlayClasses() {
      return [
        this.$style.baseModalOverlay,
        this.blocking ? this.$style.blocking : '',
        this.visible ? this.$style.isVisible : '',
        'base-modal-clickable',
      ]
    },

    modalClasses() {
      return [this.$style.baseModal, this.visible ? this.$style.isVisible : '']
    },

    modalContentStyle() {
      let height = this.height
      let maxHeight = null

      if (height !== null) {
        if (Number.isInteger(Number(height))) {
          height = height + 'px'
        }
        maxHeight = 'none'
      }

      return {
        height,
        maxHeight,
      }
    },

    modalStyle() {
      let width = this.width
      let maxWidth = null

      if (width !== null) {
        if (Number.isInteger(Number(width))) {
          width = width + 'px'
        }
        maxWidth = 'none'
      }

      return {
        width,
        maxWidth,
      }
    },
  },

  mounted() {
    document.addEventListener('keyup', this.onDocumentKeyup)
  },

  methods: {
    open() {
      this.isOpen = true
      this.lockBody()

      setTimeout(() => {
        if (!this.visible) {
          this.visible = true
        }
      }, 30)
      this.$emit('open')
    },

    close() {
      this.visible = false
      this.unlockBody()

      setTimeout(() => {
        this.isOpen = false
      }, 300)
      this.$emit('close')
    },

    lockBody() {
      this.backups.body.height = document.body.style.height
      this.backups.body.overflow = document.body.style.overflow

      document.body.style.height = '100%'
      document.body.style.overflow = 'hidden'
    },

    unlockBody() {
      document.body.style.height = this.backups.body.height
      document.body.style.overflow = this.backups.body.overflow
    },

    onOverlayClick(event) {
      if (
        !event.target.classList ||
        event.target.classList.contains('base-modal-clickable')
      ) {
        if (!this.blocking) {
          this.close()
        }
      }
    },
  },
}
</script>

<template>
  <div>
    <div v-show="isOpen" :class="overlayClasses" @click="onOverlayClick">
      <div :class="modalClasses" :style="modalStyle">
        <div v-if="!isHideCloseButton" :class="$style.baseActionClose" @click="close">
          <BaseIcon color="#999999" :name="closeIcon"/>
        </div>

        <!-- If title is present -->
        <div v-if="hasTitle" :class="$style.baseTitle">
          <template v-if="hasTitle">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <h2 v-if="title" v-html="title"></h2>
            <slot v-else name="title"></slot>
          </template>
        </div>

        <!-- Content: Wrapper -->
        <div ref="content" :class="$style.baseContent" :style="modalContentStyle">
          <!-- Actual Content -->
          <div v-if="$slots.default" :class="$style.baseContentContent">
            <slot></slot>
          </div>
        </div>

        <!-- Buttons -->
        <div
          v-if="$slots.button"
          :class="[$style.baseButtons,
            buttonSpace === 'flex-end'
            ? $style.flexEnd : buttonSpace === 'flex-start'
            ? $style.flexStart : $style.spaceBetween]"
        >
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.baseModalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: $layer-modal-z-index;

  // Theming
  background: rgba(#fff, 0.9);

  // Animation
  opacity: 0;
  transition: opacity 0.3s;
  transform: translate3D(0, 0, 0);
  -webkit-perspective: 500px;

  &.isVisible {
    opacity: 1;
  }
}

.baseModal {
  background: $color-modal-bg;
  box-shadow: $color-modal-box-shadow;

  position: absolute;
  top: 50%;
  left: 50%;
  // transform: translate(-50%, -50%); // Done by the animation later

  width: 100%;
  max-width: 640px;
  max-height: 100vh;
  overflow-y: auto;
  border-radius: 3px;

  // Animation
  transform: scale(0.9) translate(calc(-50% - 32px), -50%);
  opacity: 0;

  transition: {
    property: transform, opacity;
    duration: 0.3s;
    delay: 0.05s;
    timing-function: cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }

  &.isVisible {
    transform: translate(-50%, -50%);
    opacity: 1;

    .baseButtons,
    .baseContent {
      transform: none;
      opacity: 1;
    }
  }
}

.baseTitle {
  @include ellipsis;

  height: 64px;
  line-height: 64px;

  border-bottom: 1px solid $color-modal-border;

  padding: {
    left: 32px;
    right: 64px;
  }

  > h2 {
    @include ellipsis;
    @include mp0;

    text-align: left;
    font-weight: 500;
    font-size: 22px;
  }
}

.baseContent {
  display: flex;
  line-height: 1.5;

  padding: {
    left: 32px;
    right: 32px;
    top: 24px;
    bottom: 24px;
  }
}

.baseContentContent {
  flex-grow: 1;
}

.baseButtons {
  text-align: right;

  padding: {
    left: 20px;
    right: 20px;
    top: 12px;
    bottom: 12px;
  }

  &.flexEnd {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 0;

      &:last-child {
        margin-left: 20px;
      }
    }
  }

  &.flexStart {
    display: flex;
    justify-content: flex-start;

    button {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &.spaceBetween {
    display: flex;
    justify-content: space-between;
  }
}

.baseContent + .baseButtons {
  border-top: 1px solid $color-modal-border;
}

.baseButtons,
.baseContent {
  opacity: 0;
  transition: {
    property: transform, opacity;
    duration: 0.3s;
    delay: 0.09s;
    timing-function: cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
}

.baseContent {
  transform: translateY(-8px);
}

.baseButtons {
  transform: translateY(16px);
}

.baseActionClose {
  > span {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 28px !important;
    height: 28px !important;
    color: $medium-grey;
    cursor: pointer;
  }
}

.baseContentContent {
  text-align: left;
}
</style>
