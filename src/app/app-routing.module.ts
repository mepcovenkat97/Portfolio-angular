import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { OthersComponent } from './others/others.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path:'aboutme', component:AboutmeComponent},
  {path:'contact', component:ContactComponent},
  {path:'certification', component:CertificationComponent},
  {path:'others', component:OthersComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'skills', component:SkillsComponent},
  {path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  {path:'index', redirectTo:'/aboutme', pathMatch:'full'},//This loads the default component
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
