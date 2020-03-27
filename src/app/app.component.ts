import { Component} from '@angular/core';

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
