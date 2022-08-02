<template lang="">
    <div class="">
        <HeaderResto />
        <div>
            <h1>restaurants list</h1>
            <rou class="restos">
                <div :to="{name: 'resto', params : { id : resto.id}}" class="resto" v-for="(resto, idx) in restos" :key="idx">
                <div class="resto__image" :style="{backgroundImage: 'url(\'' + resto.image + '\')'}"/>
                <h2 class="resto__title">{{resto.title}}</h2>
                <div class="resto__note">
                    <span v-for="i in 5" :key="i" :class="{'resto__star': true, 'resto__star--dark' : i > resto.note}">⭐</span>
                </div>
                </div>
            </rou>
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
            return this.$store.getters.getResto;
        }
    }
}
</script>
<style lang="">
    
</style>