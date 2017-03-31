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
// let app = new Vue({
//     el: '#root',
//     data: {
//         tasks: [
//             { description: '1 Task', completed: true },
//             { description: '2 Task', completed: false },
//             { description: '3 Task', completed: false },
//             { description: '4 Task', completed: false },
//             { description: '5 Task', completed: false },
//             { description: '6 Task', completed: true },
//         ]
//     },
//     computed: {
//         incompletedTasks() {
//             return this.tasks.filter(task => ! task.completed)
//         },
//         completedTasks() {
//             return this.tasks.filter(task => task.completed)
//         }
//     }
// })

// Components
// Vue.component('task-list', {
//     template: `
//         <div>
//             <task v-for="task in tasks">{{ task.description }}</task>
//         </div>
//     `,
//     data() {
//         return {
//             tasks: [
//                 { description: '1 Task', completed: true },
//                 { description: '2 Task', completed: false },
//                 { description: '3 Task', completed: false },
//                 { description: '4 Task', completed: false },
//                 { description: '5 Task', completed: false },
//                 { description: '6 Task', completed: true },
//             ]
//         }
//     }
// })
// Vue.component('task', {
//     template: '<li><slot></slot></li>'
// })
// new Vue({
//     el: '#root'
// })

// Message Component
// Vue.component('message', {
//     props: ['title', 'body'],
//     data() {
//         return {
//             isShow: true
//         }
//     },
//     template: `
//         <article class="message is-primary" v-show="isShow">
//             <div class="message-header">
//                 <p>{{ title }}</p>
//                 <button class="delete" @click="hideMessage"></button>
//             </div>
//             <div class="message-body">
//                 {{ body }}
//             </div>
//         </article>
//     `,
//     methods: {
//         hideMessage() {
//             this.isShow = false;
//         }
//     }
// })
// new Vue({
//     el: '#root'
// })


// Modal Component
// Vue.component('modal', {
//     template: `
//         <div class="modal is-active">
//             <div class="modal-background"></div>
//             <div class="modal-content">
//                 <div class="box">
//                     <slot></slot>
//                 </div>
//             </div>
//             <button class="modal-close" @click="$emit('close')"></button>
//         </div>
//     `
// })
// new Vue({
//     el: '#root',
//     data: {
//         isShow: false
//     }
// })

Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    created() {
        this.tabs = this.$children
    },

    data() {
        return {
            tabs: []
        }
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            })
        }
    }
})

Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    },

    mounted() {
        this.isActive = this.selected
    }
})

new Vue({
    el: '#root'
})
