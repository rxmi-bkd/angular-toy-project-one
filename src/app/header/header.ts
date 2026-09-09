import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [
    RouterLink
  ],
  styleUrl: './header.css'
})
export class Header {
}
