<template>
    <aside class="aside">
        <div class="aside__sidebar">
        </div>
    </aside>
</template>

<script>
export default {
  components: {
  }
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
    }
</style>
