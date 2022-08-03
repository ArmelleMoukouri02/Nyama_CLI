<template lang="">
    <div class="">
        <HeaderResto />
        <div>
            <h1>restaurants list</h1>
            <div class="restos row">
                <router-link :to="{name: 'resto', params : { id : resto.id}}" class="card col-4 col-md" style="width: 18rem;"
                v-for="(resto, idx) in restos" :key="idx">
                    <img :src="'' + resto.image + '/'" alt="" />
                        <div class="card-body">
                        <h3 class="resto__title">{{resto.title}}</h3>
                        <div class="resto__note">
                            <span v-for="i in 5" :key="i" :class="{'resto__star': true, 'resto__star--dark' : i > resto.note}">⭐</span>
                        </div>
                    </div>
                </router-link>
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
     computed:  {
        restos() {

        // Direct access
        // return this.$store.state.restos;

        // Getters
        console.log(this.$store.getters.getRestos);
            return this.$store.getters.getRestos;
        }
    }
}
</script>
<style lang="">
    
</style>