import { Component } from '@angular/core';
import { LoaderComponent } from './shared/components/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  loaderComponent = LoaderComponent;
}
