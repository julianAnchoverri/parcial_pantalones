import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PantalonesService } from '../../services/pantalones.service';
import { Pantalon } from '../../models/pantalones.model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  private readonly fb = inject(FormBuilder);
  private readonly pantalonesService= inject(PantalonesService);
  private readonly router= inject(Router);

  readonly formulario = this.fb.group({
    modelName:['',[Validators.required]],
    salePrice:[0,[Validators.required, Validators.min(1)]],
    isInStore: [true],
    size: ['',[Validators.required]],
    cut: ['',[Validators.required]],
    notes: ['']
  });

  onSubmit(): void{
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    this.pantalonesService.agregar(this.formulario.value as Pantalon).subscribe({
      next: () => {this.router.navigate(['/catalogo']);}
    })
  }
}
