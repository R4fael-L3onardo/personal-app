import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: false,
})
export class ProjectsPage {
  selectedProject: { title: string; description: string; link: string } | null = null;

  abrirDetalhe(title: string, description: string, link: string) {
    this.selectedProject = { title, description, link };
  }
}
