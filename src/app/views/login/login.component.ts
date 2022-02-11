import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Usuarios } from 'src/app/models/usuarios';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  // loginModel = new User();

  loginModel: Usuarios = { email: "", password: "" };

  onSubmit() {
    // console.log(this.loginModel)
    // let email = this.loginModel.email
    // let senha = this.loginModel.password
    // this.loginModel.email = ""
    // this.loginModel.password = ""
    // console.log(`O email é "${email}" e a senha é "${senha}"`)

    

    this.cadastroService.login(this.loginModel).subscribe( 
      (res) => {
        console.log(res.body);

        let contador = 0;

        for( let index in res.body ) {
          if(res.body[index] instanceof Object) {
            console.log(res.body[index]);

            if(this.loginModel.email == res.body[index].email) {
              if(this.loginModel.password == res.body[index].password) {
                return window.alert(`Bem-vindo, ${res.body[index].usuario}!`);
              } else {
                contador = contador + 1;
              }
            } else {
              contador = contador + 1;
            }

          }
        }

        console.log( contador );

        if (contador == Object.keys(res.body).length) {
          window.alert("Email ou senha incorreto!");
        }
      },
      (error) => console.log(error)
     )
  }

}
