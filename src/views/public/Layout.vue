<template lang="">
    <div>
        <PublicNav />
        <router-view />
        <PublicFooter />
    </div>
</template>
<script>
import PublicNav from '@/components/PublicNav.vue';
import PublicFooter from '@/components/PublicFooter.vue';
export default {
    name: 'PublicLayout',
    components: {
        PublicNav,
        PublicFooter,
    }
}
</script>
<style scoped>
    
</style>