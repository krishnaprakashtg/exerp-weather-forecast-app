<template>
  <div class="home">
    <SearchCity />
    <WeatherForecast />
  </div>
  <LoaderView v-if="showLoader" />
</template>

<script lang="ts" src="./home.component.ts"></script>
