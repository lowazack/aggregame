<template>
    <button @click="openModal" :class="this.triggerClass" :title="this.triggerTitle">
        <slot></slot>
    </button>
</template>
<script>
export default {
  props: {
    name: String,
    triggerClass: String,
    triggerTitle: String
  },
  methods: {
    openModal () {
      console.log('clicked')
      this.$root.$emit('openModal', this.name)
    }
  }
}
</script>
