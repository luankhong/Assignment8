(function(window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    function DataStore() {
        this.data = {};
    }

    function promiseResolvedWith(value) {
        var promise = new Promise(function(resolve) {
            resolve(value);
        });
        return promise;
    }

    DataStore.prototype.add = function() {
        return promiseResolvedWith(null);
    };

    DataStore.prototype.get = function(key) {
        return promiseResolvedWith(this.data[key]);
    };

    DataStore.prototype.getAll = function() {
        return promiseResolvedWith(this.data);
    };

    DataStore.prototype.remove = function() {
        return promiseResolvedWith(null);
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
