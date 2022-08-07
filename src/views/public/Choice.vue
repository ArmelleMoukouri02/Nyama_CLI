<template lang="">
    <div class="choice">
        <!-- <h2 class="text-center my-4">Faites votre choix dans l'un de nos catalogues</h2>
        <div class="page-width flex">
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
        </div> -->

        <div class="resto_content d-md-flex align-items-center my-4 my-md-0">
            <div class="resto_content-text">
                <p class="text-name d-none d-md-block">Nyama Delivery</p>
                <h1 class="text-center text-md-start"><strong>recherchez vos restaurants</strong> 
                et commandez vos plats en ligne.</h1>
                <p class="text-p text-center text-md-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis gravida nibh vitae amet venenatis nulla. Habitant id scelerisque justo, varius proin etiam. Vel commodo commodo risus dui, vel, diam, eu fames turpis. Vitae posuere non nulla viverra. Blandit consequat nunc gravida egestas.
                </p>
                <div class="resto_content-img d-block d-md-none">
                    <img src="../../assets/nyama_image/delivery-concept.jpg" alt="" />
                </div>
                <div class="row my-2 my-md-0 justify-content-center justify-content-md-start mx-2">
                    <router-link to="/restaurants" class="col col-md-3  btn btn_resto py-3 px-2">Restaurants</router-link>
                    <button class="col-8 col-md-4 btn btn_contact py-3 px-2">Contacter Nous</button>
                </div>
            </div>
            <div class="resto_content-img d-none d-md-block">
                <img src="../../assets/nyama_image/delivery-concept.jpg" alt="" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /* .resto_content{
        flex-direction: column-reverse;
    } */
    .resto_content-img{
        max-width: 710px;
        max-height: 820px;
    }
    .resto_content-img img{
        width: 100%;
    }
    .resto_content-text .text-name{
        font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    text-transform: uppercase;
    color: #021339;
    }

    .resto_content-text h1 strong{
        color: #e6571ef1;
    }
    .resto_content-text h1{
        width: 100%;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 100%;
        letter-spacing: -0.03em;
    }
    .resto_content-text .text-p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.03em;
        color: #021339;
    }
    .resto_content-text .row{
        gap: .6rem;
    }
   .btn_contact , .btn_resto{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 47px;
        color: #fff;
        background: #e6571ef1;
        border-radius: 8px;
    }
    .btn_contact{
        background: #021339;
    }

    .btn:hover{
        color: #f5f5f5;
    }

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
  @media screen and (min-width: 1200px) {
        .flex{
            margin: 0 12rem !important;
        }
    }
  @media screen and (min-width: 760px) {
        .choice-all{
            height: 300px;
            width: 100%;
        }
        .flex{
            display: flex;
            margin: 0 2rem;
        }
        .resto_content-text h1{
            width: 630px;
            font-weight: 800;
            font-size: 48px;
        }
        .resto_content-text .text-p{
            width: 522px;
        }
    }
</style>