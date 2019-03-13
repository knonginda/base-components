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

// import all of eHealth Icons
let eHealthIcons = [
  'individual-family-insurance',
  'small-business-insurance',
  'medicare-insurance',
  'medicare-advantage',
  'medicare-supplement',
  'medicare-part-d',
  'dental-insurance',
  'vision-insurance',
  'life-insurance',
  'critical-illness-insurance',
  'short-term-insurance',
  'gap-medical-insurance',
  'accident-insurance',
  'pet-insurance',
  'travel-insurance',
  'student-health-insurance',
  'international-health-insurance',
  'cancer-insurance',
  'telemedicine-insurance',
  'fixed-indemnity-insurance',
  'health-savings-account',
  'business-hsa',
  'accidental-death-dismemberment',
  'qualified-health-plan',
  'hospitalization',
  'long-term-care',
  'discount-cards',
  'prescription-drug-cards',
  'health-insurance',
  'ambulance',
  'blood',
  'brain-mental',
  'coinsurance',
  'deductible',
  'disabled',
  'dna',
  'doctor-briefcase',
  'doctor',
  'eye-exam',
  'female-symbol',
  'glossary',
  'hearing',
  'hospital',
  'lab-test',
  'low-cost',
  'lump-sum',
  'mail-order-pharmacy',
  'male-symbol',
  'maternity',
  'nurse-female',
  'nurse-male',
  'out-of-pocket-maximum',
  'premium',
  'respiratory-system',
  'rx-drug',
  'saving',
  'shot',
  'specialist',
  'stethoscope',
  'shopping-cart',
  'print',
  'email',
  'filter',
  'delete',
  'alert',
  'edit',
  'search',
  'zoom-out',
  'zoom-in',
  'download',
  'upload',
  'esign',
  'check',
  'lock',
  'secure',
  'secure-transaction',
  'credit-card',
  'edit-document',
  'document',
  'attachment',
  'compare-plan',
  'checklist',
  'checklist-completed',
  'location-pin',
  'map',
  'setting',
  'folder',
  'flag',
  'bookmark',
  'favorite',
  'star',
  'thumb-up',
  'tag',
  'recommended',
  'special',
  'trophy',
  'my-plan',
  'profile-circle',
  'profile',
  'profile-female',
  'profile-male',
  'household',
  'provider-network',
  'employees',
  'group',
  'advocate',
  'news',
  'goal',
  'birthday',
  'partnership',
  'unbiased',
  'rocket-fast',
  'global',
  'agent-male',
  'agent-female',
  'chat',
  'call',
  'call-outbound',
  'call-inbound',
  'calendar',
  'add-to-calendar',
  'schedule-appointment',
  'follow-up',
  'clock',
  'twenty-four-hour',
  'responsive',
  'desktop',
  'laptop',
  'tablet',
  'mobile-phone',
  'watch',
  'timer',
  'home',
  'dinning',
  'gift',
  'calculator',
  'pie-phart',
  'facebook',
  'twitter',
  'google-plus',
  'linkedin',
  'facebook-circle',
  'twitter-circle',
  'google-plus-circle',
  'linkedin-circle',
  'youtube-circle',
  'warning',
  'question',
  'information',
  'check-circle',
  'close',
  'ban',
  'rotate',
  'up-arrow',
  'right-arrow',
  'down-arrow',
  'left-arrow',
  'warning-bold',
  'question-bold',
  'information-bold',
  'check-bold',
  'close-bold',
  'ban-bold',
  'clockwise-dashed',
  'check-mark',
  'minus',
  'plus',
  'x',
  'warning-filled',
  'question-filled',
  'information-filled',
  'check-filled',
  'close-filled',
  'ban-filled',
  'clockwise',
  'up-arrow-cirlce',
  'right-arrow-circle',
  'down-arrow-circle',
  'left-arrow-circle',
  'begining-button',
  'rewind-button',
  'play-button',
  'pause-button',
  'stop-button',
  'fastforward-button',
  'end-button',
  'check-mark-circle',
  'minus-circle',
  'plus-circle',
  'x-cirlce',
  'play',
  'fastforward',
  'end',
  'pause',
  'stop',
  'volume',
  'mute',
  'wifi',
  'hover',
  'microphone',
  'pointer',
]
for (const eHealthIcon of eHealthIcons) {
  import(`@assets/svgs/${eHealthIcon}.svg`)
}

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

// const requireAll = (requireContext) => requireContext.keys().map(requireContext)
// const req = require.context('@assets/svgs/', false, /\.svg$/)
// requireAll(req)

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
      <use v-bind="{ 'xlink:href': '#' + name }"></use>
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
