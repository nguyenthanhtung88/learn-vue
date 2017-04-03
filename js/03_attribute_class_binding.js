// Attribute and Class binding
let app = new Vue({
    el: '#root',
    data: {
        title: 'Custom Title Javascript',
        isLoading: false
    },
    methods: {
        toggleButton() {
            this.isLoading = !this.isLoading;
        }
    }
});
