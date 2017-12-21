import { async } from '@angular/core/testing';
import { MainviewComponent } from './mainview.component';
import { Injectable } from '@angular/core';
import{ Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router'

declare var window:any;
declare var FB:any;


@Injectable()

export class WebService{
  
    name:string;
    dp:string;
    apiRoot: string; 
    me :any;
    constructor(private http: Http, private router: Router){
        this.apiRoot = `//${window.location.hostname}:4200` 
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '1482207548541903',
              cookie     : true,
              xfbml      : true,
              version    : 'v2.11'
            });
              
            FB.AppEvents.logPageView();   
              
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = <HTMLScriptElement>d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));

    }

    getMessages(){
        return this.http.get('http://localhost:3000/list').toPromise();
    }
    

  async  loginFB() {
        FB.login((response: any) => {
            if (response.authResponse) {

             FB.api('/me?fields=name,email,picture', (response: any) => {
               console.log(response);
               this.name = response.name;
               this.dp = response.picture.data.url;
               console.log(this.name);
               console.log(this.dp);
               this.login(response.name, 'password', response.id, response.picture.data.url);
             });
             
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        }, { scopes: 'email,user_photos,user_posts'});
    }

    login(name: string, password: string, fbid?: string, picture?: string){
        this.me = this.name;
        this.getFBdata();
        //this.mainviewComponent.setData(name,picture);
    }

     getUserName(){
        console.log(this.name);
        return this.name;
    }

    getUserPhoto(){
        return this.dp;
    }

    getFBdata(){
        return this.me;
    }
}