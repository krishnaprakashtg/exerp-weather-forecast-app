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
    this.dispatchEvent()
  }

  handleMapClick(event: any){
    this.selectedPlace = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    this.dispatchEvent()
  }

  dispatchEvent() {
    store.dispatch("updateSelectedPlace", this.selectedPlace);
  }

}