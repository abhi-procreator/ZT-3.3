import { Component, OnInit } from '@angular/core';
import { ItemsModal } from './model/items.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items1Array:ItemsModal[]=[
    {icons:'./assets/choice.png',title:'choice'},
    {icons:'./assets/match.png',title:'match'},
    {icons:'./assets/hottext.png',title:'hottext'},
    {icons:'./assets/slider.png',title:'slider'},
    {icons:'./assets/media.png',title:'media'},
  ];
  
  items2Array:ItemsModal[]=[
    {icons:'./assets/associate.png',title:'associate'},
    {icons:'./assets/order.png',title:'order'},
    {icons:'./assets/gap-match.png',title:'gap-match'},
    {icons:'./assets/Ext.text.png',title:'Ext.text'},
    {icons:'./assets/file-upload.png',title:'file-upload'},
  ];
}
