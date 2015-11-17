"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) {
            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
                resolve(value);
            });
        }
        function onfulfill(value) {
            try {
                step("next", value);
            } catch (e) {
                reject(e);
            }
        }
        function onreject(value) {
            try {
                step("throw", value);
            } catch (e) {
                reject(e);
            }
        }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var server_1 = require('../server');
function get(route, handler) {
    server_1.server.route({
        method: 'GET',
        path: route,
        handler: handler
    });
}
exports.get = get;
function post(route, handler) {
    server_1.server.route({
        method: 'POST',
        path: route,
        handler: handler
    });
}
exports.post = post;
function put(route, handler) {
    server_1.server.route({
        method: 'PUT',
        path: route,
        handler: handler
    });
}
exports.put = put;
function del(route, handler) {
    server_1.server.route({
        method: 'DELETE',
        path: route,
        handler: handler
    });
}
exports.del = del;
//# sourceMappingURL=add.js.map