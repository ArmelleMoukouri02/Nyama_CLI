<template>
  <div class="resto" style="height: ;">

    <div class="resto__background" :style="{backgroundImage: 'url(\'' + resto.image + '\')'}"></div>
    <div class="resto__img">
            <img :src="'' + resto.image + '/'" alt="" />
    </div>
    <router-link :to="{name :'home'}" class="resto__back">← Retour</router-link>
    <h1 class="resto__title">{{resto.title}}</h1>
    <div class="d-flex justify-content-md-center justify-content-between
                            slide-text my-2">
        <ul class="d-flex resto__note">
            <li v-for="i in 5" :key="i" :class="{'resto__star': true, 'resto__star--dark' : i > resto.note}"
                                      @click="updateNote(i)">
                <i class="fa-solid fa-star"></i>
            </li>
        </ul>
        <span class="text-secondary">4.5/(473)</span>
      </div>
    
    <div class="containe row py-md-3">
      <div class="menu_filter my-2 my-md-0 col-12 col-md">
        <div class="card px-1">
          <div class="card-body border-bottom">
            <h5 class="card-title text-muted text-start py-2"><i class="fa-solid fa-list-check mx-1"></i>Filtrer par</h5>
            <button class="btn border w-100 d-flex justify-content-between align-items-center">
              <i class="fa-solid fa-circle-dot color-nyama"></i>
              Menu restaurant
            </button><br />
            <button class="btn border w-100 d-flex justify-content-between align-items-center">
              <i class="fa-solid fa-circle-dot text-muted"></i>
              Bar restaurant
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title text-start text-muted py-2"><i class="fa-solid fa-calendar-days mx-1"></i> Heure d'ouverture</h5>
            <ul class="menu_filter-open">
              <li class="d-flex justify-content-between align-items-center py-2 my-2">
                <span>Lundi</span>
                <span>09h - 22h</span>
              </li>
              <li class="d-flex justify-content-between align-items-center py-2 my-2">
                <span>Mardi</span>
                <span>09h - 22h</span>
              </li>
              <li class="d-flex justify-content-between align-items-center py-2 my-2">
                <span>Mercredi</span>
                <span>09h - 22h</span>
              </li>
              <li class="d-flex justify-content-between align-items-center py-2 my-2">
                <span>Jeudi</span>
                <span>10h30 - 22h</span>
              </li>
              <li class="d-flex justify-content-between align-items-center py-2 my-2">
                <span>Vendredi</span>
                <span>09h - 22h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu_list col-12 col-md-9">
        <div class="d-md-flex align-items-center border-bottom">
          <h3><i class="fa-solid fa-clipboard-check mx-2"></i>Menu chez {{resto.title}} :</h3>
          <div class="form-group my-3 m-auto d-flex justify-content-between align-items-center
          border border-2 rounded px-2">
            <input type="text" v-model="SearchKey"
              class="form-control border-0" name="" id=""  placeholder="recherchez un restaurant">
              <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="py-4">
          <div class="menu_list-card card border-0 mx-auto mx-md-0" style="width: 18rem;">
            <div class="card-body menu_list-card-bg rounded rounded-md">
            </div>
            <div>
              <h5 class="card-title menu-title px-2 my-1">Pizza janbon gras</h5>
              <div class="d-flex justify-content-between align-items-center my- px-2">
                <li class="menu-prix">2500fcfa</li>
                <button class="menu-cart border rounded-circle p-2"
                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <i class="fa-solid fa-cart-arrow-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-for="(menu, idx) in menu" :key="idx">
      <menu :review="menu"/>
    </div> -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="menu-title" id="offcanvasRightLabel">Votre Panier</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
        </button>
      </div>
      <div class="offcanvas-body">
        ...
      </div>
    </div>
  </div>
</template>

<script>

import { SET_NOTE } from '@/store/mutation-types';

export default {
  name: 'Resto',
  props: ['id'],
  components: {
   
  },
  created () {
    // mutation
    // this.$store.commit('setCurrentrestoVersionMutation', this.id);

    // action
    console.log("icic aussi", this.$store.dispatch('setCurrentresto', this.id));
    this.$store.dispatch('setCurrentResto', this.id);
  },
  computed: {
    resto() {
      console.log("yes", this.$store.getters.getCurrentResto)
      return this.$store.getters.getCurrentResto;
    }
  },
  data: function () {
    return {
      resto_id1 : [{
          id: 1,
            title: "Le Petit Monde des Chapardeurs",
            image: require('@/assets/nyama_image/resto1.webp'),
            note: 3,
            },
            {
            id: 2,
            title: "Le Château Ambulant",
            image: require('@/assets/nyama_image/resto2.webp'),
            note: 5,
            },
            {
            id: 3,
            title: "Le Voyage de Chihiro",
            image: require('@/assets/nyama_image/resto3.webp'),
            note: 5,
            },
            {
            id: 4,
            title: "Kiki la Petite Sorcière",
            image: require('@/assets/nyama_image/Wings.webp'),
            note: 4,
        }],
        resto_id2 : [{
          id: 1,
            title: "Le Petit Monde des Chapardeurs",
            image: require('@/assets/nyama_image/resto1.webp'),
            note: 3,
            },
            {
            id: 2,
            title: "Le Château Ambulant",
            image: require('@/assets/nyama_image/resto2.webp'),
            note: 5,
            },
            {
            id: 3,
            title: "Le Voyage de Chihiro",
            image: require('@/assets/nyama_image/resto3.webp'),
            note: 5,
            },
            {
            id: 4,
            title: "Kiki la Petite Sorcière",
            image: require('@/assets/nyama_image/Wings.webp'),
            note: 4,
        }],
        resto_id3 : [{
          id: 1,
            title: "Le Petit Monde des Chapardeurs",
            image: require('@/assets/nyama_image/resto1.webp'),
            note: 3,
            },
            {
            id: 2,
            title: "Le Château Ambulant",
            image: require('@/assets/nyama_image/resto2.webp'),
            note: 5,
            },
            {
            id: 3,
            title: "Le Voyage de Chihiro",
            image: require('@/assets/nyama_image/resto3.webp'),
            note: 5,
            },
            {
            id: 4,
            title: "Kiki la Petite Sorcière",
            image: require('@/assets/nyama_image/Wings.webp'),
            note: 4,
        }]
    }
  },
  methods: {
    updateNote: function (newNote) {
      // HARDCODED NAME
      // this.$store.commit('setNote', newNote);

      // CONSTANT MUTATION
      this.$store.commit(SET_NOTE, newNote);
    }
  }
}
</script>

<style scoped>
  .resto {
    min-height: 100vh;
    max-width: 400px;
    margin: 0 auto;
    padding:32px;
    text-align: center;
  }

  .resto__back {
    color:#333;
    font-weight: 300;
    text-decoration: none;
    margin-top: 16px;
    display: inline-block;
  }

  .resto__img {
    max-width: 400px;
    height: 0;
    padding-bottom: 150%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    border-radius:16px;
  }
  .resto__img img{
    width: 100%;
    padding-top: 40%;
  }

  .resto__background {
    padding: 32px;
    background-size: cover;
    background-position: center center;
    filter: blur(8px);
    height: 400px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
  }

  .resto__title {
    font-size: 24px;
    padding: 8px;
    font-weight: normal;
    color:#333;
  }

    
  .resto__star {
    text-shadow: 0 0 8px #ffdc188c, 0 0 16px #ffffff54;
  }

  .resto__star:hover {
    cursor:pointer;
  }

  .resto__star--dark {
    opacity:0.5;
    text-shadow: none;
  }

    ul, h5{
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
    }
    li{
        color: rgb(253, 173, 25);
    }
    .slide-text{
        font-size: .8rem;
        gap: 1.5rem;
    }
    .slide-map{
        cursor: pointer;
    }
    .color-nyama{
      color: #e6571ef1;
    }

    .form-control:focus{
      border: none !important;
    }

    .menu_filter-open li{
      border-bottom: 1px dashed #aaa;
    }

    .menu_list-card-bg{
      height: 10rem ;
      background-image: url('../../assets/nyama_image/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .menu-cart{
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .menu-title{
      color: #e6571ef1;
      font-family: 'Fraunces', serif;
      text-align: left;
    }

    .menu-prix{
      font-family: 'Fraunces', serif;
    }

@media screen and (min-width: 760px) {
    .resto {
    max-width: 100% !important;
  }
  .resto__img {
    max-width: 400px;
    padding-bottom: 44% !important;
  }
}
</style>