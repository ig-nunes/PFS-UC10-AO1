import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuarios: Array<Usuarios> = [];

  public variavel: boolean = false;

  public novoUsuario: Usuarios = { usuario: "", email: "", password: "" };

  public teste: any;

  // { usuario: "", email: "", password: "" }

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
    
  }

  public listarCadastros() {

    // if (this.variavel == false){
    //   this.cadastroService.mostrarCadastros().subscribe(
    //     res => {this.usuarios = res, console.log(res)},
    //     error => error
    //   )
    //   this.variavel = true;
    // } else {
    //   this.variavel = false
    // }

    if (this.variavel == false){
      this.cadastroService.mostrarCadastros().subscribe(
        res => {this.usuarios = res.body, console.log(res)},
        error => error
      )
      this.variavel = true;
    } else {
      this.variavel = false
    }
  }

  public cadastrarUsuario() {

    if (this.novoUsuario.usuario !== "" && this.novoUsuario.email !== "" && this.novoUsuario.password !== "") {  
      return this.cadastroService.adicionarCadastro(this.novoUsuario).subscribe(
        res => {  console.log(res); alert("usuario cadastrado com sucesso!") },
        error => error
      )
      
    } else {
      return alert("Todas as caixas precisam estar preenchidas!")
    }
  }

  public editarNomeUsuario(nome: any, email:any, senha:any, id: any) {

    if (nome !== "" && email !== ""){
      this.cadastroService.editarNomeCadastro(nome, email, senha, id).subscribe(
        res => {
          return console.log(res), alert("Usuário editado com sucesso!")},
        error => error,
      )
    } else {
      return alert("Todos os campos precisam estar preenchidos!");
    }

  }

  public deletarUsuario(id: any) {

    if (confirm("deseja apagar mesmo esse usuario?")){
      return this.cadastroService.deletarCadastro(id).subscribe(
        res => {
          this.usuarios = this.usuarios.filter(
            item => {
              return id !== item.id;
            },
          console.log(res)
          )
        },
        error => error
      )
    } else {
      return alert("Usário não apagado");
    }
  }

  public cancelarCadastro() {
    this.router.navigateByUrl('/login');
  }

}
