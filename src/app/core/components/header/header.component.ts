import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$!: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.logged;
  }

  logout(){
    this.authService.logout();
  }

}
