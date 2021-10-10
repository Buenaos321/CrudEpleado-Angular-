import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';//nos ayuda a coomunicarnos con la api
import { Observable } from 'rxjs';
import { Empleado } from './Empeado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  Api: string="http://127.0.0.1:8000/api/empleados/";//Api en laravel ApiEmpleados
  constructor(private clienteHttp:HttpClient) {}

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.Api,datosEmpleado);
  }

  ObtenerEmpleados(){
    return this.clienteHttp.get(this.Api);
  }

  BorrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.delete(this.Api+id);
  }

  ObtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.Api+id);
  }

  EditarEmpleado(id:any,datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.put(this.Api+id,datosEmpleado);
  }
}
