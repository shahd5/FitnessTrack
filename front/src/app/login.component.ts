
import { MainviewComponent } from './mainview.component';
import { Component,OnInit  } from '@angular/core';
import { WebService } from './web.service';
import {Router} from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit{
  
  name:string;
  password: string;
  hope:string;

  constructor(private webser: WebService , private router: Router){}
  
  ngOnInit(){
    
  }

   loginFB(){
    this.webser.loginFB();
 
    this.router.navigate(['/list',this.webser.getUserName()]);
  }
}
