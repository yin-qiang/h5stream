<template>
  <div id="app">
    <v-header></v-header>
    <v-content></v-content>
  </div>
</template>

<script>
  import Header from '@/components/header';
  import Content from '@/components/content';

  export default {
    name: 'H5S',
    components: {
      'v-header': Header,
      'v-content': Content
    }
  }
</script>
