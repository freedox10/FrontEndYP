import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  
  isLogged = false;

  constructor(private tokenService: TokenService, private router:Router) {
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  
  login(){
    this.router.navigate(['/login'])
  }

  onLogOut(){
    this.tokenService.logOut();
    this.isLogged = false;
    this.router.navigate(['/']);
  }

  /*
  in(){
    this.isLogged = true;
  }

  out(){
    this.isLogged = false;
  }
  */
}
