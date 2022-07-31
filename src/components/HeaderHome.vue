<template lang="">
    <div class="header">
        <!-- <img class="d-block d-md-none" src="../assets/nyama_image/mob-1.webp" alt="" /> -->
        <img class="d-none d-md-block" src="../assets/nyama_image/slider.webp" alt="" />
        <div class="header_text">
            <div class="text-center">
                <h2>Bienvenue sur votre catalogue de restaurants</h2>
                <h3>Faite vous livrer partous</h3>
                <p>Nyama est votre plateforme vous permettant de trouver des restaurants plus proches de vous et passer des commandes</p>
            </div>
            <div class="row px-4">
                <button class="btn btn-eat py-2 my-1 col-md-5 mx-md-2">
                    <i class="fa-brands fa-angellist"></i>
                    Catalogue restaurant
                </button>
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
    name: 'HeaderHome',
    components:{
        Multiselect,
    },
    data() {
        return {
            value: null,
            options: ['Pizza dore', 'Lgm', 'TchopYamo']
        }
    },
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
    .header{
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(187, 89, 71, 0.73)),
        url('../assets/nyama_image/mob-1.webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 2rem;
    }
    .header_text{
        margin: auto;
    }
    .header_text h2{
        color: #e6571ef1;
        font-size: 2.5rem;
        font-family: 'Fraunces', serif;
    }
    .btn-eat{
        background-color: #e6571ef1;
        color: #fff;
    }
    .header_text p{
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        margin: 1rem 0;
    }
    img{
        width: 100%;
    }
    @media screen and (min-width: 760px) {
        .header_text h2{
            font-size: 3rem;
        }
        .header_text{
            z-index: 2;
            position: absolute;
            margin: 0;
            left: 8%;
            right: 0;
            top: 12%;
            width: 40%;
        }
        .header{
            display: inline-block;
            position: relative;
            background-image: none !important;
            padding: 0;
        }
    }
</style>