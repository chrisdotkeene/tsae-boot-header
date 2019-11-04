import { EventEmitter } from '@angular/core';
export interface MenuActions {
    name: string;
    destination: string;
    icon?: string;
    isDropdown?: boolean;
    dropdownItems?: MenuActions[];
}
export declare class TsaeBootHeaderComponent {
    menuItems: MenuActions[];
    logoSrc: string;
    enableSearch: boolean;
    destinationLink: EventEmitter<any>;
    routeToDestination(link: string): void;
}
