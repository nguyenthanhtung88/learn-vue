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

// Attribute and Class binding
// let app = new Vue({
//     el: '#root',
//     data: {
//         title: 'Custom Title Javascript',
//         isLoading: false
//     },
//     methods: {
//         toggleButton() {
//             this.isLoading = !this.isLoading;
//         }
//     }
// });

// Computed Properties
let app = new Vue({
    el: '#root',
    data: {
        tasks: [
            { description: '1 Task', completed: true },
            { description: '2 Task', completed: false },
            { description: '3 Task', completed: false },
            { description: '4 Task', completed: false },
            { description: '5 Task', completed: false },
            { description: '6 Task', completed: true },
        ]
    },
    computed: {
        incompletedTasks() {
            return this.tasks.filter(task => ! task.completed)
        },
        completedTasks() {
            return this.tasks.filter(task => task.completed)
        }
    }
})
