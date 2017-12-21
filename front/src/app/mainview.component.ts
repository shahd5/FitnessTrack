import { Component } from '@angular/core';
import {WebService} from './web.service';
import { ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./app.component.css']
})
export class MainviewComponent {
  
  name: string;
  dp: string;

   constructor(private webService : WebService , private route:ActivatedRoute){
   
    this.name =  this.webService.getUserName();
    this.dp =  this.webService.getUserPhoto();
    console.log(this.webService.getFBdata());
    console.log("hghghg"+this.name);
    this.route.params.subscribe((params:Params)=>{
      let userID = params['userID'];
      console.log(userID);
     let name1 = this.webService;
     console.log(name1);

    })

  }

  async ngOnInit(){
      var response = await this.webService.getMessages();
      var fbdata = await this.webService.getFBdata();
      console.log(response.json());
      this.messages = await response.json();
      this.route.params.subscribe((params:Params)=>{
        let userID = params['userID'];
        console.log(userID);
       let name1 = this.webService;
       console.log(name1);

      })

     
  }
  select(index){
    console.log(index);
    this.done = this.route.snapshot.params.name;
  }
  done =[];
  messages = [];
  data:string;

  setData(name: string, dp: string){
    this.name = name;
    this.dp = dp;
  }
}
