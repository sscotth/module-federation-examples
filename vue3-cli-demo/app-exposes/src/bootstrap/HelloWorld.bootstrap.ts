import { createApp } from 'vue';
import App from '../components/HelloWorld.vue';

export const bootstrap = (rootContainer: string | Element) => {
  const app = createApp(App);
  app.mount(rootContainer);
};

export default bootstrap;
