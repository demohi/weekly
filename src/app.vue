<template>
  <div class="ui grid">
    <div class="four wide column">
      <div v-component="menu-view"></div>
    </div>
    <div class="eleven wide column">
      <div v-component="cards-view"></div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    el: '#app',
    data: {
      view: 'cards-view'
    },
    components: {
      'menu-view': require('./components/menu.vue'),
      'cards-view': require('./views/cards.vue')
    }
  }
</script>
