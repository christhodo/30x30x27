import { NgModule } from '@angular/core';
import { LoginComponent } from 'libs/ui-login/src/lib/login/login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from '@project-angular/core-data';
import { RouterModule, Routes } from '@angular/router';
import { WildComponent } from 'libs/ui-login/src/lib/wild/wild/wild.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
