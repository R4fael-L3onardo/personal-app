import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProjectsPageRoutingModule } from './projects-routing.module';
import { ProjectsPage } from './projects.page';
import { ProjectDetailComponent } from '../components/project-detail/project-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsPageRoutingModule
  ],
  declarations: [
    ProjectsPage,
    ProjectDetailComponent
  ]
})
export class ProjectsPageModule {}
