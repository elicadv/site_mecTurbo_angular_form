import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formData = {
    nome: '',
    tel: '',
    email: '',
    mensagem: ''
  };
  
  successMessage: string | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('https://backendmecturbo-production.up.railway.app/mecTurbo/form', this.formData)
      .subscribe({
        next: (response) => {
          this.successMessage = 'Dados enviados com sucesso!';
          this.formData = { nome: '', tel: '', email: '', mensagem: '' }; // Limpa os dados do formulário
        },
        error: (error) => {
          console.error('Erro ao enviar dados', error);
          this.successMessage = null; // Limpa a mensagem de sucesso em caso de erro
        }
      });
  }
}  
