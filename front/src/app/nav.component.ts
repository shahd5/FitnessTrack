import { WebService } from './web.service';
import {ReactiveFormsModule } from '@angular/forms';
import {Component, ViewChild} from "@angular/core";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./app.component.css']
})
export class NavComponent {
  web:WebService;

  hope=[];
  
  
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
    

  public form: FormGroup;
  public group = [
      CreateNewAutocompleteGroup(
          'Search / choose in / from list',
          'completer',
          [
              {title: 'Option 1', id: '1'},
              {title: 'aption 2', id: '2'},
              {title: 'bption 3', id: '3'},
              {title: 'cption 4', id: '4'},
              {title: 'dption 5', id: '5'},
          ],
          {titleKey: 'title', childrenKey: null}
      ),
  ];
  public selected: any[] = [];
  
 

  Selected($event){
    console.log($event.item.title);
  }

  constructor(){}
}
