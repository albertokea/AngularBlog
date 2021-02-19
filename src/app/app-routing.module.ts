import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { Error404Component } from './error404/error404.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
