import { Component } from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
 
})
export class AppComponent {
  title = 'create-app1';
  subtitle='subtitle';
  users=[{name:'sri',age:20},{name:'los',age:20}];
  count=0;
 
  userLoggedIn=false;
  buttondisable=true;

  constructor(){
    console.log('App constructor')
  };
 
  ngOnInit(){
    console.log('App ngOnInit');
    setTimeout(() =>{
      this.title='tested app';
    },2000);
  };

  
  handling(){
    this.count++;
  }
 
}