require('./bootstrap');

import { createApp } from 'vue/dist/vue.esm-bundler.js';
window.createApp = createApp;

window.HelloComponent = require('./components/Hello.vue').default; 

//Vue.component('red-button', require('./components/RedButton.vue'));