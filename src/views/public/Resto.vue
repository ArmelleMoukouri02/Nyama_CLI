<template>
  <div class="resto" style="height: ;">

    <div class="resto__background" :style="{backgroundImage: 'url(\'' + resto.image + '\')'}"></div>
    <div class="resto__img">
            <img :src="'' + resto.image + '/'" alt="" />
    </div>
    <router-link :to="{name :'home'}" class="resto__back">← Retour</router-link>
    <h1 class="resto__title">{{resto.title}}</h1>
    <div class="d-flex justify-content-between
                            slide-text my-2">
        <ul class="d-flex resto__note">
            <li v-for="i in 5" :key="i" :class="{'resto__star': true, 'resto__star--dark' : i > resto.note}"
                                      @click="updateNote(i)">
                <i class="fa-solid fa-star"></i>
            </li>
        </ul>
        <span class="text-secondary">4.5/(473)</span>
      </div>
    <h3>Liste de menu du restaurants {{resto.title}} proposees sont :</h3>
    <!-- <div v-for="(menu, idx) in menu" :key="idx">
      <menu :review="menu"/>
    </div> -->
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
    padding-bottom: 154%;
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

  .card{
        transition:all .6s ease;
    }
    .card:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
    }
    .slide-map{
        cursor: pointer;
    }

</style>