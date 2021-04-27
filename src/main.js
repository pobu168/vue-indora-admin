import Vue from 'vue'
import App from './App.vue'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router'

import ModelComponent from './pages/model-validate-demo/modal.vue'
Vue.component('ModelComponent', ModelComponent)

import { ValidationProvider, ValidationObserver, extend, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    // ...
  }
})
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});
// extend('required', {
//   ...required,
//   message: 'The {_field_} field is required'
// });
// extend('minmax', {
//   validate(value, { min, max }) {
//     return value.length >= min && value.length <= max;
//   },
//   params: ['min', 'max'],
//   message: 'The {_field_} field must have at least {min} characters and {max} characters at most'
// });
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.use(ViewUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
