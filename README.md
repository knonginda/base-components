# Backoffice Base Components

## Installation and Usage

1. Just use npm install --save @flockos/vue-components
2. Now you can include the scripts by using following snippet:

```bash
import Components from '@bo/base-components';

// Global registration in your main.js/App.vue file
Object.entried(Components).forEach((name, component) => {
    Vue.component(name, component);
});
```

## List of components

All components are registered with the Vue global and are available for use. You do not need to re-register them.
