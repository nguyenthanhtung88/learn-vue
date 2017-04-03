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
