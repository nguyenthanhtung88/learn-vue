// new Vue({
//     el: '#root',
//     data: {
//         message: 'Hello World'
//     }
// })

// let app = new Vue({
//     el: '#root',
//     data: {
//         newName: '',
//         names: ['John', 'Mary', 'Doe', 'Lion']
//     },
//     methods: {
//         addName() {
//             this.names.push(this.newName);
//
//             this.newName = '';
//         }
//     }
//     // mounted() {
//     //     document.querySelector('#add-name').addEventListener('click', () => {
//     //         let name = document.querySelector('#name');
//     //
//     //         app.names.push(name.value);
//     //         name.value = '';
//     //     })
//     // }
// });

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
