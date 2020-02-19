import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public appName = 'Sistema Gestor de Eventos';
  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }
  onLogout():void{
    this.authSvc.logout();
  }
}
