import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  // standalone: true,
  // imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchtext:string='';
  @Output()
  searchtextchange: EventEmitter<string>=new EventEmitter<string>()
  onsearchtextchange(){
    this.searchtextchange.emit(this.searchtext);
  }
  updatesearchtext(inputEL:HTMLInputElement){
    this.searchtext=inputEL.value;
    this.searchtextchange.emit(this.searchtext)
        // this.searchtext=event.target.value;
      }

//   constructor(){}
//   updatesearchtext(event: any){
//     this.searchtext=event.target.value;
//   }
//   setstacker(){
//   setTimeout(() => {this.searchtext=" "
    
//   }, 10000);
// }
// ngAfterViewInit(){
//   this.setstacker();
}
