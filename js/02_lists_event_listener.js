let app = new Vue({
    el: '#root',
    data: {
        newName: '',
        names: ['John', 'Mary', 'Doe', 'Lion']
    },
    methods: {
        addName() {
            this.names.push(this.newName);

            this.newName = '';
        }
    }
    mounted() {
        document.querySelector('#add-name').addEventListener('click', () => {
            let name = document.querySelector('#name');

            app.names.push(name.value);
            name.value = '';
        })
    }
});
