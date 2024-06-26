<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <div v-if="weatherInfo">
      <p><span>Temperature:</span> {{ weatherInfo.current_weather.temperature }}</p>
      <p><span>Wind Speed:</span> {{ weatherInfo.current_weather.windspeed }}</p>
      <p><span>Wind Direction:</span> {{ weatherInfo.current_weather.winddirection }}</p>
      <p><span>Weather Code:</span> {{ weatherInfo.current_weather.weathercode }}</p>
      <p><span>Time:</span> {{ weatherInfo.current_weather.time }}</p>
    </div>
    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
