import { Options, Vue } from 'vue-class-component';
import store from "../store/index";

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;

  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    store.dispatch("updateSelectedPlace", this.selectedPlace);
  }


}