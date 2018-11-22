import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  aangemeld: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(user => {
      if (user) {
        this.aangemeld = true;
      } else {
        this.aangemeld = false;
      }
    });
  }

  logout() {
    this.af.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    });
  }
}
