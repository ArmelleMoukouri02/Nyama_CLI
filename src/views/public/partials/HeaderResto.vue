<template lang="">
    <div>
        <div class="header_resto py-5 py-md-0">
            <!-- <img src="" alt="" /> -->
            <div class="header_resto-text" data-aos="zoom-out" data-aos-duration="2000">
                <h2>Parcourir la lite de vos restaurants</h2>
                <Multiselect class="col-md" v-model="value"
                    :options="options" :label="value"
                    placeholder="Select restaurants" label=""></Multiselect>
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
.header_resto{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55vh;
    background-image: 
    linear-gradient(
        rgba(12, 11, 11, 0.753), 
        rgba(34, 34, 36, 0.692)
      ),
    url('../../../assets/nyama_image/breadcrumb.webp');
}
    img{
        width: 100%;
    }
    .header_resto-text{
        /* z-index: 2;
        position: absolute;
        top: 35%;
        left: 12%;
        right: 0;*/
        max-width: 60%; 
        text-align: center;
    }
    @media screen and (min-width: 760px) {
        .header_resto{
            height: 78vh;
        }
        .header_resto-text{
            /* z-index: 2;
            position: absolute;
            top: 35%;
            left: 12%;
            right: 0;
            width: 30%; */
        max-width: 30%; 

        }
        .header_resto h2{
            font-size: 3rem;
        }
    }
</style>