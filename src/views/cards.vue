<template>
  <div class="ui four cards">
    <div class="ui card" v-repeat="issues">
      <div class="content">
        <div class="header">{{title}}</div>
        <div class="meta">
          <div class="ui  labels">
            <a class="ui purple label" v-repeat="labels">
              {{name}}
            </a>
          </div>
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
  module.exports = {
    replace: true,
    data: function () {
      return {
        issues: []
      }
    },
    compiled: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        github.getIssues(function (err, res) {
          if (!err) {
            this.issues = res;
          }
        }.bind(this));
      }
    }
  }
</script>
