import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarModel } from './model/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() ParentData:EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {  
  }

  sidebarItemClick(sidebarData:string){
    this.ParentData.emit(sidebarData);  
  }

  sidebarArray  :SidebarModel[] = [
  {title:'Items',icon:'./assets/items.png'},
  {title:'Items',icon:'./assets/tests.png'},
  {title:'Items',icon:'./assets/test-taker.png'},
  {title:'Items',icon:'./assets/group.png'},
  {title:'Items',icon:'./assets/deliveries.png'},
  {title:'Items',icon:'./assets/result.png'},
  ]

}
