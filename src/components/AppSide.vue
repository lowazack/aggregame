<template>
    <aside class="aside">
        <div class="aside__menu">
            <button class="aside__button aside__button--active">
                <font-awesome-icon icon="ellipsis-v" />
            </button>
            <button class="aside__button">
                <font-awesome-icon icon="ellipsis-v" />
            </button>
        </div>
        <div class="aside__sidebar">
            sdfs
        </div>
    </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    $this: ".aside";
    #{$this} {
        height: 100vh;
        display: flex;

        &__sidebar {
            width: 500px;
            background-color: $light-2;
            padding: 1rem
        }

        &__menu {
            padding: 2rem 10px;
            background-color: $primary;
            display: flex;
            flex-direction: column;
        }

        &__button {
            font-size: 1.3rem;
            border-radius: 100%;
            width: 2.5rem;
            height: 2.5rem;
            background-color: #ffffff17;
            border: none;
            transition: all 300ms ease-in-out;
            color: #c9cad1;
            margin-bottom: 10px;
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
    }
</style>
