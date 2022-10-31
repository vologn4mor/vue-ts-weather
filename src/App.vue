<template>
  <h1>{{title}}</h1>
  <SearchBar @sendReq="sendReq" :error="error"/>
  
  <div class="container">
    <City v-for="city in cities" :city="city" @delete="deleteCity" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from './components/SearchBar.vue'
import City from './components/City.vue'
import {axiosGetData} from "./services/axios"

interface ICity {
  id: number
  cityName: string
  temp: string
  description: string
  iconUrl: string
}

var cities : ICity[] = []



export default defineComponent({
  name: 'App',
  data(){
    return {
      title: "Просмотр погоды!",
      cities,
      error: ''
    }
  },
  methods: {
     sendReq(cityName: string) {
      this.error = '' // очистка ошибки

      var checkCity =
      cities.filter(city => {
        return city.cityName == cityName // проверка на наличие города в уже имеющемся списке.
      })
      if(checkCity.length) {
        return;
      }

      axiosGetData(cityName).then(res => {   // запрос на сервер и добавление результата в массив
        this.cities.push(res as ICity)
        
      }).catch(e => {
        this.error = e.message
      });
    },
    deleteCity(id: number) {
      this.cities = this.cities.filter(city => {
        return city.id != id
      })
    },
  },
  components: {
    SearchBar,
    City
}
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
