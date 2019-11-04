/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function MenuActions() { }
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
        this.destinationLink = new EventEmitter();
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
    return TsaeBootHeaderComponent;
}());
export { TsaeBootHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNhZS1ib290LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90c2FlLWJvb3QtaGVhZGVyLyIsInNvdXJjZXMiOlsibGliL3RzYWUtYm9vdC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRS9FLGlDQU1DOzs7SUFMQywyQkFBYTs7SUFDYixrQ0FBb0I7O0lBQ3BCLDJCQUFjOztJQUNkLGlDQUFxQjs7SUFDckIsb0NBQThCOztBQUdoQztJQUFBO1FBVVksb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWpELENBQUM7Ozs7O0lBSkMsb0RBQWtCOzs7O0lBQWxCLFVBQW1CLElBQVk7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHFpREFBZ0Q7O2lCQUVqRDs7OzRCQUdFLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO2tDQUNMLE1BQU07O0lBTVQsOEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHVCQUF1Qjs7O0lBRWxDLDRDQUFrQzs7SUFDbEMsMENBQXlCOztJQUN6QiwrQ0FBK0I7O0lBQy9CLGtEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNZW51QWN0aW9ucyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzdGluYXRpb246IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaXNEcm9wZG93bj86IGJvb2xlYW47XG4gIGRyb3Bkb3duSXRlbXM/OiBNZW51QWN0aW9uc1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdHNhZS1ib290LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90c2FlLWJvb3QtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHNhZS1ib290LWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzYWVCb290SGVhZGVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBtZW51SXRlbXM6IE1lbnVBY3Rpb25zW107XG4gIEBJbnB1dCgpIGxvZ29TcmM6IHN0cmluZztcbiAgQElucHV0KCkgZW5hYmxlU2VhcmNoOiBib29sZWFuO1xuICBAT3V0cHV0KCkgZGVzdGluYXRpb25MaW5rID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHJvdXRlVG9EZXN0aW5hdGlvbihsaW5rOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uTGluay5uZXh0KGxpbmspO1xuICB9XG5cbn1cbiJdfQ==