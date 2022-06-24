import { createApp } from 'vue';
import VueButton from '../components/VueButton.vue';

export const bootstrap = (rootContainer: string | Element) => {
  const app = createApp(VueButton);
  app.mount(rootContainer);
};

export default bootstrap;
