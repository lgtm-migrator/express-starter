"use strict"

/**
 * Util Service
 */
class Util {

    constructor(app) {
        this.app = app;
        this.db = app.db;
        this.models = app.db.models;
    }

    sayHello() {
        console.log('hello');
    }

}


module.exports = {
    name: "util",
    service: Util
}