import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TsaeBootHeaderService {
    constructor() { }
}
TsaeBootHeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TsaeBootHeaderService.ctorParameters = () => [];
/** @nocollapse */ TsaeBootHeaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TsaeBootHeaderService_Factory() { return new TsaeBootHeaderService(); }, token: TsaeBootHeaderService, providedIn: "root" });

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
class TsaeBootHeaderComponent {
    constructor() {
        this.destinationLink = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    routeToDestination(link) {
        this.destinationLink.next(link);
    }
}
TsaeBootHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-tsae-boot-header',
                template: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <img class=\"navbar-brand pointer logo\" src=\"{{logoSrc}}\" alt=\"\">\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <span *ngFor=\"let item of menuItems\">\n                <li *ngIf=\"!item.isDropdown\" class=\"nav-item active\">\n                    <a class=\"nav-link pointer\" (click)=\"routeToDestination(item.destination)\"> {{item.name}} <span\n                            class=\"sr-only\">(current)</span></a>\n                </li>\n                <li *ngIf=\"item.isDropdown\" ngbDropdown class=\"d-inline-block\">\n                    <a class=\"nav-link pointer\" id=\"dropdownBasic1\" ngbDropdownToggle>{{item.name}}</a>\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                        <button *ngFor=\"let dropdownItems of item.dropdownItems\"\n                            ngbDropdownItem>{{dropdownItems.name}}</button>\n                    </div>\n                </li>\n            </span>\n        </ul>\n    </div>\n    <form *ngIf=\"enableSearch\" class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n</nav>\n<nav class=\"navbar navbar-expand-lg navbar-light nav-blue\">\n    <!-- <img class=\"logo\" src=\"{{logoSrc}}\" alt=\"\"> -->\n</nav>",
                styles: [".nav-blue{background-color:#0c213c}.pointer{cursor:pointer}.logo{width:210px}"]
            }] }
];
TsaeBootHeaderComponent.propDecorators = {
    menuItems: [{ type: Input }],
    logoSrc: [{ type: Input }],
    enableSearch: [{ type: Input }],
    destinationLink: [{ type: Output }]
};
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
class TsaeBootHeaderModule {
}
TsaeBootHeaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TsaeBootHeaderComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    FormsModule,
                ],
                exports: [
                    TsaeBootHeaderComponent,
                ],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TsaeBootHeaderComponent, TsaeBootHeaderModule, TsaeBootHeaderService };
//# sourceMappingURL=tsae-boot-header.js.map
