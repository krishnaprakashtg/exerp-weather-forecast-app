import WeatherService, {
  ForecastModel,
} from "@/services/weather-service.service";
import { Options, Vue } from "vue-class-component";
import { Inject } from "vue-property-decorator";
import store from "../store/index";
import { ErrorModel } from "../shared/backend-api";

@Options({
  props: {},
})
export default class WeatherForecast extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;

  weatherInfo: ForecastModel | null = null;
  unwatch: any;
  error: ErrorModel | null = null;
  mounted() {
    this.unwatch = store.watch(
      (state) => state.selectedPlace,
      (newVal: { lat: number | null; lng: number | null }) => {
        const { lat, lng } = newVal;
        if (lat && lng) {
          store.dispatch("toggleLoader", true);
          this.weatherService
            .getWeatherForecast(lat, lng)
            .then((res) => {
              this.weatherInfo = res;
              store.dispatch("toggleLoader", false);
            })
            .catch((err) => {
              this.error = err;
              store.dispatch("toggleLoader", false);
            });
        }
      }
    );
  }

  beforeDestroy() {
    this.unwatch();
  }
}
