<script>
import camelCase from 'lodash/camelCase'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library as fontAwesomeIconLibrary } from '@fortawesome/fontawesome-svg-core'
import {
  faSync,
  faUser,
  faHome,
  faCaretUp,
  faCaretRight,
  faCaretDown,
  faCaretLeft,
  faCheckSquare,
  faCheckCircle,
  faDotCircle,
  faEllipsisH,
  faFilter,
} from '@fortawesome/free-solid-svg-icons'

import {
  faSquare,
  faCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons'

// import('@assets/svgs/icons.svg')

// https://fontawesome.com/icons
fontAwesomeIconLibrary.add(
  faSync,
  faUser,
  faHome,
  faCaretUp,
  faCaretRight,
  faCaretDown,
  faCaretLeft,
  faCheckSquare,
  faCheckCircle,
  faDotCircle,
  faEllipsisH,
  faFilter,
  faSquare,
  faCircle,
  faTimesCircle
)

export default {
  components: {
    FontAwesomeIcon,
  },
  inheritAttrs: false,
  props: {
    source: {
      type: String,
      default: 'font-awesome',
      validator: function(value) {
        return ['font-awesome', 'ehealth'].indexOf(value) !== -1
      },
    },
    name: {
      type: [String, Array],
      required: true,
    },
    size: {
      type: String,
      default: 'small',
      validator: function(value) {
        return ['large', 'medium', 'small'].indexOf(value) !== -1
      },
    },
    color: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: null,
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    // Gets a CSS module class, e.g. iconCustomLogo
    customIconClass() {
      return [this.$style[camelCase('ehealth-' + this.name)], this.className]
    },
    overlayClasses() {
      return [
        this.size === 'large'
          ? this.$style.large
          : this.size === 'small'
          ? this.$style.small
          : this.$style.medium,
        this.$style.baseIcon,
      ]
    },
  },
}
</script>

<template>
  <span
    :class="[overlayClasses, className]"
    :style="{color: color}"
    v-bind="$attrs"
    v-on="$listeners"
    @click="click()"
  >
    <FontAwesomeIcon v-if="source === 'font-awesome'" :icon="name"/>

    <svg v-else-if="source === 'ehealth'" :class="customIconClass">
      <use v-bind="{ 'xlink:href': '#icons_' + name }"></use>
    </svg>
  </span>
</template>

<style lang="scss" module>
.baseIcon {
  display: inline-block;

  > svg {
    width: 100% !important;
    height: 100% !important;
  }
}

.small {
  width: 16px;
  height: 16px;
}

.medium {
  width: 32px;
  height: 32px;
}

.large {
  width: 64px;
  height: 64px;
}
</style>
