import Vue from 'vue'
import Recommendations from './components/Recommendations.vue'
import wrap from '@vue/web-component-wrapper';

Vue.config.productionTip = false

const CustomElement = wrap(Vue, Recommendations);

window.customElements.define('recom-app', CustomElement);
