import { createApp } from "vue";
import App from "./App.vue";
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';
import router from "./router";

createApp(App).use(router).use(CarbonComponentsVue).mount("#app");
