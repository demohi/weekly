<template>
  <div class="ui one cards" v-with="label:label">
    <div class="ui  card" v-repeat="issues">
      <div class="content">
        <div class="description" v-html=" body| marked">
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
          <img class="ui avatar image" v-attr="src: user.avatar_url"> {{user.login}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var github = require('../lib/github');
  var marked = require('marked');
  module.exports = {
    replace: true,
    data: function () {
      return {
        issues: [],
        label: ''
      }
    },
    filters: {
      marked: marked
    },
    compiled: function () {
      this.getData();
      this.$watch('label', this.getData)
    },
    methods: {
      getData: function () {
        github.getIssues(this.label, function (err, res) {
          if (!err) {
            this.issues = res;
          }
        }.bind(this));
      }
    }
  }
</script>
