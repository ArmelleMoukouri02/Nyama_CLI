<template lang="">
    <div class="bg-red">
        <HeaderHome />
        <div class="p-2 container">
            <Choice class=""/>
            <Slide />
        </div>
        <RestoSlide class="slideR"/>
        <Service />
    </div>
</template>
<script>
import HeaderHome from '@/components/HeaderHome.vue';
import Choice from './Choice.vue';
import RestoSlide from './RestoSlide.vue';
import Slide from '@/components/Apropos.vue';
import Service from './Service.vue'
export default {
    components: {
        HeaderHome,
        Choice,
        Slide,
        RestoSlide,
        Service,
    }
}
</script>
<style scoped>
    .slideR{
        background-color: #fffdfa !important;
    }
</style>