<script>
export default {
  name: 'BaseRadio',
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    id: {
      type: String,
      default: function() {
        return 'radio-id-' + this._uid
      },
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
      radioIcon: ['far', 'circle'],
    }
  },
  computed: {
    overlayClasses() {
      return [
        this.size === 'large'
          ? this.$style.large
          : this.size === 'small'
          ? this.$style.small
          : this.$style.medium,
      ]
    },
    state() {
      if (this.modelValue === undefined) {
        return this.checked
      }
      return this.modelValue === this.value
    },
  },
  watch: {
    state(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.toggleIcon(newValue)
      }
    },
  },
  mounted() {
    this.toggleIcon(this.state)
    if (this.checked && !this.state) {
      this.toggle()
    }
  },
  methods: {
    onChange() {
      // Passing custom event from outside change.
      this.$emit('change')
      this.toggle()
    },
    toggle() {
      this.$emit('input', this.state ? '' : this.value)
    },
    toggleIcon(state) {
      if (state) {
        this.radioIcon = 'dot-circle'
      } else {
        this.radioIcon = ['far', 'circle']
      }
    },
  },
}
</script>

<template>
  <div :class="[$style.radio, overlayClasses]">
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="state"
      @change="onChange"
    >
    <label :for="id">
      <BaseIcon :class="$style.radioIcon" color="#8cc63e" :name="radioIcon"/>
      <span>
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.radio {
  input {
    position: absolute;
    left: -9999px;
  }

  label {
    cursor: pointer;
    display: inline-block;
    position: relative;

    span {
      height: 18px;
      display: inline-block;
      margin-left: 5px;
    }
  }

  .radioIcon {
    position: relative;
    top: 1px;
  }
}

.large {
  @extend %typography-large;

  .radioIcon {
    width: 18px;
    height: 18px;
  }
}

.medium {
  @extend %typography-medium;

  .radioIcon {
    width: 16px;
    height: 16px;
  }
}

.small {
  @extend %typography-small;

  .radioIcon {
    width: 14px;
    height: 14px;
  }
}
</style>
