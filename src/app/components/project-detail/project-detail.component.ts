import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: false,
})
export class ProjectDetailComponent {
  @Input() project: { title: string; description: string; link: string } | null = null;
}
