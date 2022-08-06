<template lang="">
    <div class="container-fluid py-5">
        <h2 class="text-center my-4">Vos Restaurants</h2>
        <div class="container d-md-flex content_card py-4">
            <div class="card my-2 mx-auto" style="width: 18rem;" v-for="card in 4" :key="card">
                <img src="../../assets/nyama_image/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title my-2">Cafe Badifico</p>
                    <div class="d-flex justify-content-between
                    slide-text my-2">
                        <ul class="d-flex">
                            <li v-for="etoile in 5" :key="etoile">
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                        <span class="text-secondary">4.5/(473)</span>
                    </div>
                    <p class="card-text p-2 border d-flex justify-content-between pointer slide-map"
                    @click="openMaps()">
                        <span>Activer Maps </span>
                        <span class="text-secondary"><i class="fa-solid fa-map-location"></i></span>
                    </p>
                    <button class="btn button w-100">Entrez</button>
                </div>
            </div>
            <div class="container-map" v-if="mapsdialog" @click="closeMaps()">
                <li class="map-close right-0 my-2" @click="closeMaps()"><i class="fa-solid fa-xmark"></i></li>
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="bg-white p-2 border-r maps">
                        <h3>Cafe Bodifico</h3>
                        <div>Notre Maps ici</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <router-link to="/restaurants" class="btn button my-4">+ de restaurants</router-link>
        </div>
    </div>
</template>
<script>

  
export default {
    name: 'RestoSlide',
    components: { 
       
    },
    data() {
        return {
            mapsdialog : false,
        }
    },
    methods: {
        openMaps(){
            this.mapsdialog = true
        },
        closeMaps(){
            this.mapsdialog = false
        }
    }
}
</script>
<style scoped>
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
    .container-map{
        z-index: 80;
        height: 100vh;
        position: fixed;
        width: 100%;
        inset: 0;
        background: rgba(77, 75, 74, 0.329);
        transition: all .1s ease;
    }
    .maps{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .map-close{
        height: 50px;
        width: 50px;
        border-radius: .4rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 12px;
        background: #fff;
        padding: 1rem;
    }
    .button{
        width:12rem;
        background: #e6571ef1;
        color: #fff !important;
    }
    .button:hover{
        color: #fff;
    }
    .content_card{
        gap: .7rem;
    }
</style>