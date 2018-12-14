import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Frete } from './Frete';
import { FreteService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  frete = new Frete;
  cep: string;

  constructor(private freteService: FreteService) { }

  CalcularFrete(): void {
    this.cep = '55293280';
    this.freteService.getFrete('http://viacep.com.br/ws/' + this.cep + '/json')
      .subscribe(data => {
        this.frete.bairro = data.bairro;
        this.frete.cep = data.cep;
        this.frete.gia = data.gia;
        this.frete.ibge = data.ibge;
        this.frete.localidade = data.localidade;
        this.frete.logradouro = data.logradouro;
        this.frete.uf = data.uf;
        this.frete.unidade = data.unidade;
        console.log(data);
      });
  }
}
