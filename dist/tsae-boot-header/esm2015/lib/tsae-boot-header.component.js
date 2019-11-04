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
export class TsaeBootHeaderComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNhZS1ib290LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90c2FlLWJvb3QtaGVhZGVyLyIsInNvdXJjZXMiOlsibGliL3RzYWUtYm9vdC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRS9FLGlDQU1DOzs7SUFMQywyQkFBYTs7SUFDYixrQ0FBb0I7O0lBQ3BCLDJCQUFjOztJQUNkLGlDQUFxQjs7SUFDckIsb0NBQThCOztBQVFoQyxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBVVksb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWpELENBQUM7Ozs7O0lBSkMsa0JBQWtCLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMscWlEQUFnRDs7YUFFakQ7Ozt3QkFHRSxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxNQUFNOzs7O0lBSFAsNENBQWtDOztJQUNsQywwQ0FBeUI7O0lBQ3pCLCtDQUErQjs7SUFDL0Isa0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVBY3Rpb25zIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXN0aW5hdGlvbjogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpc0Ryb3Bkb3duPzogYm9vbGVhbjtcbiAgZHJvcGRvd25JdGVtcz86IE1lbnVBY3Rpb25zW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10c2FlLWJvb3QtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzYWUtYm9vdC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90c2FlLWJvb3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHNhZUJvb3RIZWFkZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG1lbnVJdGVtczogTWVudUFjdGlvbnNbXTtcbiAgQElucHV0KCkgbG9nb1NyYzogc3RyaW5nO1xuICBASW5wdXQoKSBlbmFibGVTZWFyY2g6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBkZXN0aW5hdGlvbkxpbmsgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcm91dGVUb0Rlc3RpbmF0aW9uKGxpbms6IHN0cmluZykge1xuICAgIHRoaXMuZGVzdGluYXRpb25MaW5rLm5leHQobGluayk7XG4gIH1cblxufVxuIl19