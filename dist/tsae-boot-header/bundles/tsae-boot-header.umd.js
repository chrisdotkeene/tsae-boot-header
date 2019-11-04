(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('tsae-boot-header', ['exports', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['tsae-boot-header'] = {}, global.ng.core, global.ngBootstrap, global.ng.forms, global.ng.common));
}(this, function (exports, core, ngBootstrap, forms, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TsaeBootHeaderService = /** @class */ (function () {
        function TsaeBootHeaderService() {
        }
        TsaeBootHeaderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TsaeBootHeaderService.ctorParameters = function () { return []; };
        /** @nocollapse */ TsaeBootHeaderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TsaeBootHeaderService_Factory() { return new TsaeBootHeaderService(); }, token: TsaeBootHeaderService, providedIn: "root" });
        return TsaeBootHeaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MenuActions() { }
    if (false) {
        /** @type {?} */
        MenuActions.prototype.name;
        /** @type {?} */
        MenuActions.prototype.destination;
        /** @type {?|undefined} */
        MenuActions.prototype.icon;
        /** @type {?|undefined} */
        MenuActions.prototype.isDropdown;
        /** @type {?|undefined} */
        MenuActions.prototype.dropdownItems;
    }
    var TsaeBootHeaderComponent = /** @class */ (function () {
        function TsaeBootHeaderComponent() {
            this.destinationLink = new core.EventEmitter();
        }
        /**
         * @param {?} link
         * @return {?}
         */
        TsaeBootHeaderComponent.prototype.routeToDestination = /**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            this.destinationLink.next(link);
        };
        TsaeBootHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-tsae-boot-header',
                        template: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <img class=\"navbar-brand pointer logo\" src=\"{{logoSrc}}\" alt=\"\">\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <span *ngFor=\"let item of menuItems\">\n                <li *ngIf=\"!item.isDropdown\" class=\"nav-item active\">\n                    <a class=\"nav-link pointer\" (click)=\"routeToDestination(item.destination)\"> {{item.name}} <span\n                            class=\"sr-only\">(current)</span></a>\n                </li>\n                <li *ngIf=\"item.isDropdown\" ngbDropdown class=\"d-inline-block\">\n                    <a class=\"nav-link pointer\" id=\"dropdownBasic1\" ngbDropdownToggle>{{item.name}}</a>\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                        <button *ngFor=\"let dropdownItems of item.dropdownItems\"\n                            ngbDropdownItem>{{dropdownItems.name}}</button>\n                    </div>\n                </li>\n            </span>\n        </ul>\n    </div>\n    <form *ngIf=\"enableSearch\" class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n</nav>\n<nav class=\"navbar navbar-expand-lg navbar-light nav-blue\">\n    <!-- <img class=\"logo\" src=\"{{logoSrc}}\" alt=\"\"> -->\n</nav>",
                        styles: [".nav-blue{background-color:#0c213c}.pointer{cursor:pointer}.logo{width:210px}"]
                    }] }
        ];
        TsaeBootHeaderComponent.propDecorators = {
            menuItems: [{ type: core.Input }],
            logoSrc: [{ type: core.Input }],
            enableSearch: [{ type: core.Input }],
            destinationLink: [{ type: core.Output }]
        };
        return TsaeBootHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        TsaeBootHeaderComponent.prototype.menuItems;
        /** @type {?} */
        TsaeBootHeaderComponent.prototype.logoSrc;
        /** @type {?} */
        TsaeBootHeaderComponent.prototype.enableSearch;
        /** @type {?} */
        TsaeBootHeaderComponent.prototype.destinationLink;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TsaeBootHeaderModule = /** @class */ (function () {
        function TsaeBootHeaderModule() {
        }
        TsaeBootHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TsaeBootHeaderComponent],
                        imports: [
                            common.CommonModule,
                            ngBootstrap.NgbModule,
                            forms.FormsModule,
                        ],
                        exports: [
                            TsaeBootHeaderComponent,
                        ],
                        providers: []
                    },] }
        ];
        return TsaeBootHeaderModule;
    }());

    exports.TsaeBootHeaderComponent = TsaeBootHeaderComponent;
    exports.TsaeBootHeaderModule = TsaeBootHeaderModule;
    exports.TsaeBootHeaderService = TsaeBootHeaderService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tsae-boot-header.umd.js.map
