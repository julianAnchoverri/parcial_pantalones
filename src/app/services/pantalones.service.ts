import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pantalon } from '../models/pantalones.model';

@Injectable({
    providedIn:'root'
})
export class PantalonesService {
    private readonly baseUrl = "http://localhost:3000/trousers";
    private readonly http = inject(HttpClient);

    obtenerTodos(): Observable<Pantalon[]> {
        return this.http.get<Pantalon[]>(this.baseUrl);
    }

    obtenerPorId(id: string): Observable<Pantalon> {
        return this.http.get<Pantalon>(`${this.baseUrl}/${id}`);
    }

    agregar(pantalon: Pantalon): Observable<Pantalon>{
        return this.http.post<Pantalon>(this.baseUrl, pantalon);
    }

    editar(pantalon: Pantalon): Observable<Pantalon>{
        return this.http.put<Pantalon>(`${this.baseUrl}/${pantalon.id}`, pantalon);
    }

    eliminar(id: string): Observable<void>{
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

}
