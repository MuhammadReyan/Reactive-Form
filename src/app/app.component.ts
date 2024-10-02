import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceFormComponent } from './resource-form/resource-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ResourceFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manage Cloud Resources';
}
