var products = [

    { name: 'Big Mac', price: 5.99, image: 'img/big-mac.png', compteur: 0, isSelected: false },

    { name: 'McChicken', price: 4.99, image: 'img/mc-chicken.png', compteur: 0, isSelected: false },

    { name: 'Double Cheese Burger', price: 2.99, image: 'img/double-cb.png', compteur: 0, isSelected: false },

    { name: 'Fries', price: 2.99, image: 'img/fries.png', compteur: 0, isSelected: false },

    { name: 'Mc Nuggets', price: 3.49, image: 'img/nuggets.png', compteur: 0, isSelected: false },

    { name: 'Salad', price: 2.79, image: 'img/salad.png', compteur: 0, isSelected: false },

    { name: 'Coke', price: 1.99, image: 'img/cola.png', compteur: 0, isSelected: false },

    { name: 'Ice Tea', price: 1.99, image: 'img/lipton.png', compteur: 0, isSelected: false },

    { name: 'Water', price: 1.49, image: 'img/water.png', compteur: 0, isSelected: false }
]

const app = Vue.createApp({
    data(){
        return{
           products:window.products,
        }
    },
    methods: {
        toggleSelection(item){
            item.isSelected = !item.isSelected;
            item.compteur = 1;
        },
        incremente(prod){
            prod.compteur ++;
        },
        decremente(prod){
            if (prod.compteur > 1){
                prod.compteur --;
            }    
        },
        totalProd(prod){
            return (prod.price * prod.compteur).toFixed(2);
        },
        totalPrice(){
            return this.products.reduce((total, prod)=>{
                if (prod.isSelected){
                    return total + parseFloat(this.totalProd(prod));
                }
                return total;
            },0).toFixed(2) 
        },
        check(){
            return this.totalPrice() > 0;
        }

    },
    computed: {
        filterproduct(){
            return this.products.filter(prod => prod.isSelected)
        },
        isDisabled(){
            return (prod) => prod.compteur<=1;
        }
    },
    
});
app.mount('#app');
