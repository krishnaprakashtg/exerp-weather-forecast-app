import { Options, Vue } from "vue-class-component";
import SearchCity from "@/components/SearchCity.vue";
import WeatherForecast from "@/components/WeatherForecast.vue";
import LoaderView from "@/views/LoaderView.vue";
import store from "../store/index";

@Options({
  components: {
    SearchCity,
    WeatherForecast,
    LoaderView,
  },
})
export default class HomeView extends Vue {
  showLoader = false;

  unwatch: any;
  mounted() {
    this.unwatch = store.watch(
      (state) => state.showLoader,
      (newVal: boolean, oldVal: boolean) => {
        this.showLoader = newVal;
      }
    );
  }

  beforeDestroy() {
    this.unwatch();
  }
}
