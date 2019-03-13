<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'submit',
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['large', 'medium', 'small'].indexOf(value) !== -1
      },
    },
    theme: {
      type: String,
      default: 'primary',
      validator: function(value) {
        return ['primary', 'secondary', 'teritary'].indexOf(value) !== -1
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      default: () => {},
    },
    ripple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    overlayClasses() {
      return [
        this.theme === 'secondary'
          ? this.$style.secondary
          : this.theme === 'teritary'
          ? this.$style.teritary
          : this.$style.primary,
        this.size === 'large'
          ? this.$style.large
          : this.size === 'small'
          ? this.$style.small
          : this.$style.medium,
        this.ripple ? this.$style.ripple : '',
      ]
    },
  },
}
</script>

<template>
  <button
    :disabled="disabled"
    :class="[overlayClasses, $style.button]"
    v-on="$listeners"
    @click="click()"
  >
    <slot/>
  </button>
</template>

<style lang="scss" module>
@import '@design';

.button {
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
}

.primary {
  color: $color-button-text-primary;
  background: $color-button-bg-primary;
  border: 2px solid $color-button-border-primary;

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: $color-button-bg-primary;
    }
  }

  &:hover {
    background: $color-button-hover-bg-primary;
  }
}

.secondary {
  color: $color-button-text-secondary;
  background-color: #fff;
  border: 2px solid $color-button-border-secondary;

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: #fff;
    }
  }

  &:hover {
    background: $color-button-hover-bg-secondary;
  }
}

.teritary {
  color: $color-button-text-teritary;
  background-color: #fff;
  border: 2px solid $color-button-border-teritary;

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: #fff;
    }
  }

  &:hover {
    background: $color-button-hover-bg-teritary;
  }
}

.small {
  @extend %typography-medium;
  padding: $size-button-padding-small;
  min-width: $size-button-width-small;
}

.medium {
  @extend %typography-medium;
  padding: $size-button-padding-medium;
  min-width: $size-button-width-medium;
}

.large {
  @extend %typography-large;
  padding: $size-button-padding-large;
  min-width: $size-button-width-large;
}
</style>
