import { createStore } from "vuex";

export default createStore({
  state: {
    selectedPlace: {
      lat: null,
      lng: null,
    },
    showLoader: false,
  },
  getters: {
    getSelectedPlace: function (state) {
      return state.selectedPlace;
    },
    getLoaderStatus: function (state) {
      return state.showLoader;
    },
  },
  mutations: {
    UPDATE_SELECTED_PLACE(state, payload) {
      state.selectedPlace = payload;
    },
    TOGGLE_LOADER(state, payload) {
      state.showLoader = payload;
    },
  },
  actions: {
    updateSelectedPlace(context, payload) {
      context.commit("UPDATE_SELECTED_PLACE", payload);
    },
    toggleLoader(context, payload) {
      context.commit("TOGGLE_LOADER", payload);
    },
  },
  modules: {},
});
