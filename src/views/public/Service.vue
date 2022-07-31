<template lang="">
    <div class="service">
        <div class="text-center container service_content">
            <h2 class="py-2">Nos incroyables services</h2>
            <p class="py-2">Bénéficiez d'une remise de 40% sur votre prochain festin en regardant cette vidéo</p>
            <div class="d-md-flex my-md-0 my-5">
                <div class="service_content-card border-bottom border-md-0 py-2">
                    <div><img src="../../assets/nyama_image/service-icon-1_300x300.webp" alt="" /></div><br />
                    <h3>Restaurants de qualité</h3>
                    <p>
                        Qectus urna duis convallis convallis tellus id. Nisl tincidunt eget nullam non nisie
                    </p>
                </div>
                <div class="service_content-card border-bottom py-2">
                    <div><img src="../../assets/nyama_image/service-icon-2_300x300.webp" alt="" /></div><br />
                    <h3>Nourriture de qualité</h3>
                    <p>
                        Onterdum velit euismod in pellentesque massa placerat duis ultricies nec ullamc
                    </p>
                </div>
                <div class="service_content-card border-bottom py-2">
                    <div><img src="../../assets/nyama_image/service-icon-3.webp" alt="" /></div><br />
                    <h3>Livraison rapide</h3>
                    <p>
                        Nunc scelerisque viverra mauris in aliquam. Porttitor massa id neque aliquamass
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .service{
        padding: 5rem 0;
        background-color: #faf4ed;
    }
    .service_content{
        padding: 0 3rem !important;
    }
    .service_content h3{
        font-size: 1.5rem;
        color: #e6571ef1;
        font-family: 'Fraunces', serif;
    }
    img{
        transition: transform .1s;
    }
    .service_content-card:hover img{
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari 3-8 */
        transform: scale(1.2);
    }
    @media screen and (min-width: 760px) {
        .service_content{
            padding: 0 6rem !important;
        }
    }
</style>