import { createApp } from 'vue';
import App from '../views/HomeView.vue';

export const bootstrap = (rootContainer: string | Element) => {
  const app = createApp(App);
  app.mount(rootContainer);
};

export default bootstrap;
