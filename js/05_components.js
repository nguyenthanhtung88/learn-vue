// Components
Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.description }}</task>
        </div>
    `,
    data() {
        return {
            tasks: [
                { description: '1 Task', completed: true },
                { description: '2 Task', completed: false },
                { description: '3 Task', completed: false },
                { description: '4 Task', completed: false },
                { description: '5 Task', completed: false },
                { description: '6 Task', completed: true },
            ]
        }
    }
})
Vue.component('task', {
    template: '<li><slot></slot></li>'
})
new Vue({
    el: '#root'
})
