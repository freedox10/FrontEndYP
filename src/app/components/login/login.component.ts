import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/*export class LoginComponent {
  nombreUsuario: string;
  password: string;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router) {}

  login() {
    const user = { nombreUsuario: this.nombreUsuario, password: this.password };
    this.authService.login(user).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigateByUrl("/");
      },
      error => {
        console.log(error);
      }
    );
  }
}*/

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    
    const user = { nombreUsuario: this.nombreUsuario, password: this.password };

    //this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);

    console.log('usuario y pasword in');
    //console.log(this.loginUsuario);
    console.log(user);

    //this.authService.login(this.loginUsuario).subscribe((data) =>{
    this.authService.login(user).subscribe(
      (data) =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigateByUrl('');
        console.log('a ver si pasa');       
      },
      err =>{
        //this.isLogged = false;
        //this.isLogginFail = true;
        //this.errMsj = err.error.mensaje;
        //console.log(this.errMsj);
        console.log('por aca pasé err');
        console.log(err);
                
      })
  }

}
