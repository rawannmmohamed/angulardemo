import { Component } from '@angular/core';
import { Store } from '../../models/store';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  
  store:Store = {
    name: 'Angular Demo Store',
    branches: ['Cairo', 'Giza', 'Alexandria'],
    logo: '/favicon.ico',
  }

}
