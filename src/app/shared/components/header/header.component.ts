import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LogService } from '../../services/login-service';

const LOGOUT_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
viewBox="0 0 24 24" fill="none" 
stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"/></svg>
`;

const LOGIN_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
viewBox="0 0 24 24" fill="none" 
stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"/></svg>
`;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  knownUser!: string | null;
  showLoading: boolean = false;
  authorized: Observable<any> = this.loger.authorized;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private loger: LogService
  ) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoading = true;
      }

      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel
      ) {
        this.showLoading = false;
      }
    });

    iconRegistry.addSvgIconLiteral(
      'log-out',
      sanitizer.bypassSecurityTrustHtml(LOGOUT_ICON)
    );
    iconRegistry.addSvgIconLiteral('log-in', sanitizer.bypassSecurityTrustHtml(LOGIN_ICON));
  }

  public signOut() {
    this.loger.cleanInfo();
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
  }
}
