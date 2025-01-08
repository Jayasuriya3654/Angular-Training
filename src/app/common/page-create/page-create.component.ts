import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrl: './page-create.component.scss'
})
export class PageCreateComponent implements OnInit,OnChanges{
  @Input() parentTitle :string ='';
 
  ngOnInit() {
    console.log("page create ngOnInit")
  };
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes)
  };

  ngOnDestroy(){
    console.log("page create ngOnDestroy"); 
  }
}
