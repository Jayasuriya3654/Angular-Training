import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'node:process';
import { PageCreateComponent } from './common/page-create/page-create.component';
import { CountComponent } from './common/count/count.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageCreateComponent,CountComponent],
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
  

  handling(){
    this.count++;
  }

}
