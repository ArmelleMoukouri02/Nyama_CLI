<template lang="">
    <div class="choice">
        <h2 class="text-center my-4">Faites votre choix dans l'un de nos catalogues</h2>
        <div class="choice-all choice_resto">
            <h2><strong>Restaurants</strong></h2>
            <li>
                <i class="fa-solid fa-arrow-right fa-2x"></i>
            </li>
        </div>
        <div class="choice-all choice_market">
            <h2><strong>Super-marches</strong></h2>
            <li>
                <i class="fa-solid fa-arrow-right fa-2x"></i>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .choice-all{
        height: 220px;
        border-radius: .8rem;
        margin: .6rem 0;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transition: all .6s;
    }
    .choice-all:hover{
        background-size: 120%;
    }
    .choice_market{
        background-image: url('../../assets/nyama_image/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg');
    }

    .choice_resto{
        background-image: url('../../assets/nyama_image/mae-mu-TkzdkVn1AyA-unsplash.jpg');
    }
    .choice-all li{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        border-radius: 50px;
        background: #ee926da2;
        color: #fff;
    }
    h2{
      color: #e6571ef1;
      font-family: 'Fraunces', serif;
  }
</style>