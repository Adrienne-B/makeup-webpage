import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeupComponent } from './makeup/makeup.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'makeup', component: MakeupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }