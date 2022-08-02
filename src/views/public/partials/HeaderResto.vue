<template lang="">
    <div>
        <div class="header_resto py-5 py-md-0">
            <img src="@/assets/nyama_image/slide-01.webp" alt="" />
            <div class="header_resto-text">
                <h2>Parcourer la lits de vos restaurants</h2>
                <Multiselect class="col-md" v-model="value"
                    :options="options" :custom-label="value"
                    placeholder="Select one" label=""></Multiselect>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from '@vueform/multiselect'
export default {
    components:{
        Multiselect,
    },
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
        top: 35%;
        left: 12%;
        right: 0;
        width: 60%;
    }
    @media screen and (min-width: 760px) {
        .header_resto-text{
            z-index: 2;
            position: absolute;
            top: 35%;
            left: 12%;
            right: 0;
            width: 30%;
        }
        .header_resto h2{
            font-size: 3rem;
        }
    }
</style>