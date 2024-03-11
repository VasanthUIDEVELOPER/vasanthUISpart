import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  // standalone: true,
  // imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  instock:number=0;
  @Input()
  outstock:number=0;
  @Output()
  selectedfilterradiobuttonchange: EventEmitter<string>=new EventEmitter<string>;
  selectedfilterradiobutton:string='all';
  onselectedfilterradiobuttonchange(){
    this.selectedfilterradiobuttonchange.emit(this.selectedfilterradiobutton);
  }
}
