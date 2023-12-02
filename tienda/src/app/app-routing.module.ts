import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/index',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
