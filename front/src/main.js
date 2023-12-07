// main.js ou main.ts
import { createApp} from 'vue';
import Home from './views/Home.vue';
import App from './App.vue';
import router from './router.js'; // Importez votre fichier de configuration Vue Router

createApp(App).use(router).mount('#app');
