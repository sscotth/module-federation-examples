import { createApp } from 'vue';
import App from '../App.vue';
import router from '../router';
import store from '../store';

export const bootstrap = (rootContainer: string | Element) => {
  const app = createApp(App).use(store).use(router);
  app.mount(rootContainer);
};

export default bootstrap;
