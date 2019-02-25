import log from "./log";
const _log = log(true, "filters");

import Vue from "vue";

export default (function() {
  _log("Vue global filters initialized");

  Vue.filter("capitalize", function(value) {
    if (!value) return "";
    value = value.toString();
    value.charAt(0).toUpperCase() + value.slice(1);
    return value;
  });
  Vue.filter("uppercase", function(value) {
    if (!value) return "";
    value = value.toString().toUpperCase();
    return value;
  });
})();
