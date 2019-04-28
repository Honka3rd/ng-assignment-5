import { Component, Input } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent{
  @Input('title') title:string;
  isSelected:boolean;
  isClicked:boolean;
  avatars:Array<Object>;
  borderType:string;
  selectedIdx;

  constructor() { 
    this.isSelected = false;
    this.isClicked = false;
    this.avatars = [
      {
        name:'Kallen',
        desc:'机械 圣仪装.今样'
      },
      {
        name:'Raiden',
        desc:'机械 影舞冲击'
      },
      {
        name:'Rita',
        desc:'异能 暗蔷薇'
      }
    ];
    this.borderType = 'normal-border';
    this.selectedIdx = -1;
  }
  onExpandToggle(){
    this.isSelected = !this.isSelected;
  }

  onClickItem(index){
    event.stopPropagation();
    this.selectedIdx = index;
  }

  clickBlank(){
    this.selectedIdx = -1;
  }
}
