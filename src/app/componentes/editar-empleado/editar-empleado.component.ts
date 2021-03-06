import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  ElId:any;
  

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { 

    this.ElId=this.activeRoute.snapshot.paramMap.get('id');
    //console.log(this.ElId);
    this.crudService.ObtenerEmpleado(this.ElId).subscribe(
      respuesta=>{
        //console.log(respuesta);
        this.formularioDeEmpleados.setValue({
          nombre:respuesta['nombre'],
          correo:respuesta['correo']
        });
      }
    );
    this.formularioDeEmpleados=this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    );
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    //console.log(this.ElId);
    //console.log(this.formularioDeEmpleados.value);
    this.crudService.EditarEmpleado(this.ElId, this.formularioDeEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
}
