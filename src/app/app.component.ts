import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '@elements/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
  title = 'frontend-test-nueva-eps';
}
