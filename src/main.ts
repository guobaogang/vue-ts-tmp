import Vue from 'vue';
import App from './App.vue';
import Test from './component/test';
Test();
new Vue({
    render: h => h(App)
}).$mount('#app');