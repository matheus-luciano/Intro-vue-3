const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Socks',
            description: "A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf. Some type of shoe or boot is typically worn over socks. In ancient times, socks were made from leather or matted animal hair. In the late 16th century, machine-knit socks were first produced. Until 1800 both hand knitting and machine knitting were used to produce socks, but after 1800, machine knitting became the predominant method.",
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/matheus-luciano',
            inventory: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},                
            ],
            inStock: true
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

        updateImage(variantImage){
            this.image = variantImage
        },

    }
});

