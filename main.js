const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: "A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf. Some type of shoe or boot is typically worn over socks. In ancient times, socks were made from leather or matted animal hair. In the late 16th century, machine-knit socks were first produced. Until 1800 both hand knitting and machine knitting were used to produce socks, but after 1800, machine knitting became the predominant method.",
            selectedVariant: 0,
            onSale: false,
            url: 'https://github.com/matheus-luciano',
            inventory: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},                
            ],
            
        } 
    },
    methods: {
        addToCart(){
            this.cart += 1 //v-on shorthandle = @
        },

        removeFromCart(){
            if(this.cart > 0){
                this.cart -= 1
            }
            
        },

        updateVariant(index){
            this.selectedVariant = index
        },

    },

    computed:{
        title(){
            return this.brand + ' ' +  this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage(){
            return this.brand + ' ' + this.product + ' Is on Sale'
        }
    }
});

