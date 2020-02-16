<template>
<div class="menu">
    <div class="menu__user">
        <button class="menu__button">
            <font-awesome-icon icon="user" />
        </button>
        <modal-trigger name="notificationModal" trigger-title="Settings" trigger-class="menu__button">
            <font-awesome-icon icon="bell" />
        </modal-trigger>
    </div>
    <div class="menu__sports">
        <button class="menu__button" title="trending">
            <font-awesome-icon icon="fire" />
        </button>
        <button v-for="(icon, key) in activeIcons" :key="key" class="menu__button" :title="sportIcons[icon].name">
            <font-awesome-icon :icon="sportIcons[icon].icon" />
        </button>
    </div>
    <div class="menu__settings">
        <modal-trigger name="settings" trigger-title="Settings" trigger-class="menu__button">
            <font-awesome-icon icon="cog" />
        </modal-trigger>
        <modal-trigger name="logOut" trigger-title="Log Out" trigger-class="menu__button">
            <font-awesome-icon icon="power-off" />
        </modal-trigger>
    </div>
</div>
</template>

<script>
import ModalTrigger from './ModalTrigger'
export default {
  components: {
    ModalTrigger
  },
  data: function () {
    return {
      sportIcons: {
        soccer: {
          icon: 'futbol',
          name: 'Football'
        },
        football: {
          icon: 'football-ball',
          name: 'Football USA'
        },
        baseball: {
          icon: 'baseball-ball',
          name: 'Baseball'
        },
        basketball: {
          icon: 'basketball-ball',
          name: 'Basketball'
        },
        rugby: {
          icon: 'running',
          name: 'Rugby'
        },
        tennis: {
          icon: 'racquet',
          name: 'Tennis'
        },
        motorsport: {
          icon: 'car',
          name: 'Motorsport'
        },
        combat: {
          icon: 'fist-raised',
          name: 'Combat'
        },
        golf: {
          icon: 'golf-ball',
          name: 'Golf'
        },
        hockey: {
          icon: 'hockey-puck',
          name: 'Hockey'
        }
      },
      activeIcons: [
        'soccer',
        'football',
        'baseball',
        'basketball',
        'rugby',
        'motorsport',
        'combat',
        'golf',
        'hockey'
      ]
    }
  }
}
</script>

<style lang="scss">
$this: ".menu";
#{$this}{
    padding: 10px;
    background-color: $primary;
    display: flex;
    flex-direction: column;
    border-radius: 0 7px 7px 0;

    &__button {
        font-size: 1.3rem;
        border-radius: 100%;
        width: 2.5rem;
        height: 2.5rem;
        background-color: #ffffff17;
        border: none;
        transition: all 300ms ease-in-out;
        color: #efefef;
        margin-bottom: 10px;
        position: relative;

        &:hover {
            box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.14);
            background-color: #ffffff80;
            color: white;
            transform: scale(1.1);
        }
        &:focus {
            outline: none;
        }

        &--active {
            background-color: white;
            color: $primary;
            &:hover {
                background-color: white;
                color: $primary;
            }
        }
    }

    &__user {
        display: flex;
        flex-direction: column;
        #{$this}__button {
            background-color: transparent;
        }
    }
    &__sports {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    &__settings {
        display: flex;
        flex-direction: column;
        #{$this}__button {
            background-color: transparent;
        }
    }
}
</style>
