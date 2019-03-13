<script>
export default {
  name: 'BaseSelect',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Object],
      default: () => {},
    },
  },
  data() {
    return {
      showOptions: false,
    }
  },
  methods: {
    onChange(option) {
      this.$emit('change')
      this.$emit('input', option)
      this.showOptions = !this.showOptions
    },
  },
}
</script>

<template>
  <div :class="[$style.selector, 'form-control']" @click="showOptions = !showOptions">
    <div :class="$style.flexBetween">
      <div :class="$style.selectName">{{ value ? value.value : 'Select' }}</div>
      <div :class="$style.selectSymbol">
        <BaseIcon v-if="!showOptions" color="#0099d6" source="ehealth" name="down-arrow"></BaseIcon>
        <BaseIcon v-else color="#0099d6" source="ehealth" name="up-arrow"></BaseIcon>
      </div>
    </div>
    <ul v-show="showOptions" :class="$style.selectorOptions">
      <li v-for="(option, index) in options" :key="index">
        <label :for="'selector_' + _uid + '_' + index" :class="$style.option">
          <input
            :id="'selector_' + _uid + '_' + index"
            type="radio"
            :value="option.value"
            :name="'selector_' + _uid"
            @change="onChange(option)"
          >
          {{ option.value }}
        </label>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.selector {
  background-color: #fff;
  border: 1px solid $medium-grey;
  position: relative;
  cursor: pointer;
}

.flexBetween {
  display: flex;
  height: $size-input-height;
  justify-content: space-between;
}

.selectName {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
}

.selectSymbol {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selectorOptions {
  position: absolute;
  top: 38px;
  width: 100%;
  z-index: $layer-dropdown-z-index;
  border: 1px solid $lighter-grey;
}

.option {
  height: $size-input-height;
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
  background-color: #fff;
  border-bottom: 1px solid $lighter-grey;
  background-color: #fff;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}

.option input {
  position: absolute;
  left: -9999px;
}
</style>
