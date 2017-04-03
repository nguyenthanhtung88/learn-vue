// Custom Event
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
            this.$emit('applied', this.couponCode)
            this.couponCode = ''
        }
    }
})

new Vue({
    el: '#root',

    data: {
        isCouponApplied: false
    },

    methods: {
        applyCoupon(couponCode) {
            this.isCouponApplied = true
        }
    }
})
