<template>
  <div class="ui vertical menu">
    <a class="item"><b>Home</b></a>

    <div class="item">
      Labels
      <div class="menu">
        <a class="item" v-repeat="labels">
          {{name}}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  var github = require('../lib/github');
  module.exports = {
    replace: true,
    data: function () {
      return {
        labels: []
      }
    },
    compiled: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        github.getLabels(function (err, res) {
          if (!err) {
            this.labels = res;
          }
        }.bind(this));
      }
    }
  }
</script>
