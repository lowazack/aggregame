<template>
    <div>
        <div :class="`modal-bg modal-bg--${modalStatus}`" :style="bgStyle" @click="closeModal"></div>
        <div :class="`modal modal--${modalStatus}`" :style="modalStyle">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="modal__title">{{this.header}}</h3>
                </div>
                <div class="col-auto">
                    <button class="modal__exit" @click="closeModal">
                        <font-awesome-icon icon="times" />
                    </button>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    header: String
  },
  data: function () {
    return {
      modalStatus: false,
      bgStyle: {},
      modalStyle: {}
    }
  },
  mounted () {
    this.$root.$on('openModal', name => {
      console.log(name)
      if (name === this.name) {
        this.showModal()
      } else {
        this.closeModal()
      }
    })
  },
  methods: {
    showModal () {
      this.modalStatus = true
      setTimeout(() => {
        this.modalStyle = {
          transform: 'translate(-50%, -50%)',
          opacity: 1
        }
        this.bgStyle = {
          opacity: 1
        }
      }, 50)
    },
    closeModal () {
      this.modalStyle = {
        opacity: 0
      }
      this.bgStyle = {
        opacity: 1
      }
      setTimeout(() => {
        this.modalStatus = false
      }, 300)
    }
  }
}
</script>

<style lang="scss">
    $this: ".modal";

    #{$this}{
        overflow: scroll;
        transition: all 500ms ease-in-out;
        opacity: 0;
        z-index: 1000;
        position: fixed;
        background-color: $light-1;
        transform: translate(-50%, -30%);
        top: 50%;
        left: 50%;
        max-height: calc(100vh - 20px);
        max-width: calc(100vw);
        /*max-width: calc(100vw - 20px);*/
        border-radius: 10px;
        box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.75);
        padding: 20px;
        background-image: radial-gradient(
                circle at bottom left,
                darken($light-1, 2) 12.5% /* 1*12.5% */,
                $light-1 0, $light-1 25%   /* 2*12.5% */,
                darken($light-1, 2) 0, darken($light-1, 2) 37.5% /* 3*12.5% */,
                $light-1 0, $light-1 50%   /* 4*12.5% */,
                darken($light-1, 2) 0, darken($light-1, 2) 62.5% /* 5*12.5% */,
                $light-1 0, $light-1 75%   /* 6*12.5% */,
                darken($light-1, 2) 0, darken($light-1, 2) 87.5% /* 7*12.5% */,
                $light-1 0, $light-1 0);

        &-bg {
            transition: all 300ms ease-in-out;
            z-index: 999;
            position: fixed;
            width: 100vw;
            height: 100vh;
            background-color: #0000009e;
            left: 0;
            top: 0;
            &--false { display: none; }
            &--true { display: block; }
        }

        &__title {
            margin: 0;
        }

        &__exit {
            background-color: transparent;
            color: darken($light-2, 10);
            border: 0px solid transparent;
            font-size: 1.3rem;
            border-radius: 100%;
            width: 2.5rem;
            height: 2.5rem;
            transition: all 300ms ease-in-out;
            &:hover {
                background-color: $light-1;
                color: $primary;
                box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.14);
                transform: scale(1.1);
            }
            &:focus {
                outline: none;
            }
        }

        &--false {
            display: none;
        }
        &--true {
            display: block;
        }

    }
</style>
