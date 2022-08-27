import { createStore } from 'vuex'

import state from "../store/state";

import * as getters from "../store/getters";

import * as mutations from '../store/mutations';

import * as actions from '../store/actions';

// Create a new store instance.
export const store1 = createStore({
    state,
    getters,
    mutations,
    actions
})