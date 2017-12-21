import { NavComponent } from './nav.component';
import {Component, ViewChild} from "@angular/core";
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
 



@Component({
  selector: 'app-root',
  template:`<nav></nav>
            <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Fitness';
  
}
