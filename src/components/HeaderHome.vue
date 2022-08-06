<template lang="">
    <div class="header p-3">
        <div class="header_text text-center">
            <h2>Bienvenue sur votre catalogue de restaurants</h2>
            <h3>Faite vous livrer partous</h3>
            <p>Nyama est votre plateforme vous permettant de trouver des restaurants plus proches de vous et passer des commandes</p>
        </div>
        <div>
            <button class="btn btn-eat w-100 py-2 my-1">
                <i class="fa-brands fa-angellist"></i>
                Catalogue restaurant
            </button>
        </div>
        <div>
            <Multiselect v-model="value"
                :options="options" :custom-label="value"
                placeholder="Select one" label=""></Multiselect>
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
        url('../assets/nyama_image/mob-1_768x940.webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .header_text{

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
</style>