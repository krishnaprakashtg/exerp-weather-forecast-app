<template>
  <div class="hello">
    <h1 v-if="res" class="flex items-center justify-center">
      <span class="text-2xl font-bold">Weather forecast for city</span>
      <span class="w-8 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        </svg>
      </span>
    </h1>
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
