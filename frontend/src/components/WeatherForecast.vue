<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>
    <div v-if="weatherInfo" class="p-8">
      <h1 class="flex justify-evenly p-4 text-lg border-b border-gray-300">
        <span class="flex-1">Temperature</span>
        <span class="flex-1">Wind Speed</span>
        <span class="flex-1">Wind Direction</span>
        <span class="flex-1">Weather Code</span>
        <span class="flex-1">Time</span>
      </h1>
      <div class="flex justify-evenly px-4 py-6 text-xl font-bold">
        <span class="flex-1">
          {{ weatherInfo.current_weather.temperature }}
          {{ weatherInfo.current_weather_units.temperature }}
        </span>
        <span class="flex-1">
          {{ weatherInfo.current_weather.windspeed }}
          {{ weatherInfo.current_weather_units.windspeed }}
        </span>
        <span class="flex-1">
          {{ weatherInfo.current_weather.winddirection }}
          {{ weatherInfo.current_weather_units.winddirection }}
        </span>
        <span class="flex-1">
          {{ weatherInfo.current_weather.weathercode }}
          {{ weatherInfo.current_weather_units.weathercode }}
        </span>
        <span class="flex-1">
          {{ new Date(weatherInfo.current_weather.time).toLocaleString() }}
        </span>
      </div>
    </div>
    <p v-if="error">{{ error.errorI18NMessage }}</p>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style></style>
