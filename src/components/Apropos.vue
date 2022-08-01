<template lang="">
    <div class="slide my-5 text-center container">
        <div class="d-md-flex justify-content-center align-items-center my-4"
        >
            <img class="col-5 col-md-4" src="../assets/nyama_image/slide1.webp" alt="" 
            data-aos="fade-up"/>
            <div class="col-md-5" data-aos="zoom-out-down">
                <h2>Apropos de Nous</h2>
                <p>
                    Nyama vous met en relation avec les meilleurs 
                    et restaurants les plus proches de vous et supermarches
                </p>
                <button class="btn btn-eat">En savoir +</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .btn-eat{
        background-color: #e6571ef1;
        color: #fff;
    }
    .slide{
        padding: 2rem 0;
        overflow-x: hidden;
    }
    @media screen and(min-width: 760px) {
        .slide{
            padding: 6rem 0;
        }
    }
</style>