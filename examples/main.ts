
import {createApp} from 'vue';
import App from './App.vue';

import VerneyUI from '@verney-design/ui';   

const app = createApp(App);

app.use(VerneyUI); // app.use 全局挂载组件库


app.mount('#app');