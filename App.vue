<template>
  <div id="app">
    <div v-if="viewingMap == false">
    <battle></battle>
  </div>
  <div v-else>
    <world :viewingMap="viewingMap"
            @selectRegion="selectRegion"></world>
  </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import World from './components/World.vue'
import Battle from './components/Battle.vue'
export default {
  name: 'app',
  data () {
    return {
      viewingMap: true,
      inDungeon: false,
    }
  },
  computed: {
   
  },
  components: {
    Menu,
    World,
    Battle
  },
  methods: {
          selectRegion() {
        this.isModalVisible = false;
        this.viewingMap = !this.viewingMap;
      }
   }
 }
</script>

