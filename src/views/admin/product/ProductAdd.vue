<template lang="">
    <div>
        <form class=" bg-white overlay-content" @submit.prevent="ajout">
                    <h3>Nouveau Produit</h3>
                    <div>
                        <div class="form-group py-1">
                            <label for="exampleInputEmail1">Nom</label>
                            <input type="text" class="form-control" 
                            v-model="product.name">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Description</label>
                            <input type="text" class="form-control" v-model="product.description">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Prix</label>
                            <input type="text" class="form-control" v-model="product.price">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">categorie</label>
                            <input type="text" class="form-control" v-model="product.categorie_id">
                        </div>
                        <button type="submit" class="btn button w-100">Enregister</button>
                    </div>
        </form>
    </div>
</template>
<script>
import { productService } from "@/services";

export default {
    data() {
        return {
            product: {
                name: "",
                description: "",
                price: 0,
                categorie_id: 1,
            }
        }
    },

    methods: {
        ajout(){
            console.log(this.product);
            productService.createProduct(this.product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    },
}
</script>
<style lang="">
    
</style>