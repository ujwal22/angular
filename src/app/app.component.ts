import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  data:string="";
  
  onMouseMove(event: MouseEvent) {
   this.data = "text";
  }
  public xboolean=true;


  

  mouseMove() {
    this.xboolean = false;
    
  }
}
export class FormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newUserForm = new FormGroup({

    FirstName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    LastName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
  })
  isLoginDisplay=true;
  isLoginDisplay1=true;
  isLoginDisplay2=true;
  displayLogin(){
    this.isLoginDisplay = false;
  }
  displayLogin1(){
    this.isLoginDisplay = false;
    this.isLoginDisplay1=false;
  }
  displayLogin2(){
    this.isLoginDisplay=false;
    this.isLoginDisplay2 = false;
  }
}
