import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplesComponent } from './samples/samples.component';
import { ParentScrollComponent } from './parent/parent-scroll.component';

const routes: Routes = [
    { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'samples' 
  },
  { 
    path: 'samples', 
    component: SamplesComponent 
  },
  { 
    path: 'parent-scroll', 
    component: ParentScrollComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
