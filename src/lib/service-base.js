/**
 * Service基类
 * 用于构造this变量
 */
class Base {
    constructor(app) {
        this.app = app;
        this.db = app.db;
        this.models = app.db.models;
    }
}

module.exports = Base;