<template>

</template>

<script>
import { default as locations } from  'src/transportation_route_list.json'

export default {
  name: "MapLoader",
  // where to compute the location from the json file.
  computed: {
    markers () {
      return locations.map(({label, location: {lat, lon}}) => ({
        label,
        position: {
          lat: Number.parseFloat(lat),
          lon: Number.parseFloat(lon)
        }
      }))
    }
  }
}
</script>

<style scoped>

</style>
