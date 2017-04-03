// Message Component
Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            isShow: true
        }
    },
    template: `
        <article class="message is-primary" v-show="isShow">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="hideMessage"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    methods: {
        hideMessage() {
            this.isShow = false;
        }
    }
})
new Vue({
    el: '#root'
})
