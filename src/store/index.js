import { createStore } from 'vuex'

import { SET_NOTE } from '@/store/mutation-types';

// Create a new store instance.
const store = createStore({
  state: {
    currentResto: {},
    restos: [{
      id: 1,
      title: "Arrietty : Le Petit Monde des Chapardeurs",
      image: require('@/assets/nyama_image/arrietty.jpg'),
      note: 3,
    },
    {
      id: 2,
      title: "Le Château Ambulant",
      image: require('@/assets/nyama_image/chateau_ambulant.jpg'),
      note: 5,
    },
    {
      id: 3,
      title: "Le Voyage de Chihiro",
      image: require('../assets/nyama_image/chihiro.jpg'),
      note: 5,
    },
    {
      id: 4,
      title: "Kiki la Petite Sorcière",
      image: require('@/assets/nyama_image/kiki.jpg'),
      note: 4,
    },{
      id: 5,
      title: "Le Vent se lève",
      image: require('@/assets/nyama_image/le_vent_se_leve.jpg'),
      note: 5,
    },
    {
      id: 6,
      title: "Porco Rosso",
      image: require('@/assets/nyama_image/porco_rosso.jpg'),
      note: 4,
    },
    {
      id: 7,
      title: "Princesse Mononoké",
      image: require('@/assets/nyama_image/princesse_mononoke.jpg'),
      note: 5,
    },
    {
      id: 8,
      title: "Mon voisin Totoro",
      image: require('@/assets/nyama_image/totoro.jpg'),
      note: 4,
    }]
  },
  getters: {
    getRestos(state) {
      return state.restos;
    },
    getCurrentResto(state) {
      return state.currentResto;
    }
  },
  mutations: {
    setCurrentResto (state, resto) {
      state.currentResto = resto;
    },
    setCurrentRestoVersionMutation (state, restoId) {
      let restoFound = {};
      state.restos.forEach((resto) => {
        if (restoId == resto.id) {
          restoFound = resto;
        }
      });
      state.currentResto = restoFound;
    },
    [SET_NOTE] (state, note) {
      state.currentResto.note = note;
    }
  },
  actions: {
    setCurrentResto ({commit, state}, restoId) {
      let restoFound = {};
      state.restos.forEach((resto) => {
        if (restoId == resto.id) {
          restoFound = resto;
        }
      })
      commit('setCurrentResto', restoFound);
    }
  }
})

export default store;