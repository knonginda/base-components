<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    dataAttrs: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isActive: this.active,
      isDisabled: this.disabled,
    }
  },
  computed: {
    index() {
      return this.$parent.tabList.indexOf(this)
    },
  },
  watch: {
    '$parent.activeTabIndex'(index) {
      this.isActive = this.index === index
    },
    disabled() {
      this.isDisabled = this.disabled
    },
  },
  created() {
    this.$parent.tabList.push(this)
  },
}
</script>

<template>
  <div v-show="isActive" :class="isDisabled ? $style.disabled : ''">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.disabled {
  opacity: 0.5;
}
</style>
