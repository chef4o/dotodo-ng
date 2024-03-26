import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
    private handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && this.shouldReuseRoute(route, route);
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        const key = this.getRouteKey(route);
        if (key) {
            this.handlers[key] = handle;
        }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const key = this.getRouteKey(route);
        return !!key && !!this.handlers[key];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        const key = this.getRouteKey(route);
        return key ? this.handlers[key] : {};
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

    private getRouteKey(route: ActivatedRouteSnapshot): string {
        if (!route.routeConfig) {
            return "";
        }
        const segments = route.pathFromRoot.map(segment => segment.url.join('/')).join('/');
        return `${route.routeConfig.path}/${segments}`;
    }
}
