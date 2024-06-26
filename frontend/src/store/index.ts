import { createStore } from "vuex";

export default createStore({
  state: {
    selectedPlace: {
      lat: null,
      lng: null,
    },
  },
  getters: {
    getSelectedPlace: function (state) {
      return state.selectedPlace;
    },
  },
  mutations: {
    UPDATE_SELECTED_PLACE(state, payload) {
      state.selectedPlace = payload;
    },
  },
  actions: {
    updateSelectedPlace(context, payload) {
      context.commit("UPDATE_SELECTED_PLACE", payload);
    },
  },
  modules: {},
});
