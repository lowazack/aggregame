<template>
<Modal :name="this.name" :header="this.header">
    <div class="text-center">
        <button class="btn btn-warn rounded">Log Out</button>
    </div>
</Modal>
</template>
<script>
import Modal from './Modal'
export default {
  components: {
    Modal
  },
  props: {
    name: String,
    header: String
  }
}
</script>
<style lang="scss">
$this: '.log-out';
#{$this}{
}
</style>
