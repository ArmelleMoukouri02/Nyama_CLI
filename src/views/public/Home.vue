<template lang="">
    <div class="bg-red">
        <HeaderHome />
        <div class="p-2">
            <Choice class=""/>
            <Slide />
        </div>
    </div>
</template>
<script>
import HeaderHome from '@/components/HeaderHome.vue';
import Choice from './Choice.vue';
import Slide from '@/components/Slide.vue';
export default {
    components: {
        HeaderHome,
        Choice,
        Slide,
    }
}
</script>
<style scoped>
    
</style>