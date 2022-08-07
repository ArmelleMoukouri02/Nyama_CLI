<template lang="">
    <div class="">
        <HeaderResto />
        <div class="row m-0 py-2">
            <div class="col py-4">
                <h5>Trier Par</h5>
                <ul>
                    <button class="btn">
                        <i class="fa-solid fa-circle-dot"></i><span class="text-secondary mx-1">Restaurant Pizza</span>
                    </button>
                    <li>
                        <i class="fa-solid fa-circle-dot"></i><span class="text-secondary mx-1">Restaurant traditionnels</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle-dot"></i><span class="text-secondary mx-1">Restaurant Senegalais</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle-dot"></i><span class="text-secondary mx-1">Pizza</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle-dot"></i><span class="text-secondary mx-1">Pizza</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle-dot"></i><span class="text-secondary mx-1">Pizza</span>
                    </li>
                </ul>
            </div>
            <div class="col-10 py-4">
                <div class="container px-5 d-flex justify-content-between align-items-center">
                    <h2>Liste des Restaurants</h2>
                    <div class="form-group my-3 w-25 d-flex justify-content-center">
                        <input type="text" v-model="SearchKey"
                        class="form-control" name="" id=""  placeholder="recherchez un restaurant">
                    </div>
                </div>
                <div class="restos row justify-content-center m-0">
                    <router-link :to="{name: 'resto', params : { id : resto.id}}" class="card d-flex justify-content-between px-0 col-4 col-md-6" style="width: 18rem;"
                    v-for="(resto, idx) in restos" :key="idx">
                        <img :src="'' + resto.image + '/'" alt="" class="card-img-top img-resto"/>
                            <div class="card-body">
                            <p class="resto__title">{{resto.title}}</p>
                            <!-- <div class="resto__note">
                                <span v-for="i in 5" :key="i" :class="{'resto__star': true, 'resto__star--dark' : i > resto.note}">⭐</span>
                            </div> -->
                            <div class="d-flex justify-content-between
                                slide-text my-2">
                                    <ul class="d-flex resto__note">
                                        <li v-for="i in 5" :key="i" :class="{'resto__star': true, 'resto__star--dark' : i > resto.note}">
                                            <i class="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                <span class="text-secondary">4.5/(473)</span>
                            </div>
                            <button class="btn button w-100">Entrez</button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderResto from "./partials/HeaderResto.vue";
export default {
    components: {
        HeaderResto,
    },
    data() {
        return {
            restaurants: [],
            SearchKey: '',
        }
    },
     computed:  {
        restos() {

        // Direct access
        // return this.$store.state.restos;

        // Getters and search
        const query = this.SearchKey.toLowerCase()
        this.restaurants = this.$store.getters.getRestos
        if(this.SearchKey === ""){
                console.log("ici search", this.restaurants);
                return this.restaurants;
            }
            return this.restaurants.filter((resto) => {
                return resto.title.toLowerCase().includes(query)
            })
        },
    }
}
</script>
<style scoped>
    .restos{
        gap: 1rem;
    }
    .restos .card-body{
        flex: none !important;
    }
    .content_card{
        gap: .7rem;
    }
    .card{
        transition:all .6s ease;
    }
    .card:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    ul, h5{
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
    }
    li{
        color: rgb(253, 173, 25);
    }
    .slide-text{
        font-size: .8rem;
    }
    .slide-map{
        cursor: pointer;
    }
    img{
        width: 100%;
    }
    .button{
        background: #e6571ef1;
        color: #fff;
    }
    .button:hover{
        color: #fff;
    }
    .img-resto{
    }
</style>