<template>
  <div class="content">
    <router-view :key="$store.state.activeDate"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'v-content',
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style scoped>
  .content {
    padding: 50px 10px 10px;
  }
</style>
