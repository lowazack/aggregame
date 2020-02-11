<template>
    <div id="app">
        <AppSide></AppSide>
        <router-view></router-view>
    </div>
</template>

<script>
import AppSide from './components/AppSide'
export default {
  components: {
    AppSide
  },
  name: 'App'
}
</script>

<style lang="scss">
    #app {
        min-height: 100vh;
        background-color: $white;
        display: flex;
    }
</style>
