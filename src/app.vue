<script>
import appConfig from '@src/app.config'

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
}
</script>

<template>
  <BaseIcon source="ehealth" name="home"/>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
@import '@design';
@import '~@src/design/import.scss';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  @extend %typography-medium;
  background: $color-body-bg;
}

h1,
h2,
h3,
h4,
h5 {
  @extend %font-heading;
}

a,
a:visited {
  color: $color-link-text;
  text-decoration: none;
}

ul,
li {
  @include ulreset;
}

#nprogress .bar {
  background: $color-link-text;
}
</style>
