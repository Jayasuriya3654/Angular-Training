import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-create',
  standalone: true,
  imports: [],
  templateUrl: './page-create.component.html',
  styleUrl: './page-create.component.scss'
})
export class PageCreateComponent {
  @Input() parentTitle :string ='';
}
