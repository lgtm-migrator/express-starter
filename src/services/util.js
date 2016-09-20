"use strict"

const Base = require("../lib/service-base")

/**
 * Util Service
 * 使用 req.services.util 访问实例
 */
class Util extends Base {

    /**
     * 返回一个hello字符串
     */
    sayHello() {
        return "hello";
    }

    /**
     * 显示this成员
     */
    showThis() {
        console.log(this)
    }

}


module.exports = {
    name: "util",
    service: Util
}