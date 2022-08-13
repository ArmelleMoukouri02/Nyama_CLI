<template lang="">
    <div>
        <div class="py-2">
            <div class="d-flex justify-content-between py-2">
            <h2>Liste des restaurants</h2>
            <button class="btn button" @click="show = !show">Nouveau restaurant</button>
        </div>
        <div class="w-100 card-header d-flex justify-content-between">
                                <div class="">
                                    <i class="fas fa-table me-1"></i>
                                    DataTable Restaurant
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
                                            <th>Menu</th>
                                            <th>adresse</th>
                                            <th>Date de creation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr class="border-bottom">
                                            <th>Image</th>
                                            <th>Nom</th>
                                            <th>Menu</th>
                                            <th>Adresse</th>
                                            <th>Date de creation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                       
                                        <tr class="border-bottom" v-for="(resto, idx) in search" :key="resto.id">
                                            <td>{{ resto.image }}</td>
                                            <td>{{ resto.name }}</td>
                                            <td>{{ resto.menu }}</td>
                                            <td>{{resto.adresse}}</td>
                                            <td>{{ resto.created_at }}</td>
                                            <td class="d-flex">
                                                <button class="btn" @click="del(idx)"><i class="fa-solid fa-trash-can text-danger"></i></button>
                                                <button class="btn button"  @click="show = !show"><i class="fa-solid fa-pen"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
            </table>
        </div>
         <Transition name="bounce">
            <div class="form-add d-flex justify-content-center position-absolute top-0 left-0 right-0 z-12 
            zindex-modal w-100 overlay align-items-center p-4" v-if="show">
            <button class="btn position-absolute right-0 top-0 bg-white m-2" 
            @click="show = !show">X</button>
                <form class=" bg-white overlay-content" @submit.prevent="ajoutResto">
                    <h3>Nouveau Restaurant</h3>
                    <div>
                        <div class="form-group py-1">
                            <label for="exampleInputEmail1">Nom</label>
                            <input type="text" class="form-control" 
                            v-model="restau.name">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">adresse</label>
                            <input type="text" class="form-control" v-model="restau.adresse">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Menu propose</label>
                            <input type="text" class="form-control" v-model="restau.menu">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Note</label>
                            <input type="text" class="form-control">
                        </div>
                        <button type="submit" class="btn button w-100">Enregister</button>
                    </div>
                </form>
            </div>
        </Transition>
        <Transition name="bounce">
            <div class="form-add d-flex justify-content-center position-absolute top-0 left-0 right-0 z-12 
            zindex-modal w-100 overlay align-items-center p-4" v-if="deleteM">
            <button class="btn position-absolute right-0 top-0 bg-white m-2" 
            @click="deleteM = !deleteM">X</button>
                <div class=" bg-white overlay-content text-center">
                        <div class="form-group py-1">
                            <p>Confirmer la suppression</p>
                            <button class="btn btn-info mx-2">Annuler</button>
                            <button class="btn btn-danger" >Confirmer</button>
                        </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script>
import { restaurantService } from "@/services";
export default {
    data(){
        return{
            restos: [],
            SearchR: "",
            deleteM: false,
            show: false,

            restau: {
                name: "",
                menu: "",
                adresse: "",
            }
        }
    },
    methods:{
        ajoutResto(){
            restaurantService.createResto(this.restau)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        },
        del(idx){
            console.log(idx);
            restaurantService.deleteResto(this.restos[idx].id)
                .then(res => this.restos.splice(idx, 1))
                .catch(err => console.log(err))
            // this.products.splice(idx, 1);
        }
    },
    mounted() {
        restaurantService.getAllresto()
            .then(res => {
                console.log("ici",res.data)
                let restos = [];
                res.data.Categories.forEach(i => {
                    console.log("i", i.name);
                    restos.push({
                        name: i.name,
                        adresse: i.adresse,
                        created_at: i.created_at,
                        menu: i.menu
                    })
                });
                this.restos = restos;
                console.log("nouveau tab", this.restos);
                console.log(this.restos, 'ioo');
            })
            .catch(err => console.log(err));

        
            
    },
    computed: {
        search(){
             const query = this.SearchR.toLowerCase()
            if(this.SearchR === ""){
                    console.log("ici search", this.restos);
                    return this.restos;
            }
                return this.restos.filter((resto) => {
                    console.log(resto.name);
                    return resto.name.toLowerCase().includes(query)
                })
        }
    }
}
</script>
<style lang="">
    
</style>