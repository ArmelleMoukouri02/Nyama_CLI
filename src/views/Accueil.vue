<template>
  
    <div class="container-fluid">
        <div class="couverture">
            <div class="nav container-fluid" style="width: 1500px; padding: 0px;">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="width: 1500px; padding: 0px;">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="search">
                <form style=" width: 50vw; margin-left : 35vw;">
                    <br><br><br><br><br><input type="text" placeholder="Restaurants,plats..." style="border-radius: 10px; height: 40px; width: 300px"/> <br><br>
                    <input type="submit" value="Rechercher" style="border-radius: 10px; height: 40px; width: 300px"/>
                </form>
            </div>
        </div>
        
        <div class="carousell">

            <Carousel :items-to-show="2.5" :wrap-around="true">
                 <Slide v-for="(image, index) in images" :key="image.id">
                    <img :src="getImage(image.url)" />
                    <button v-if="slidesCount > 1" @click="deleteImage(index)">x</button>
                </Slide>
            </carousel>

        </div>

    </div>

</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: 'AccueilNav',

    components: {
      Carousel,
       Slide,
    },
});
</script>

<style>

</style>