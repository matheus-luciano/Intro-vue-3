app.component('product-display', {
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image" >
          <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image" >
          
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>

          <!-- <p v-show="onSale">On sale</p> -->
          <p v-if="onSale">{{ saleMessage }}</p>
          <p v-if="inStock">In stock</p>
          <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p> -->
          <p v-else>Out of stock</p>

          <p>Shipping: {{ shipping }}</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div  v-for="(variant, index) in variants" 
                v-bind:key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                v-bind:style="{backgroundColor: variant.color }">
          </div>
          <button class="button" 
                  v-on:click="addToCart"
                  v-bind:class="{ disabledButton: !inStock }"
                  v-bind:disabled="!inStock">
                  Add to Cart
          </button>
          <!-- <button class="button" v-on:click="removeFromCart">Remove from cart</button>   -->
          <!-- <p>{{ description }}</p>
          <a v-bind:href="url" target="_blank">Matheus Luciano Ribeiro</a> -->

        </div>
      </div>
    </div>`,
    data(){
        return {
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
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
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
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 2.99
        }
    }
})