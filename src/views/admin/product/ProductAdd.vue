<template lang="">
    <div class="h-100 d-flex align-items-center justify-content-cente">
        <form class=" bg-white overlay-content m-auto border mt-5" @submit.prevent="ajout">
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
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">active</label>
                             <input class="form-control" type="text" v-model="product.active">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Image {{product.image}}</label>
                            <input @change="OnFilechage" type="file" name="image" class="form-control" >
                        </div>
                        <button type="submit" class="btn button w-100">Enregister</button>
                    </div>
        </form>
    </div>
</template>
<script>
import { productService } from "@/services";
import { ref } from 'vue'
export default {
    data() {
        return {
            product: {
                name: "",
                description: "",
                price: 0,
                categorie_id: 1,
                image: "",
                active: "",
            },
        }
    },

    methods: {
        OnFilechage(e){
           this.product.image = e.target.files[0];
        },
        ajout(){
            const formData = new FormData();
            formData.append('name', this.product.name);
            formData.append('description', this.product.description);
            formData.append('price', this.product.price);
            formData.append('categorie_id', this.product.categorie_id);
            formData.append('image', this.product.image);
            formData.append('active', this.product.active);
            console.log(this.product.image);
            productService.createProduct(formData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    },
}
</script>
<style lang="">
    
</style>