var fs = require('fs');
var YAML = require('yamljs');
var jf = require('jsonFile');
var S = require('string');

var me = module.exports

me.deleteKey= function(obj, key) {
  function traverse(obj){
    for (i in obj) {
        if (typeof(obj[i])=="object") {
            if( obj[i] == key){
              delete obj[i];
            }
            traverse(obj[i]);
        }
    }
  }
}


me.updateKey= function(obj, key, objectAdd) {
  function traverse(obj){
    for (i in obj) {
        if (typeof(obj[i])=="object") {
            if( obj[i] == key){
              //TODO obj[i];
            }
            traverse(obj[i]);
        }
    }
  }
}

me.updateContent= function(obj, key, objectAdd) {
  function traverse(obj){
    for (i in obj) {
        if (typeof(obj[i])=="object") {
            if( obj[i] == key){
              //TODO obj[i];
            }
            traverse(obj[i]);
        }
    }
  }
}

me.createKey= function(obj, key, objectAdd) {
  function traverse(obj){
    for (i in obj) {
        if (typeof(obj[i])=="object") {
            if( obj[i] == key){
              //TODO obj[i];
            }
            traverse(obj[i]);
        }
    }
  }
}

me.findByKey= function(obj, key, objectAdd) {
  function traverse(obj){
    for (i in obj) {
        if (typeof(obj[i])=="object") {
            if( obj[i] == key){
              //TODO obj[i];
            }
            traverse(obj[i]);
        }
    }
  }
}

me.findByContent= function(obj, key, objectAdd) {
  function traverse(obj){
    for (i in obj) {
        if (typeof(obj[i])=="object") {
            if( obj[i] == key){
              //TODO obj[i];
            }
            traverse(obj[i]);
        }
    }
  }
}
