import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// Create the Vue app instance
const app = createApp(App);

// Use router and store if applicable
app.use(store);

// Mount the app to the DOM
app.mount('#app');
