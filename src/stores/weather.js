import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore({
  id: 'books',
  state: () => ({
    placeData: null,
    placeWeatherForOneDay: null,
    placeWeatherForFiveDays: null,
    apiKey: '3ef73f2a4ef670c9442af0362e4c4a88',
    currentWeather: null,
    temperatures: [],
    temperaturesForFiveDays: [],
    dates: [],
    totalDates: [],
    savedPlacesWeather: [],
    loading: false,
    locales: 'ua'
  }),
  actions: {
    async getPlaceData(searchQuery) {
      this.loading = true
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&limit=5&lang=${this.locales}&appid=${this.apiKey}&units=metric`
        )
        this.placeData = data
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    async getPlaceWeather(lat, lon, apiKey) {
      if (!this.placeData) return
      try {
        this.loading = true
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        )
        this.placeWeatherForFiveDays = data
        const currentTime = Math.floor(Date.now() / 1000)
        const oneDayLater = currentTime + 24 * 60 * 60
        this.placeWeatherForOneDay = data.list.filter(
          (forecast) => forecast.dt >= currentTime && forecast.dt <= oneDayLater
        )
        this.temperaturesForFiveDays = this.mapTemperatures(this.placeWeatherForFiveDays.list)
        this.temperatures = this.mapTemperatures(this.placeWeatherForOneDay)
        this.dates = this.mapDates(this.placeWeatherForOneDay)
        this.totalDates = this.mapDates(this.placeWeatherForFiveDays.list)
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    getIconUrl(iconCode) {
      return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    },
    mapTemperatures(fillPerDays) {
      return fillPerDays.map((item) => item.main.temp)
    },
    mapDates(fillPerDays) {
      return fillPerDays.map((item) => item.dt_txt)
    },
    savePlaceWeather() {
      const placeExist = this.savedPlacesWeather.some(place => place.name === this.placeData.name)
      console.log(placeExist)
      if(this.savedPlacesWeather.length < 5 && !placeExist) this.savedPlacesWeather.push(this.placeData)
    },
    deleteTab(lat) {
      this.savedPlacesWeather = this.savedPlacesWeather.filter(item => item.coord.lat === lat)
    }
  }
})
