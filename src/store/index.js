import { createStore } from 'vuex'

import { SET_NOTE } from '@/store/mutation-types';

import state from "../store/state";

import * as getters from "../store/getters";

import * as mutations from '../store/mutations';

import * as actions from '../store/actions';

// Create a new store instance.
const store = new createStore({
  // state: {
  //   currentResto: {},
  //   restos: [{
  //     id: 1,
  //     title: "Le Safoutier",
  //     image: require('@/assets/nyama_image/le-safoutier.jpg'),
  //     note: 3,
  //   },
  //   {
  //     id: 2,
  //     title: "Le Yaahot Hotel",
  //     image: require('@/assets/nyama_image/restaurant.jpg'),
  //     note: 5,
  //   },
  //   {
  //     id: 3,
  //     title: "Village-Noa",
  //     image: require('../assets/nyama_image/Village-Noa.webp'),
  //     note: 5,
  //   },
  //   {
  //     id: 4,
  //     title: "Merina restaurant",
  //     image: require('@/assets/nyama_image/merina.jpg'),
  //     note: 4,
  //   },{
  //     id: 5,
  //     title: "RELAIS PORTE MAYO",
  //     image: require('@/assets/nyama_image/relais.jpg'),
  //     note: 5,
  //   },
  //   {
  //     id: 6,
  //     title: "K-HOTEL",
  //     image: require('@/assets/nyama_image/K-Hotel.jpg'),
  //     note: 4,
  //   },
  //   {
  //     id: 7,
  //     title: "Resto Mononoké",
  //     image: require('@/assets/nyama_image/photo5.jpg'),
  //     note: 5,
  //   },
  //   {
  //     id: 8,
  //     title: "Mon voisin Totoro",
  //     image: require('@/assets/nyama_image/photo9.jpg'),
  //     note: 4,
  //   }]
  // },
  // getters: {
  //   getRestos(state) {
  //     return state.restos;
  //   },
  //   getCurrentResto(state) {
  //     return state.currentResto;
  //   }
  // },
  // mutations: {
  //   setCurrentResto (state, resto) {
  //     state.currentResto = resto;
  //   },
  //   setCurrentRestoVersionMutation (state, restoId) {
  //     let restoFound = {};
  //     state.restos.forEach((resto) => {
  //       if (restoId == resto.id) {
  //         restoFound = resto;
  //       }
  //     });
  //     state.currentResto = restoFound;
  //   },
  //   [SET_NOTE] (state, note) {
  //     state.currentResto.note = note;
  //   }
  // },
  // actions: {
  //   setCurrentResto ({commit, state}, restoId) {
  //     let restoFound = {};
  //     state.restos.forEach((resto) => {
  //       if (restoId == resto.id) {
  //         restoFound = resto;
  //       }
  //     })
  //     commit('setCurrentResto', restoFound);
  //   }
  // }
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
})

global.store= store;

export default store;