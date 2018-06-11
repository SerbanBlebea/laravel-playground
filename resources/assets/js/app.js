require('./bootstrap');

window.Vue = require('vue');

Vue.component('vue-markdown', require('./components/VueMarkdown.vue'));
    Vue.component('vue-markdown-editor', require('./components/VueMarkdownEditor.vue'));
    Vue.component('vue-markdown-preview', require('./components/VueMarkdownPreview.vue'));

Vue.component('vue-content-editor', require('./components/VueContentEditor.vue'));
    Vue.component('vue-input-editor', require('./components/VueInputEditor.vue'));
    Vue.component('vue-textarea-editor', require('./components/VueTextareaEditor.vue'));
    Vue.component('vue-upload-editor', require('./components/VueUploadEditor.vue'));

// Global variables
Vue.prototype.api = '/api/v1/';

const app = new Vue({
    el: '#app'
});
