import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PantalonesService } from '../../services/pantalones.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterLink],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  private readonly pantalonesService= inject(PantalonesService);
  readonly pantalones= toSignal(this.pantalonesService.obtenerTodos(), {initialValue:[]});

}
