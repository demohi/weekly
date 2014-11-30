/**
 * Created by mdemo on 14/11/24.
 */

var config = require('../config');
var reqwest = require('reqwest');
var base = 'https://api.github.com/';
var repos = base + 'repos/';

module.exports = {
  getIssues: function (label, callback) {
    var url = repos + config.repo + '/issues';
    if(label){
      url += ('?labels=' + label);
    }
    reqwest({
      url: url,
      type: 'json',
      method: 'get'
    }).then(function (res) {
      callback(null, res);
    }, function (err, msg) {
      callback(err, msg);
    })
  },
  getLabels: function (callback) {
    reqwest({
      url: repos + config.repo + '/labels',
      type: 'json',
      method: 'get'
    }).then(function (res) {
      callback(null, res);
    }, function (err, msg) {
      callback(err, msg);
    })
  }
};
