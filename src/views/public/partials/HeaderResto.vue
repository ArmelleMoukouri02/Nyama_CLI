<template lang="">
    <div>
        <div class="header_resto">
            <img src="@/assets/nyama_image/slide-01.webp" alt="" />
            <div class="header_resto-text">
                Parcourer la lits de vos restaurants
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    img{
        width: 100%;
    }
    .header_resto{
        display: inline-block;
        position: relative;
    }
    .header_resto-text{
        z-index: 2;
        position: absolute;
        top: 30%;
        left: 12%;
        right: 0;
    }
</style>