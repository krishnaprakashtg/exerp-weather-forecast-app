import axios, { AxiosError } from "axios";
import { ErrorModel } from "../shared/server-response";

export interface ForecastModel {
  latitude: number;
  longitude: number;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: Date;
  };
}

export async function getWeatherForecast(
  lat: number,
  lng: number
): Promise<ForecastModel> {
  try {
    const data = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
    );
    console.log(data.data);
    return data.data;
  } catch (error: AxiosError | any) {
    throw new ErrorModel(error.message);
  }
}
