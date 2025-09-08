import { Component } from '@angular/core';

import { HeaderComponent } from "../../components/header/header.component";
import { HomecontentComponent } from "../../components/homecontent/homecontent.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HomecontentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
