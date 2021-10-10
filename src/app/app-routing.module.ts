import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'agregar-empleado'},//redirecciona a agregar empleado cuando la url es vacia
  {path: 'agregar-empleado', component:AgregarEmpleadoComponent},//carga el componente agregar empleado
  {path: 'listar-empleado', component:ListarEmpleadoComponent},//carga el componente listar empleado
  {path: 'editar-empleado/:id', component:EditarEmpleadoComponent}//carga el componente editar empleado recibiendo como dato id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
