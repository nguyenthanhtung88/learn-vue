// Event Dispatcher
window.Event = new class {
    constructor() {
        this.vue = new Vue()
    }

    fire(event, data = null) {
        this.vue.$emit(event, data)
    }

    listen(event, callback) {
        this.vue.$on(event, callback)
    }
}

Vue.component('coupon', {
    template: `
        <div class="field has-addons">
            <p class="control">
                <input class="input" type="text" placeholder="Enter coupon code..." v-model="couponCode" />
            </p>
            <p class="control">
                <a class="button is-primary" href="#" @click="applyCoupon">
                    Submit
                </a>
            </p>
        </div>
    `,

    data() {
        return {
            couponCode: ''
        }
    },

    methods: {
        applyCoupon() {
            Event.fire('applied', this.couponCode)
            this.couponCode = ''
        }
    }
})

new Vue({
    el: '#root',

    data: {
        isCouponApplied: false
    },

    created() {
        Event.listen('applied', (couponCode) => {
            this.isCouponApplied = true
            console.log(couponCode)
        })
    }
})
