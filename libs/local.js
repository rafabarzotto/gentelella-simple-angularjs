// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
    module.exports === exports) {
    // Export the *name* of this Angular module
    // Sample usage:
    //
    //   import lbServices from './lb-services';
    //   angular.module('app', [lbServices]);
    //
    module.exports = "lbServices";
}

(function(window, angular, undefined) {
    'use strict';

    // var urlBase = "http://env-7653969.jelasticlw.com.br/api";
    var urlBase = "http://localhost:3000/api";
    var authHeader = 'authorization';

    function getHost(url) {
        var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
        return m ? m[1] : null;
    }

    var urlBaseHost = getHost(urlBase) || location.host;

    /**
     * @ngdoc overview
     * @name lbServices
     * @module
     * @description
     *
     * The `lbServices` module provides services for interacting with
     * the models exposed by the LoopBack server via the REST API.
     *
     */
    var module = angular.module("lbServices", ['ngResource']);

    /**
     * @ngdoc object
     * @name lbServices.Customer
     * @header lbServices.Customer
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Customer` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Customer", [
            'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
            function(LoopBackResource, LoopBackAuth, $injector, $q) {
                var R = LoopBackResource(
                    urlBase + "/customers/:id", {
                        'id': '@id'
                    }, {

                        // INTERNAL. Use Customer.orders.findById() instead.
                        "prototype$__findById__orders": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/customers/:id/orders/:fk",
                            method: "GET",
                        },

                        // INTERNAL. Use Customer.orders.destroyById() instead.
                        "prototype$__destroyById__orders": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/customers/:id/orders/:fk",
                            method: "DELETE",
                        },

                        // INTERNAL. Use Customer.orders.updateById() instead.
                        "prototype$__updateById__orders": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/customers/:id/orders/:fk",
                            method: "PUT",
                        },

                        // INTERNAL. Use Customer.orders() instead.
                        "prototype$__get__orders": {
                            isArray: true,
                            url: urlBase + "/customers/:id/orders",
                            method: "GET",
                        },

                        // INTERNAL. Use Customer.orders.create() instead.
                        "prototype$__create__orders": {
                            url: urlBase + "/customers/:id/orders",
                            method: "POST",
                        },

                        // INTERNAL. Use Customer.orders.destroyAll() instead.
                        "prototype$__delete__orders": {
                            url: urlBase + "/customers/:id/orders",
                            method: "DELETE",
                        },

                        // INTERNAL. Use Customer.orders.count() instead.
                        "prototype$__count__orders": {
                            url: urlBase + "/customers/:id/orders/count",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#create
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Create a new instance of the model and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "create": {
                            url: urlBase + "/customers",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#createMany
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Create a new instance of the model and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Array.<Object>,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Array.<Object>} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "createMany": {
                            isArray: true,
                            url: urlBase + "/customers",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#upsert
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Patch an existing model instance or insert a new one into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "upsert": {
                            url: urlBase + "/customers",
                            method: "PUT",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#replaceOrCreate
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Replace an existing model instance or insert a new one into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "replaceOrCreate": {
                            url: urlBase + "/customers/replaceOrCreate",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#upsertWithWhere
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Update an existing model instance or insert a new one into the data source based on the where criteria.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "upsertWithWhere": {
                            url: urlBase + "/customers/upsertWithWhere",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#exists
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Check whether a model instance exists in the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `exists` – `{boolean=}` -
                         */
                        "exists": {
                            url: urlBase + "/customers/:id/exists",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#findById
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Find a model instance by {{id}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         *  - `filter` – `{object=}` - Filter defining fields and include
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "findById": {
                            url: urlBase + "/customers/:id",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#replaceById
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Replace attributes for a model instance and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "replaceById": {
                            url: urlBase + "/customers/:id/replace",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#find
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Find all instances of the model matched by filter from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                         *
                         * @param {function(Array.<Object>,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Array.<Object>} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "find": {
                            isArray: true,
                            url: urlBase + "/customers",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#findOne
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Find first instance of the model matched by filter from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "findOne": {
                            url: urlBase + "/customers/findOne",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#updateAll
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Update instances of the model matched by {{where}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Information related to the outcome of the operation
                         */
                        "updateAll": {
                            url: urlBase + "/customers/update",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#deleteById
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Delete a model instance by {{id}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "deleteById": {
                            url: urlBase + "/customers/:id",
                            method: "DELETE",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#count
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Count instances of the model matched by where from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `count` – `{number=}` -
                         */
                        "count": {
                            url: urlBase + "/customers/count",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#prototype$updateAttributes
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Patch attributes for a model instance and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - customer id
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Customer` object.)
                         * </em>
                         */
                        "prototype$updateAttributes": {
                            url: urlBase + "/customers/:id",
                            method: "PUT",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Customer#createChangeStream
                         * @methodOf lbServices.Customer
                         *
                         * @description
                         *
                         * Create a change stream.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         *  - `options` – `{object=}` -
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `changes` – `{ReadableStream=}` -
                         */
                        "createChangeStream": {
                            url: urlBase + "/customers/change-stream",
                            method: "POST",
                        },

                        // INTERNAL. Use Order.customer() instead.
                        "::get::Order::customer": {
                            url: urlBase + "/orders/:id/customer",
                            method: "GET",
                        },
                    }
                );



                /**
                 * @ngdoc method
                 * @name lbServices.Customer#patchOrCreate
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Customer` object.)
                 * </em>
                 */
                R["patchOrCreate"] = R["upsert"];

                /**
                 * @ngdoc method
                 * @name lbServices.Customer#updateOrCreate
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Customer` object.)
                 * </em>
                 */
                R["updateOrCreate"] = R["upsert"];

                /**
                 * @ngdoc method
                 * @name lbServices.Customer#patchOrCreateWithWhere
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Update an existing model instance or insert a new one into the data source based on the where criteria.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Customer` object.)
                 * </em>
                 */
                R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

                /**
                 * @ngdoc method
                 * @name lbServices.Customer#update
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Update instances of the model matched by {{where}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Information related to the outcome of the operation
                 */
                R["update"] = R["updateAll"];

                /**
                 * @ngdoc method
                 * @name lbServices.Customer#destroyById
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Customer` object.)
                 * </em>
                 */
                R["destroyById"] = R["deleteById"];

                /**
                 * @ngdoc method
                 * @name lbServices.Customer#removeById
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Customer` object.)
                 * </em>
                 */
                R["removeById"] = R["deleteById"];

                /**
                 * @ngdoc method
                 * @name lbServices.Customer#patchAttributes
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Patch attributes for a model instance and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Customer` object.)
                 * </em>
                 */
                R["patchAttributes"] = R["prototype$updateAttributes"];


                /**
                 * @ngdoc property
                 * @name lbServices.Customer#modelName
                 * @propertyOf lbServices.Customer
                 * @description
                 * The name of the model represented by this $resource,
                 * i.e. `Customer`.
                 */
                R.modelName = "Customer";

                /**
                 * @ngdoc object
                 * @name lbServices.Customer.orders
                 * @header lbServices.Customer.orders
                 * @object
                 * @description
                 *
                 * The object `Customer.orders` groups methods
                 * manipulating `Order` instances related to `Customer`.
                 *
                 * Call {@link lbServices.Customer#orders Customer.orders()}
                 * to query all related instances.
                 */


                /**
                 * @ngdoc method
                 * @name lbServices.Customer#orders
                 * @methodOf lbServices.Customer
                 *
                 * @description
                 *
                 * Queries orders of customer.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 *  - `filter` – `{object=}` -
                 *
                 * @param {function(Array.<Object>,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Array.<Object>} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R.orders = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::get::Customer::orders"];
                    return action.apply(R, arguments);
                };

                /**
                 * @ngdoc method
                 * @name lbServices.Customer.orders#count
                 * @methodOf lbServices.Customer.orders
                 *
                 * @description
                 *
                 * Counts orders of customer.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number=}` -
                 */
                R.orders.count = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::count::Customer::orders"];
                    return action.apply(R, arguments);
                };

                /**
                 * @ngdoc method
                 * @name lbServices.Customer.orders#create
                 * @methodOf lbServices.Customer.orders
                 *
                 * @description
                 *
                 * Creates a new instance in orders of this model.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R.orders.create = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::create::Customer::orders"];
                    return action.apply(R, arguments);
                };

                /**
                 * @ngdoc method
                 * @name lbServices.Customer.orders#createMany
                 * @methodOf lbServices.Customer.orders
                 *
                 * @description
                 *
                 * Creates a new instance in orders of this model.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Array.<Object>,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Array.<Object>} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R.orders.createMany = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::createMany::Customer::orders"];
                    return action.apply(R, arguments);
                };

                /**
                 * @ngdoc method
                 * @name lbServices.Customer.orders#destroyAll
                 * @methodOf lbServices.Customer.orders
                 *
                 * @description
                 *
                 * Deletes all orders of this model.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 *  - `where` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                R.orders.destroyAll = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::delete::Customer::orders"];
                    return action.apply(R, arguments);
                };

                /**
                 * @ngdoc method
                 * @name lbServices.Customer.orders#destroyById
                 * @methodOf lbServices.Customer.orders
                 *
                 * @description
                 *
                 * Delete a related item by id for orders.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 *  - `fk` – `{*}` - Foreign key for orders
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * This method returns no data.
                 */
                R.orders.destroyById = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::destroyById::Customer::orders"];
                    return action.apply(R, arguments);
                };

                /**
                 * @ngdoc method
                 * @name lbServices.Customer.orders#findById
                 * @methodOf lbServices.Customer.orders
                 *
                 * @description
                 *
                 * Find a related item by id for orders.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 *  - `fk` – `{*}` - Foreign key for orders
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R.orders.findById = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::findById::Customer::orders"];
                    return action.apply(R, arguments);
                };

                /**
                 * @ngdoc method
                 * @name lbServices.Customer.orders#updateById
                 * @methodOf lbServices.Customer.orders
                 *
                 * @description
                 *
                 * Update a related item by id for orders.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - customer id
                 *
                 *  - `fk` – `{*}` - Foreign key for orders
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R.orders.updateById = function() {
                    var TargetResource = $injector.get("Order");
                    var action = TargetResource["::updateById::Customer::orders"];
                    return action.apply(R, arguments);
                };


                return R;
            }
        ]);

    /**
     * @ngdoc object
     * @name lbServices.Order
     * @header lbServices.Order
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Order` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Order", [
            'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
            function(LoopBackResource, LoopBackAuth, $injector, $q) {
                var R = LoopBackResource(
                    urlBase + "/orders/:id", {
                        'id': '@id'
                    }, {

                        // INTERNAL. Use Order.customer() instead.
                        "prototype$__get__customer": {
                            url: urlBase + "/orders/:id/customer",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#create
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Create a new instance of the model and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "create": {
                            url: urlBase + "/orders",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#createMany
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Create a new instance of the model and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Array.<Object>,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Array.<Object>} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "createMany": {
                            isArray: true,
                            url: urlBase + "/orders",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#upsert
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Patch an existing model instance or insert a new one into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "upsert": {
                            url: urlBase + "/orders",
                            method: "PUT",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#replaceOrCreate
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Replace an existing model instance or insert a new one into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "replaceOrCreate": {
                            url: urlBase + "/orders/replaceOrCreate",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#upsertWithWhere
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Update an existing model instance or insert a new one into the data source based on the where criteria.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "upsertWithWhere": {
                            url: urlBase + "/orders/upsertWithWhere",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#exists
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Check whether a model instance exists in the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `exists` – `{boolean=}` -
                         */
                        "exists": {
                            url: urlBase + "/orders/:id/exists",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#findById
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Find a model instance by {{id}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         *  - `filter` – `{object=}` - Filter defining fields and include
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "findById": {
                            url: urlBase + "/orders/:id",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#replaceById
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Replace attributes for a model instance and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "replaceById": {
                            url: urlBase + "/orders/:id/replace",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#find
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Find all instances of the model matched by filter from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                         *
                         * @param {function(Array.<Object>,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Array.<Object>} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "find": {
                            isArray: true,
                            url: urlBase + "/orders",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#findOne
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Find first instance of the model matched by filter from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "findOne": {
                            url: urlBase + "/orders/findOne",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#updateAll
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Update instances of the model matched by {{where}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Information related to the outcome of the operation
                         */
                        "updateAll": {
                            url: urlBase + "/orders/update",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#deleteById
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Delete a model instance by {{id}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "deleteById": {
                            url: urlBase + "/orders/:id",
                            method: "DELETE",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#count
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Count instances of the model matched by where from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `count` – `{number=}` -
                         */
                        "count": {
                            url: urlBase + "/orders/count",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#prototype$updateAttributes
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Patch attributes for a model instance and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - order id
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `Order` object.)
                         * </em>
                         */
                        "prototype$updateAttributes": {
                            url: urlBase + "/orders/:id",
                            method: "PUT",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.Order#createChangeStream
                         * @methodOf lbServices.Order
                         *
                         * @description
                         *
                         * Create a change stream.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         *  - `options` – `{object=}` -
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `changes` – `{ReadableStream=}` -
                         */
                        "createChangeStream": {
                            url: urlBase + "/orders/change-stream",
                            method: "POST",
                        },

                        // INTERNAL. Use Customer.orders.findById() instead.
                        "::findById::Customer::orders": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/customers/:id/orders/:fk",
                            method: "GET",
                        },

                        // INTERNAL. Use Customer.orders.destroyById() instead.
                        "::destroyById::Customer::orders": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/customers/:id/orders/:fk",
                            method: "DELETE",
                        },

                        // INTERNAL. Use Customer.orders.updateById() instead.
                        "::updateById::Customer::orders": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/customers/:id/orders/:fk",
                            method: "PUT",
                        },

                        // INTERNAL. Use Customer.orders() instead.
                        "::get::Customer::orders": {
                            isArray: true,
                            url: urlBase + "/customers/:id/orders",
                            method: "GET",
                        },

                        // INTERNAL. Use Customer.orders.create() instead.
                        "::create::Customer::orders": {
                            url: urlBase + "/customers/:id/orders",
                            method: "POST",
                        },

                        // INTERNAL. Use Customer.orders.createMany() instead.
                        "::createMany::Customer::orders": {
                            isArray: true,
                            url: urlBase + "/customers/:id/orders",
                            method: "POST",
                        },

                        // INTERNAL. Use Customer.orders.destroyAll() instead.
                        "::delete::Customer::orders": {
                            url: urlBase + "/customers/:id/orders",
                            method: "DELETE",
                        },

                        // INTERNAL. Use Customer.orders.count() instead.
                        "::count::Customer::orders": {
                            url: urlBase + "/customers/:id/orders/count",
                            method: "GET",
                        },
                    }
                );



                /**
                 * @ngdoc method
                 * @name lbServices.Order#patchOrCreate
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R["patchOrCreate"] = R["upsert"];

                /**
                 * @ngdoc method
                 * @name lbServices.Order#updateOrCreate
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R["updateOrCreate"] = R["upsert"];

                /**
                 * @ngdoc method
                 * @name lbServices.Order#patchOrCreateWithWhere
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Update an existing model instance or insert a new one into the data source based on the where criteria.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

                /**
                 * @ngdoc method
                 * @name lbServices.Order#update
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Update instances of the model matched by {{where}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Information related to the outcome of the operation
                 */
                R["update"] = R["updateAll"];

                /**
                 * @ngdoc method
                 * @name lbServices.Order#destroyById
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R["destroyById"] = R["deleteById"];

                /**
                 * @ngdoc method
                 * @name lbServices.Order#removeById
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R["removeById"] = R["deleteById"];

                /**
                 * @ngdoc method
                 * @name lbServices.Order#patchAttributes
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Patch attributes for a model instance and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - order id
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Order` object.)
                 * </em>
                 */
                R["patchAttributes"] = R["prototype$updateAttributes"];


                /**
                 * @ngdoc property
                 * @name lbServices.Order#modelName
                 * @propertyOf lbServices.Order
                 * @description
                 * The name of the model represented by this $resource,
                 * i.e. `Order`.
                 */
                R.modelName = "Order";


                /**
                 * @ngdoc method
                 * @name lbServices.Order#customer
                 * @methodOf lbServices.Order
                 *
                 * @description
                 *
                 * Fetches belongsTo relation customer.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - order id
                 *
                 *  - `refresh` – `{boolean=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Customer` object.)
                 * </em>
                 */
                R.customer = function() {
                    var TargetResource = $injector.get("Customer");
                    var action = TargetResource["::get::Order::customer"];
                    return action.apply(R, arguments);
                };


                return R;
            }
        ]);

    /**
     * @ngdoc object
     * @name lbServices.User
     * @header lbServices.User
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `User` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "User", [
            'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
            function(LoopBackResource, LoopBackAuth, $injector, $q) {
                var R = LoopBackResource(
                    urlBase + "/users/:id", {
                        'id': '@id'
                    }, {

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$__findById__accessTokens
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Find a related item by id for accessTokens.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         *  - `fk` – `{*}` - Foreign key for accessTokens
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "prototype$__findById__accessTokens": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/users/:id/accessTokens/:fk",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$__destroyById__accessTokens
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Delete a related item by id for accessTokens.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         *  - `fk` – `{*}` - Foreign key for accessTokens
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * This method returns no data.
                         */
                        "prototype$__destroyById__accessTokens": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/users/:id/accessTokens/:fk",
                            method: "DELETE",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$__updateById__accessTokens
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Update a related item by id for accessTokens.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         *  - `fk` – `{*}` - Foreign key for accessTokens
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "prototype$__updateById__accessTokens": {
                            params: {
                                'fk': '@fk',
                            },
                            url: urlBase + "/users/:id/accessTokens/:fk",
                            method: "PUT",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$__get__accessTokens
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Queries accessTokens of user.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         *  - `filter` – `{object=}` -
                         *
                         * @param {function(Array.<Object>,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Array.<Object>} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "prototype$__get__accessTokens": {
                            isArray: true,
                            url: urlBase + "/users/:id/accessTokens",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$__create__accessTokens
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Creates a new instance in accessTokens of this model.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "prototype$__create__accessTokens": {
                            url: urlBase + "/users/:id/accessTokens",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$__delete__accessTokens
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Deletes all accessTokens of this model.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         *  - `where` – `{object=}` -
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * This method returns no data.
                         */
                        "prototype$__delete__accessTokens": {
                            url: urlBase + "/users/:id/accessTokens",
                            method: "DELETE",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$__count__accessTokens
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Counts accessTokens of user.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `count` – `{number=}` -
                         */
                        "prototype$__count__accessTokens": {
                            url: urlBase + "/users/:id/accessTokens/count",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#create
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Create a new instance of the model and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "create": {
                            url: urlBase + "/users",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#createMany
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Create a new instance of the model and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Array.<Object>,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Array.<Object>} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "createMany": {
                            isArray: true,
                            url: urlBase + "/users",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#upsert
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Patch an existing model instance or insert a new one into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "upsert": {
                            url: urlBase + "/users",
                            method: "PUT",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#replaceOrCreate
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Replace an existing model instance or insert a new one into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "replaceOrCreate": {
                            url: urlBase + "/users/replaceOrCreate",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#upsertWithWhere
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Update an existing model instance or insert a new one into the data source based on the where criteria.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "upsertWithWhere": {
                            url: urlBase + "/users/upsertWithWhere",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#exists
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Check whether a model instance exists in the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `exists` – `{boolean=}` -
                         */
                        "exists": {
                            url: urlBase + "/users/:id/exists",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#findById
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Find a model instance by {{id}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         *  - `filter` – `{object=}` - Filter defining fields and include
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "findById": {
                            url: urlBase + "/users/:id",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#replaceById
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Replace attributes for a model instance and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "replaceById": {
                            url: urlBase + "/users/:id/replace",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#find
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Find all instances of the model matched by filter from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                         *
                         * @param {function(Array.<Object>,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Array.<Object>} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "find": {
                            isArray: true,
                            url: urlBase + "/users",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#findOne
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Find first instance of the model matched by filter from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "findOne": {
                            url: urlBase + "/users/findOne",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#updateAll
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Update instances of the model matched by {{where}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Information related to the outcome of the operation
                         */
                        "updateAll": {
                            url: urlBase + "/users/update",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#deleteById
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Delete a model instance by {{id}} from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - Model id
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "deleteById": {
                            url: urlBase + "/users/:id",
                            method: "DELETE",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#count
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Count instances of the model matched by where from the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `where` – `{object=}` - Criteria to match model instances
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `count` – `{number=}` -
                         */
                        "count": {
                            url: urlBase + "/users/count",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#prototype$updateAttributes
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Patch attributes for a model instance and persist it into the data source.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `id` – `{*}` - user id
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * <em>
                         * (The remote method definition does not provide any description.
                         * This usually means the response is a `User` object.)
                         * </em>
                         */
                        "prototype$updateAttributes": {
                            url: urlBase + "/users/:id",
                            method: "PUT",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#createChangeStream
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Create a change stream.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         *  - `options` – `{object=}` -
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * Data properties:
                         *
                         *  - `changes` – `{ReadableStream=}` -
                         */
                        "createChangeStream": {
                            url: urlBase + "/users/change-stream",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#login
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Login a user with username/email and password.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
                         *   Default value: `user`.
                         *
                         *  - `rememberMe` - `boolean` - Whether the authentication credentials
                         *     should be remembered in localStorage across app/browser restarts.
                         *     Default: `true`.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * The response body contains properties of the AccessToken created on login.
                         * Depending on the value of `include` parameter, the body may contain additional properties:
                         *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
                         *
                         */
                        "login": {
                            params: {
                                include: 'user',
                            },
                            interceptor: {
                                response: function(response) {
                                    var accessToken = response.data;
                                    LoopBackAuth.setUser(
                                        accessToken.id, accessToken.userId, accessToken.user);
                                    LoopBackAuth.rememberMe =
                                        response.config.params.rememberMe !== false;
                                    LoopBackAuth.save();
                                    return response.resource;
                                },
                            },
                            url: urlBase + "/users/login",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#logout
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Logout a user with access token.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * This method returns no data.
                         */
                        "logout": {
                            interceptor: {
                                response: function(response) {
                                    LoopBackAuth.clearUser();
                                    LoopBackAuth.clearStorage();
                                    return response.resource;
                                },
                                responseError: function(responseError) {
                                    LoopBackAuth.clearUser();
                                    LoopBackAuth.clearStorage();
                                    return responseError.resource;
                                },
                            },
                            url: urlBase + "/users/logout",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#confirm
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Confirm a user registration with email verification token.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *  - `uid` – `{string}` -
                         *
                         *  - `token` – `{string}` -
                         *
                         *  - `redirect` – `{string=}` -
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * This method returns no data.
                         */
                        "confirm": {
                            url: urlBase + "/users/confirm",
                            method: "GET",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#resetPassword
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Reset password for a user with email.
                         *
                         * @param {Object=} parameters Request parameters.
                         *
                         *   This method does not accept any parameters.
                         *   Supply an empty object or omit this argument altogether.
                         *
                         * @param {Object} postData Request data.
                         *
                         * This method expects a subset of model properties as request parameters.
                         *
                         * @param {function(Object,Object)=} successCb
                         *   Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *   `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         *
                         * This method returns no data.
                         */
                        "resetPassword": {
                            url: urlBase + "/users/reset",
                            method: "POST",
                        },

                        /**
                         * @ngdoc method
                         * @name lbServices.User#getCurrent
                         * @methodOf lbServices.User
                         *
                         * @description
                         *
                         * Get data of the currently logged user. Fail with HTTP result 401
                         * when there is no user logged in.
                         *
                         * @param {function(Object,Object)=} successCb
                         *    Success callback with two arguments: `value`, `responseHeaders`.
                         *
                         * @param {function(Object)=} errorCb Error callback with one argument:
                         *    `httpResponse`.
                         *
                         * @returns {Object} An empty reference that will be
                         *   populated with the actual data once the response is returned
                         *   from the server.
                         */
                        'getCurrent': {
                            url: urlBase + "/users" + '/:id',
                            method: 'GET',
                            params: {
                                id: function() {
                                    var id = LoopBackAuth.currentUserId;
                                    if (id == null) id = '__anonymous__';
                                    return id;
                                },
                            },
                            interceptor: {
                                response: function(response) {
                                    LoopBackAuth.currentUserData = response.data;
                                    return response.resource;
                                },
                                responseError: function(responseError) {
                                    LoopBackAuth.clearUser();
                                    LoopBackAuth.clearStorage();
                                    return $q.reject(responseError);
                                },
                            },
                            __isGetCurrentUser__: true,
                        },
                    }
                );



                /**
                 * @ngdoc method
                 * @name lbServices.User#patchOrCreate
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                R["patchOrCreate"] = R["upsert"];

                /**
                 * @ngdoc method
                 * @name lbServices.User#updateOrCreate
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                R["updateOrCreate"] = R["upsert"];

                /**
                 * @ngdoc method
                 * @name lbServices.User#patchOrCreateWithWhere
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Update an existing model instance or insert a new one into the data source based on the where criteria.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

                /**
                 * @ngdoc method
                 * @name lbServices.User#update
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Update instances of the model matched by {{where}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Information related to the outcome of the operation
                 */
                R["update"] = R["updateAll"];

                /**
                 * @ngdoc method
                 * @name lbServices.User#destroyById
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                R["destroyById"] = R["deleteById"];

                /**
                 * @ngdoc method
                 * @name lbServices.User#removeById
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                R["removeById"] = R["deleteById"];

                /**
                 * @ngdoc method
                 * @name lbServices.User#patchAttributes
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Patch attributes for a model instance and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - user id
                 *
                 * @param {Object} postData Request data.
                 *
                 * This method expects a subset of model properties as request parameters.
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `User` object.)
                 * </em>
                 */
                R["patchAttributes"] = R["prototype$updateAttributes"];

                /**
                 * @ngdoc method
                 * @name lbServices.User#getCachedCurrent
                 * @methodOf lbServices.User
                 *
                 * @description
                 *
                 * Get data of the currently logged user that was returned by the last
                 * call to {@link lbServices.User#login} or
                 * {@link lbServices.User#getCurrent}. Return null when there
                 * is no user logged in or the data of the current user were not fetched
                 * yet.
                 *
                 * @returns {Object} A User instance.
                 */
                R.getCachedCurrent = function() {
                    var data = LoopBackAuth.currentUserData;
                    return data ? new R(data) : null;
                };

                /**
                 * @ngdoc method
                 * @name lbServices.User#isAuthenticated
                 * @methodOf lbServices.User
                 *
                 * @returns {boolean} True if the current user is authenticated (logged in).
                 */
                R.isAuthenticated = function() {
                    return this.getCurrentId() != null;
                };

                /**
                 * @ngdoc method
                 * @name lbServices.User#getCurrentId
                 * @methodOf lbServices.User
                 *
                 * @returns {Object} Id of the currently logged-in user or null.
                 */
                R.getCurrentId = function() {
                    return LoopBackAuth.currentUserId;
                };

                /**
                 * @ngdoc property
                 * @name lbServices.User#modelName
                 * @propertyOf lbServices.User
                 * @description
                 * The name of the model represented by this $resource,
                 * i.e. `User`.
                 */
                R.modelName = "User";



                return R;
            }
        ]);


    module
        .factory('LoopBackAuth', function() {
            var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
            var propsPrefix = '$LoopBack$';

            function LoopBackAuth() {
                var self = this;
                props.forEach(function(name) {
                    self[name] = load(name);
                });
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.save = function() {
                var self = this;
                var storage = this.rememberMe ? localStorage : sessionStorage;
                props.forEach(function(name) {
                    save(storage, name, self[name]);
                });
            };

            LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
                this.accessTokenId = accessTokenId;
                this.currentUserId = userId;
                this.currentUserData = userData;
            };

            LoopBackAuth.prototype.clearUser = function() {
                this.accessTokenId = null;
                this.currentUserId = null;
                this.currentUserData = null;
            };

            LoopBackAuth.prototype.clearStorage = function() {
                props.forEach(function(name) {
                    save(sessionStorage, name, null);
                    save(localStorage, name, null);
                });
            };

            return new LoopBackAuth();

            // Note: LocalStorage converts the value to string
            // We are using empty string as a marker for null/undefined values.
            function save(storage, name, value) {
                try {
                    var key = propsPrefix + name;
                    if (value == null) value = '';
                    storage[key] = value;
                } catch (err) {
                    console.log('Cannot access local/session storage:', err);
                }
            }

            function load(name) {
                var key = propsPrefix + name;
                return localStorage[key] || sessionStorage[key] || null;
            }
        })
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
        }])
        .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
            function($q, LoopBackAuth) {
                return {
                    'request': function(config) {
                        // filter out external requests
                        var host = getHost(config.url);
                        if (host && host !== urlBaseHost) {
                            return config;
                        }

                        if (LoopBackAuth.accessTokenId) {
                            config.headers[authHeader] = LoopBackAuth.accessTokenId;
                        } else if (config.__isGetCurrentUser__) {
                            // Return a stub 401 error for User.getCurrent() when
                            // there is no user logged in
                            var res = {
                                body: {
                                    error: {
                                        status: 401
                                    }
                                },
                                status: 401,
                                config: config,
                                headers: function() {
                                    return undefined;
                                },
                            };
                            return $q.reject(res);
                        }
                        return config || $q.when(config);
                    },
                };
            }
        ])

    /**
     * @ngdoc object
     * @name lbServices.LoopBackResourceProvider
     * @header lbServices.LoopBackResourceProvider
     * @description
     * Use `LoopBackResourceProvider` to change the global configuration
     * settings used by all models. Note that the provider is available
     * to Configuration Blocks only, see
     * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
     * for more details.
     *
     * ## Example
     *
     * ```js
     * angular.module('app')
     *  .config(function(LoopBackResourceProvider) {
     *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
     *  });
     * ```
     */
    .provider('LoopBackResource', function LoopBackResourceProvider() {
        /**
         * @ngdoc method
         * @name lbServices.LoopBackResourceProvider#setAuthHeader
         * @methodOf lbServices.LoopBackResourceProvider
         * @param {string} header The header name to use, e.g. `X-Access-Token`
         * @description
         * Configure the REST transport to use a different header for sending
         * the authentication token. It is sent in the `Authorization` header
         * by default.
         */
        this.setAuthHeader = function(header) {
            authHeader = header;
        };

        /**
         * @ngdoc method
         * @name lbServices.LoopBackResourceProvider#getAuthHeader
         * @methodOf lbServices.LoopBackResourceProvider
         * @description
         * Get the header name that is used for sending the authentication token.
         */
        this.getAuthHeader = function() {
            return authHeader;
        };

        /**
         * @ngdoc method
         * @name lbServices.LoopBackResourceProvider#setUrlBase
         * @methodOf lbServices.LoopBackResourceProvider
         * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
         * @description
         * Change the URL of the REST API server. By default, the URL provided
         * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
         */
        this.setUrlBase = function(url) {
            urlBase = url;
            urlBaseHost = getHost(urlBase) || location.host;
        };

        /**
         * @ngdoc method
         * @name lbServices.LoopBackResourceProvider#getUrlBase
         * @methodOf lbServices.LoopBackResourceProvider
         * @description
         * Get the URL of the REST API server. The URL provided
         * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
         */
        this.getUrlBase = function() {
            return urlBase;
        };

        this.$get = ['$resource', function($resource) {
            var LoopBackResource = function(url, params, actions) {
                var resource = $resource(url, params, actions);

                // Angular always calls POST on $save()
                // This hack is based on
                // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
                resource.prototype.$save = function(success, error) {
                    // Fortunately, LoopBack provides a convenient `upsert` method
                    // that exactly fits our needs.
                    var result = resource.upsert.call(this, {}, this, success, error);
                    return result.$promise || result;
                };
                return resource;
            };

            LoopBackResource.getUrlBase = function() {
                return urlBase;
            };

            LoopBackResource.getAuthHeader = function() {
                return authHeader;
            };

            return LoopBackResource;
        }];
    });
})(window, window.angular);