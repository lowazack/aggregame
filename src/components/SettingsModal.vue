<template>
<Modal :name="this.name" :header="this.header">
    <div class="settings">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Facilisis mauris sit amet massa vitae tortor. Lorem ipsum dolor sit amet consectetur adipiscing. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Leo duis ut diam quam nulla porttitor massa id. Dictum varius duis at consectetur lorem donec massa sapien. Eget nullam non nisi est sit. Eget nulla facilisi etiam dignissim diam quis enim. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed.

            Elit ut aliquam purus sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Lobortis mattis aliquam faucibus purus in massa tempor. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Sed tempus urna et pharetra pharetra massa. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Malesuada fames ac turpis egestas integer eget aliquet. Ut tortor pretium viverra suspendisse potenti nullam ac. Sem fringilla ut morbi tincidunt augue interdum. Sed id semper risus in hendrerit gravida rutrum. Nulla pharetra diam sit amet nisl suscipit adipiscing. Risus in hendrerit gravida rutrum quisque non tellus. Porta lorem mollis aliquam ut. Eu non diam phasellus vestibulum lorem sed. Diam maecenas ultricies mi eget mauris pharetra et.
        </p>
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
<style lang="scss" scoped>
$this: '.settings';
#{$this}{
    width: calc(100vw - 70px);
    max-width: 1000px;
}
</style>
