import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { IComponent, LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  selected: string = ''
  obj: any = {
    placeholder: '',
    type: '',
    checkboxes: [{
     value: '' 
    }] 
  }
  addCheckbox() {
    this.getLayout(this.currentItem)!.obj.checkboxes.push({value: ''});
  }
  deleteCheckbox(index: number) {
    this.getLayout(this.currentItem)!.obj.checkboxes.splice(index, 1);
  }
  currentItem: string = '';
  propertiesClicked: boolean = false

  constructor(private layoutService: LayoutService) { }
  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }
  addItem(id: string) {
    this.propertiesClicked = false;
    this.layoutService.addItem();
    this.layoutService.dropItem(id)
  }
  deleteItem(id: string) {
    this.propertiesClicked = false;
    this.layoutService.deleteItem(id);
  }
  get components(): IComponent[] {
    return this.layoutService.components;
  }
  setDropId(id: string) {
    this.layoutService.setDropId(id);
  }
  changedOptions(): void {
    if (this.layoutService.options.api && this.layoutService.options.api.optionsChanged) {
      this.layoutService.options.api.optionsChanged();
    }
    console.log(this.layoutService.getLayout(this.currentItem)?.rows, this.layoutService.getLayout(this.currentItem)?.cols)
  }
  onClick(id: string) {
    this.propertiesClicked = true;
    this.selected = this.getComponentRef(id); 
    this.currentItem = id;
    //this.index=this.layoutService.getLayout(this.currentItem)
    this.layoutService.getLayout(this.currentItem)!.resizeEnabled = false;
  }
  getComponent(id: string) {
    return this.layoutService.getComponent(id);
  }
  dropItem(id: string) {
    this.layoutService.dropItem(id);
  }
  getComponentRef(id: string) {
    return this.layoutService.getComponentRef(id);
  }
  getLayout(id: string) {
    return this.layoutService.getLayout(id)
  }
  ngOnInit(): void {
  }

}
