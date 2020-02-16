<template>
    <div id="app">
        <menu-bar></menu-bar>
        <AppSide></AppSide>
        <settings-modal name="settings" header="Settings"></settings-modal>
        <log-out-modal name="logOut" header="Log Out?"></log-out-modal>
        <notification-modal name="notificationModal" header="Notifications"></notification-modal>
        <router-view></router-view>
    </div>
</template>

<script>
import AppSide from './components/AppSide'
import MenuBar from './components/MenuBar'
import SettingsModal from './components/SettingsModal'
import LogOutModal from './components/LogOutModal'
import NotificationModal from './components/NotificationModal'
export default {
  components: {
    AppSide,
    MenuBar,
    SettingsModal,
    LogOutModal,
    NotificationModal
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
