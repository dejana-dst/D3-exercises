(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<graph [nodes]=\"nodes\" [links]=\"links\"></graph>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3 */ "./src/app/d3/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'demo1';
        this.nodes = [];
        this.links = [];
        var N = _app_config__WEBPACK_IMPORTED_MODULE_2__["default"].N, getIndex = function (number) { return number - 1; };
        /** constructing the nodes array */
        for (var i = 1; i <= N; i++) {
            this.nodes.push(new _d3__WEBPACK_IMPORTED_MODULE_3__["Node"](i));
            //console.log(getIndex(i));
        }
        for (var i = 1; i <= N; i++) {
            for (var m = 1; i * m <= N; m++) {
                /** increasing connections toll on connecting nodes */
                this.nodes[getIndex(i)].linkCount++;
                this.nodes[getIndex(i * m)].linkCount++;
                //console.log(getIndex(i )+" "+(i * m)+" "+getIndex(i * m));
                /** connecting the nodes before starting the simulation */
                this.links.push(new _d3__WEBPACK_IMPORTED_MODULE_3__["Link"](i, i * m));
            }
        }
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CONFIG = {
    N: 60,
    SPECTRUM: [
        // "rgb(222,237,250)",
        // 'rgb(176,212,243)',
        // 'rgb(128,186,236)',
        // "rgb(177,158,228)",
        // 'rgb(038,137,223)',
        // "rgb(200,116,217)",
        // 'rgb(200,106,197)',
        // 'rgb(0,94,176)',
        // "rgb(0,82,154)",
        // 'rgb(0,60,113)',
        'rgb(186, 216, 223)',
        'rgb(125, 164, 169)',
        //  'rgb(155, 194, 199)',
        'rgb(79, 104, 92)',
        'rgb(22, 68, 52)',
        'rgb(15, 58, 43)'
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./d3 */ "./src/app/d3/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _visuals_graph_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visuals/graph/graph.component */ "./src/app/visuals/graph/graph.component.ts");
/* harmony import */ var _visuals_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visuals/shared */ "./src/app/visuals/shared/index.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _visuals_graph_graph_component__WEBPACK_IMPORTED_MODULE_7__["GraphComponent"]
            ].concat(_visuals_shared__WEBPACK_IMPORTED_MODULE_8__["SHARED_VISUALS"], _d3__WEBPACK_IMPORTED_MODULE_5__["D3_DIRECTIVES"]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_d3__WEBPACK_IMPORTED_MODULE_5__["D3Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/d3/d3.service.ts":
/*!**********************************!*\
  !*** ./src/app/d3/d3.service.ts ***!
  \**********************************/
/*! exports provided: D3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return D3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./src/app/d3/models/index.ts");
// path : d3/d3.service.ts




var D3Service = /** @class */ (function () {
    /** This service will provide methods to enable user interaction with elements
    * while maintaining the d3 simulations physics
    */
    function D3Service() {
    }
    /** A method to bind a pan and zoom behaviour to an svg element */
    D3Service.prototype.applyZoomableBehaviour = function (svgElement, containerElement) {
        var svg, container, zoomed, zoom;
        svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](svgElement);
        container = d3__WEBPACK_IMPORTED_MODULE_2__["select"](containerElement);
        zoomed = function () {
            var transform = d3__WEBPACK_IMPORTED_MODULE_2__["event"].transform;
            container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
        };
        zoom = d3__WEBPACK_IMPORTED_MODULE_2__["zoom"]().on("zoom", zoomed);
        svg.call(zoom);
    };
    /** A method to bind a draggable behaviour to an svg element */
    D3Service.prototype.applyDraggableBehaviour = function (element, node, graph) {
        var d3element = d3__WEBPACK_IMPORTED_MODULE_2__["select"](element);
        function started() {
            /** Preventing propagation of dragstart to parent elements */
            d3__WEBPACK_IMPORTED_MODULE_2__["event"].sourceEvent.stopPropagation();
            if (!d3__WEBPACK_IMPORTED_MODULE_2__["event"].active) {
                graph.simulation.alphaTarget(0.3).restart();
            }
            d3__WEBPACK_IMPORTED_MODULE_2__["event"].on('drag', dragged).on('end', ended);
            function dragged() {
                node.fx = d3__WEBPACK_IMPORTED_MODULE_2__["event"].x;
                node.fy = d3__WEBPACK_IMPORTED_MODULE_2__["event"].y;
            }
            function ended() {
                if (!d3__WEBPACK_IMPORTED_MODULE_2__["event"].active) {
                    graph.simulation.alphaTarget(0);
                }
                node.fx = null;
                node.fy = null;
            }
        }
        d3element.call(d3__WEBPACK_IMPORTED_MODULE_2__["drag"]()
            .on('start', started));
    };
    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    D3Service.prototype.getForceDirectedGraph = function (nodes, links, options) {
        var graph = new _models__WEBPACK_IMPORTED_MODULE_3__["ForceDirectedGraph"](nodes, links, options);
        return graph;
    };
    D3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], D3Service);
    return D3Service;
}());



/***/ }),

/***/ "./src/app/d3/directives/draggable.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/d3/directives/draggable.directive.ts ***!
  \******************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/d3/models/index.ts");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../d3.service */ "./src/app/d3/d3.service.ts");




var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    DraggableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('draggableNode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["Node"])
    ], DraggableDirective.prototype, "draggableNode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('draggableInGraph'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"])
    ], DraggableDirective.prototype, "draggableInGraph", void 0);
    DraggableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[draggableNode]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_d3_service__WEBPACK_IMPORTED_MODULE_3__["D3Service"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/d3/directives/index.ts":
/*!****************************************!*\
  !*** ./src/app/d3/directives/index.ts ***!
  \****************************************/
/*! exports provided: D3_DIRECTIVES, ZoomableDirective, DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3_DIRECTIVES", function() { return D3_DIRECTIVES; });
/* harmony import */ var _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoomable.directive */ "./src/app/d3/directives/zoomable.directive.ts");
/* harmony import */ var _draggable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable.directive */ "./src/app/d3/directives/draggable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__["ZoomableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _draggable_directive__WEBPACK_IMPORTED_MODULE_1__["DraggableDirective"]; });





var D3_DIRECTIVES = [
    _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__["ZoomableDirective"],
    _draggable_directive__WEBPACK_IMPORTED_MODULE_1__["DraggableDirective"]
];


/***/ }),

/***/ "./src/app/d3/directives/zoomable.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/d3/directives/zoomable.directive.ts ***!
  \*****************************************************/
/*! exports provided: ZoomableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return ZoomableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../d3.service */ "./src/app/d3/d3.service.ts");



var ZoomableDirective = /** @class */ (function () {
    function ZoomableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ZoomableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('zoomableOf'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ZoomableDirective.prototype, "zoomableOf", void 0);
    ZoomableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[zoomableOf]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_d3_service__WEBPACK_IMPORTED_MODULE_2__["D3Service"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ZoomableDirective);
    return ZoomableDirective;
}());



/***/ }),

/***/ "./src/app/d3/index.ts":
/*!*****************************!*\
  !*** ./src/app/d3/index.ts ***!
  \*****************************/
/*! exports provided: D3Service, D3_DIRECTIVES, Node, Link, ForceDirectedGraph, ZoomableDirective, DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d3.service */ "./src/app/d3/d3.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return _d3_service__WEBPACK_IMPORTED_MODULE_0__["D3Service"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/d3/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Node"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["ForceDirectedGraph"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives */ "./src/app/d3/directives/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D3_DIRECTIVES", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["D3_DIRECTIVES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["ZoomableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["DraggableDirective"]; });






/***/ }),

/***/ "./src/app/d3/models/force-directed-graph.ts":
/*!***************************************************!*\
  !*** ./src/app/d3/models/force-directed-graph.ts ***!
  \***************************************************/
/*! exports provided: ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return ForceDirectedGraph; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./src/app/d3/models/link.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



var FORCES = {
    LINKS: 1 / 20,
    COLLISION: 1,
    CHARGE: 2
};
var ForceDirectedGraph = /** @class */ (function () {
    function ForceDirectedGraph(nodes, links, options) {
        this.ticker = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    ForceDirectedGraph.prototype.connectNodes = function (source, target) {
        var link;
        if (!this.nodes[source] || !this.nodes[target]) {
            throw new Error('One of the nodes does not exist');
        }
        link = new _link__WEBPACK_IMPORTED_MODULE_1__["Link"](source, target);
        this.simulation.stop();
        this.links.push(link);
        this.simulation.alphaTarget(0.3).restart();
        this.initLinks();
    };
    ForceDirectedGraph.prototype.initNodes = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    };
    ForceDirectedGraph.prototype.initLinks = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.force('links', d3__WEBPACK_IMPORTED_MODULE_2__["forceLink"](this.links)
            .id(function (d) { return d['id']; })
            .strength(FORCES.LINKS));
    };
    ForceDirectedGraph.prototype.initSimulation = function (options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {
            var ticker_1 = this.ticker;
            this.simulation = d3__WEBPACK_IMPORTED_MODULE_2__["forceSimulation"]()
                .force('charge', d3__WEBPACK_IMPORTED_MODULE_2__["forceManyBody"]()
                .strength(function (d) { return FORCES.CHARGE * d['r']; }))
                .force('collide', d3__WEBPACK_IMPORTED_MODULE_2__["forceCollide"]()
                .strength(FORCES.COLLISION)
                .radius(function (d) { return d['r'] + 10; }).iterations(2));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker_1.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force('centers', d3__WEBPACK_IMPORTED_MODULE_2__["forceCenter"](options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    };
    return ForceDirectedGraph;
}());



/***/ }),

/***/ "./src/app/d3/models/index.ts":
/*!************************************!*\
  !*** ./src/app/d3/models/index.ts ***!
  \************************************/
/*! exports provided: Node, Link, ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/app/d3/models/node.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node__WEBPACK_IMPORTED_MODULE_0__["Node"]; });

/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./src/app/d3/models/link.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony import */ var _force_directed_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./force-directed-graph */ "./src/app/d3/models/force-directed-graph.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return _force_directed_graph__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"]; });



// To be implemented in the next gist



/***/ }),

/***/ "./src/app/d3/models/link.ts":
/*!***********************************!*\
  !*** ./src/app/d3/models/link.ts ***!
  \***********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
// Implementing SimulationLinkDatum interface into our custom Link class
var Link = /** @class */ (function () {
    function Link(source, target) {
        this.source = source;
        this.target = target;
    }
    return Link;
}());



/***/ }),

/***/ "./src/app/d3/models/node.ts":
/*!***********************************!*\
  !*** ./src/app/d3/models/node.ts ***!
  \***********************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");

// Implementing SimulationNodeDatum interface into our custom Node class
var Node = /** @class */ (function () {
    function Node(id) {
        var _this = this;
        this.linkCount = 0;
        this.normal = function () {
            return Math.sqrt(_this.linkCount / _app_config__WEBPACK_IMPORTED_MODULE_0__["default"].N);
        };
        this.id = id;
    }
    Object.defineProperty(Node.prototype, "r", {
        get: function () {
            return 50 * this.normal() + 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "fontSize", {
        get: function () {
            return (30 * this.normal() + 10) + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "color", {
        get: function () {
            var index = Math.floor(_app_config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM.length * this.normal());
            return _app_config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM[index];
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());



/***/ }),

/***/ "./src/app/visuals/graph/graph.component.css":
/*!***************************************************!*\
  !*** ./src/app/visuals/graph/graph.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc3VhbHMvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/visuals/graph/graph.component.ts":
/*!**************************************************!*\
  !*** ./src/app/visuals/graph/graph.component.ts ***!
  \**************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../d3 */ "./src/app/d3/index.ts");



var GraphComponent = /** @class */ (function () {
    function GraphComponent(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        this._options = { width: 500, height: 700 };
    }
    GraphComponent.prototype.onResize = function (event) {
        this.graph.initSimulation(this.options);
    };
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe(function (d) {
            _this.ref.markForCheck();
        });
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.graph.initSimulation(this.options);
    };
    Object.defineProperty(GraphComponent.prototype, "options", {
        get: function () {
            return this._options = {
                width: (window.innerWidth - 50),
                height: (window.innerHeight - 50)
            };
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nodes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphComponent.prototype, "nodes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('links'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphComponent.prototype, "links", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GraphComponent.prototype, "onResize", null);
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'graph',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <svg #svg [attr.width]=\"_options.width\" [attr.height]=\"_options.height\">\n      <g [zoomableOf]=\"svg\">\n        <g [linkVisual]=\"link\" *ngFor=\"let link of links\"></g>\n        <g [nodeVisual]=\"node\" *ngFor=\"let node of nodes\"\n            [draggableNode]=\"node\" [draggableInGraph]=\"graph\"></g>\n      </g>\n    </svg>\n  ",
            styles: [__webpack_require__(/*! ./graph.component.css */ "./src/app/visuals/graph/graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_d3__WEBPACK_IMPORTED_MODULE_2__["D3Service"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/visuals/shared/index.ts":
/*!*****************************************!*\
  !*** ./src/app/visuals/shared/index.ts ***!
  \*****************************************/
/*! exports provided: SHARED_VISUALS, NodeVisualComponent, LinkVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_VISUALS", function() { return SHARED_VISUALS; });
/* harmony import */ var _node_visual_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-visual.component */ "./src/app/visuals/shared/node-visual.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeVisualComponent", function() { return _node_visual_component__WEBPACK_IMPORTED_MODULE_0__["NodeVisualComponent"]; });

/* harmony import */ var _link_visual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-visual.component */ "./src/app/visuals/shared/link-visual.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkVisualComponent", function() { return _link_visual_component__WEBPACK_IMPORTED_MODULE_1__["LinkVisualComponent"]; });





var SHARED_VISUALS = [
    _node_visual_component__WEBPACK_IMPORTED_MODULE_0__["NodeVisualComponent"],
    _link_visual_component__WEBPACK_IMPORTED_MODULE_1__["LinkVisualComponent"]
];


/***/ }),

/***/ "./src/app/visuals/shared/link-visual.component.css":
/*!**********************************************************!*\
  !*** ./src/app/visuals/shared/link-visual.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link {\r\n    stroke-width: 0.25;\r\n    stroke: rgb(145, 119, 5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFscy9zaGFyZWQvbGluay12aXN1YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC92aXN1YWxzL3NoYXJlZC9saW5rLXZpc3VhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmsge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwLjI1O1xyXG4gICAgc3Ryb2tlOiByZ2IoMTQ1LCAxMTksIDUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/visuals/shared/link-visual.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/visuals/shared/link-visual.component.ts ***!
  \*********************************************************/
/*! exports provided: LinkVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVisualComponent", function() { return LinkVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../d3 */ "./src/app/d3/index.ts");



var LinkVisualComponent = /** @class */ (function () {
    function LinkVisualComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('linkVisual'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _d3__WEBPACK_IMPORTED_MODULE_2__["Link"])
    ], LinkVisualComponent.prototype, "link", void 0);
    LinkVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[linkVisual]',
            template: "\n    <svg:line\n      class=\"link\"\n        [attr.x1]=\"link.source.x\"\n        [attr.y1]=\"link.source.y\"\n        [attr.x2]=\"link.target.x\"\n        [attr.y2]=\"link.target.y\"\n    ></svg:line>\n    ",
            styles: [__webpack_require__(/*! ./link-visual.component.css */ "./src/app/visuals/shared/link-visual.component.css")]
        })
    ], LinkVisualComponent);
    return LinkVisualComponent;
}());



/***/ }),

/***/ "./src/app/visuals/shared/node-visual.component.css":
/*!**********************************************************!*\
  !*** ./src/app/visuals/shared/node-visual.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".node {\r\n    cursor: pointer;\r\n    transition: stroke-width 0.1s ease-out,\r\n        fill 0.1s ease-out,\r\n        stroke 0.1s ease-out;\r\n\r\n    stroke: white;\r\n    stroke-width: 0.25;\r\n}\r\n\r\n.node-name {\r\n  font-family: 'Lato';\r\n  text-anchor: middle;\r\n  box-align: central;\r\n  font-weight: 300;\r\n  fill: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFscy9zaGFyZWQvbm9kZS12aXN1YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZjs7NEJBRXdCOztJQUV4QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Zpc3VhbHMvc2hhcmVkL25vZGUtdmlzdWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBzdHJva2Utd2lkdGggMC4xcyBlYXNlLW91dCxcclxuICAgICAgICBmaWxsIDAuMXMgZWFzZS1vdXQsXHJcbiAgICAgICAgc3Ryb2tlIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxuICAgIHN0cm9rZS13aWR0aDogMC4yNTtcclxufVxyXG5cclxuLm5vZGUtbmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gIGJveC1hbGlnbjogY2VudHJhbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/visuals/shared/node-visual.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/visuals/shared/node-visual.component.ts ***!
  \*********************************************************/
/*! exports provided: NodeVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeVisualComponent", function() { return NodeVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../d3 */ "./src/app/d3/index.ts");



var NodeVisualComponent = /** @class */ (function () {
    function NodeVisualComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nodeVisual'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _d3__WEBPACK_IMPORTED_MODULE_2__["Node"])
    ], NodeVisualComponent.prototype, "node", void 0);
    NodeVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[nodeVisual]',
            template: "\n    <svg:g [attr.transform]=\"'translate(' + node.x + ',' + node.y + ')'\">\n      <svg:circle\n          class=\"node\"\n          [attr.fill]=\"node.color\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r\">\n      </svg:circle>\n      <svg:text\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.id}}\n      </svg:text>\n    </svg:g>\n  ",
            styles: [__webpack_require__(/*! ./node-visual.component.css */ "./src/app/visuals/shared/node-visual.component.css")]
        })
    ], NodeVisualComponent);
    return NodeVisualComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dejan\Desktop\D3DEMOS\demo1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map