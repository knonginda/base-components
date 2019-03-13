<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['large', 'medium', 'small'].indexOf(value) !== -1
      },
    },
  },
  data() {
    return {
      tabList: [],
      activeTabIndex: 0,
    }
  },
  computed: {
    overlaySizeClasses() {
      return [
        this.size === 'large'
          ? this.$style.large
          : this.size === 'small'
          ? this.$style.small
          : this.$style.medium,
      ]
    },
  },
  mounted() {
    // this.select(0)
    this.activeTabIndex = this.getInitialActiveTab()
    // this.$root.$on('select-tab', (index) => this.select(index))
  },
  methods: {
    select(index) {
      const tab = this.tabList[index]
      if (!tab.isDisabled) {
        this.activeTabIndex = index
      }
      this.$emit('change', tab)
    },
    getInitialActiveTab() {
      const index = this.tabList.findIndex((tab) => tab.active)
      return index === -1 ? 0 : index
    },
    overlayItemClasses(tab, index) {
      return [
        this.activeTabIndex === index ? this.$style.active : '',
        tab.disabled ? this.$style.disabled : '',
      ]
    },
  },
}
</script>

<template>
  <div :class="[overlaySizeClasses, $style.tab]">
    <ul>
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        v-bind="tab.dataAttrs"
        :class="[overlayItemClasses(tab, index), $style.tabItem]"
        @click="select(index)"
      >{{ tab.title }}</li>
    </ul>
    <div :class="$style.tabContent">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.tab {
  > ul {
    width: 100%;
    display: flex;
    border-left: 1px solid $light-grey;
    border-bottom: 1px solid $light-grey;
  }
}

.tabContent {
  padding: 0;
}

.tabItem {
  background-color: #fff;
  background-image: none;
  border-top: 1px solid #ccc;
  border-right: 1px solid $light-grey;
  border-bottom: 1px solid $light-grey;
  margin-bottom: -1px;
  background-color: $lightestx-grey;
  cursor: pointer;
}

.small .tabItem {
  padding: $size-tab-padding-small;
}

.medium .tabItem {
  padding: $size-tab-padding-medium;
}

.large .tabItem {
  padding: $size-tab-padding-large;
}

.disabled {
  cursor: not-allowed;
  color: rgba(68, 68, 68, 0.3);
}

.active {
  background-color: #fff;
  border-bottom: 1px solid #fff;
}
</style>
