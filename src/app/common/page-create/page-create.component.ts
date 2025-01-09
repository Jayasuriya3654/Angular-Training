import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrl: './page-create.component.scss'
})
export class PageCreateComponent implements OnInit,OnChanges,OnDestroy{
  @Input() parentTitle :string ='';
  childElementRef: any;
 
  ngOnInit() {
    console.log("page create ngOnInit")
  };
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes)
  };

  ngOnDestroy(){
    console.log("page create ngOnDestroy"); 
  }

  ngAfterViewInit() {
    console.log("page create ngAfterViewInit");
    console.log('Parent Title after view init:', this.parentTitle);
    setTimeout(() => {
      console.log('Delayed initialization after view init');
    }, 1000);
  }
}
