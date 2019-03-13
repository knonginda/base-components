<script>
export default {
  name: 'BaseCheckbox',
  props: {
    id: {
      type: String,
      default: function() {
        return 'checkbox-id-' + this._uid
      },
    },
    name: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    trueValue: {
      type: [Boolean, String, Number],
      default: null,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: null,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['large', 'medium', 'small'].indexOf(value) !== -1
      },
    },
    change: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      checkedIcon: ['far', 'square'],
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
  },
  methods: {
    onChange($event) {
      // Passing custom event from outside change.
      this.$emit('change')
      let isChecked = $event.target.checked
      this.checkedIcon = isChecked ? 'check-square' : ['far', 'square']
      if (this.trueValue !== null && isChecked) {
        this.$emit('input', this.trueValue)
      } else if (this.falseValue !== null && !isChecked) {
        this.$emit('input', this.falseValue)
      } else {
        this.$emit('input', $event.target.checked)
      }
    },
  },
}
</script>

<template>
  <div :class="[$style.checkbox, overlayClasses]">
    <input
      :id="id"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :true-value="trueValue"
      :false-value="falseValue"
      @change="onChange($event)"
    >
    <label :for="id">
      <BaseIcon :class="$style.checkedIcon" color="#8cc63e" :name="checkedIcon"/>
      <span>
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.checkbox {
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

  .checkedIcon {
    position: relative;
    top: 1px;
  }
}

.large {
  @extend %typography-large;

  .checkboxIcon {
    width: 18px;
    height: 18px;
  }
}

.medium {
  @extend %typography-medium;

  .checkboxIcon {
    width: 16px;
    height: 16px;
  }
}

.small {
  @extend %typography-small;

  .checkboxIcon {
    width: 14px;
    height: 14px;
  }
}
</style>
