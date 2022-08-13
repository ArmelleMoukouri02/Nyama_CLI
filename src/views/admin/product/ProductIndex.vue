<template lang="">
    <div>
        <div class="py-2">
            <div class="d-flex justify-content-between py-2">
            <h2>Liste des Produits</h2>
            <router-link to="/productAdd" class="btn button">Nouveau produits</router-link>
        </div>
        <div class="w-100 card-header d-flex justify-content-between">
                                <div class="">
                                    <i class="fas fa-table me-1"></i>
                                    DataTable Produits
                                </div>
                                <div class="border w-25">
                                    <input type="text" class="w-100 py-2 px-2 rounded text-secondary" placeholder="rechercher..." 
                                    v-model="searchR"/>
                                </div>
                            </div>
                            <table id="datatablesSimple" class="w-100 table">
                                    <thead>
                                        <tr class="border-bottom">
                                            <th>Image</th>
                                            <th>Nom</th>
                                            <th>Description</th>
                                            <th>prix</th>
                                            <th>Date de creation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr class="border-bottom">
                                            <th>Image</th>
                                            <th>Nom</th>
                                            <th>Description</th>
                                            <th>prix</th>
                                            <th>Date de creation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                       
                                        <tr class="border-bottom" v-for="(product, idx) in products" ::key="idx">
                                            <td></td>
                                            <td>{{ product.name }}</td>
                                            <td>{{ product.description }}</td>
                                            <td>{{ product.price }}</td>
                                            <td>{{ product.created_at }}</td>
                                            <td class="d-flex">
                                                <button class="btn"  @click="del(idx)"><i class="fa-solid fa-trash-can text-danger"></i></button>
                                                <router-link to="/productAdd" class="btn button"><i class="fa-solid fa-pen"></i></router-link>
                                            </td>
                                        </tr>
                                    </tbody>
            </table>
        </div>
                 
    </div>
</template>
<script>
import { productService } from "@/services";

export default {
    data() {
        return {
            products: [],
            show: false,
        }
    },

    methods: {
        del(idx){
            console.log(idx);
            this.products.splice(idx, 1);
        }
    },

      mounted() {
        productService.getAllprod()
            .then(res => {
                console.log("ici",res.data)
                let products = [];
                res.data.message.forEach(i => {
                    console.log("i", i.name);
                    products.push({
                        name: i.name,
                        description: i.description,
                        created_at: i.created_at,
                        price: i.price
                    })
                });
                this.products = products;
                console.log("nouveau tab", this.products);
                console.log(this.products, 'ioo');
            })
            .catch(err => console.log(err));

        
            
    }
}
</script>
<style lang="">
    
</style>