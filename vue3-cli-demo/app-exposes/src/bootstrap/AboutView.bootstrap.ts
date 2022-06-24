import { createApp } from 'vue';
import App from '../views/AboutView.vue';

export const bootstrap = (rootContainer: string | Element) => {
  const app = createApp(App);
  app.mount(rootContainer);
};

export default bootstrap;
