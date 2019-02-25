import Vue from "vue";
import accounting from "accounting-js";

import log from "./log";
const _log = log(true, "filters");

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

  Vue.filter("currency", function(value) {
    if (!value) return "";
    value = accounting.formatMoney(value,{ symbol: "EUR", precision: 2, thousand: ".", decimal: "," ,format :'%s %v'})
    return value;
  });
})();
