import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {

 static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';

 readonly home = { icon: 'pi pi-home', routerLink : '/' };

  menuItems : MenuItem[] = [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.menuItems = this.createBreadcrumbs(this.activatedRoute.root))
      );
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length) {
      for (const child of children) {

        const routeURL: string = child.snapshot.url
          .map((segment) => segment.path)
          .join('/');


        if (routeURL !== '') {

          url += `/${routeURL}`;
        }

        const label = child.snapshot.data['breadcrumb'];

        if (label) {

          if( url == "") url = "/";
;          breadcrumbs.push({ label, routerLink : url });
        }

       return this.createBreadcrumbs(child, url, breadcrumbs);
      }
    }

    return breadcrumbs;
  }
}
