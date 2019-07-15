import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css','./bootstrap.min.css']
})
export class UserPanelComponent implements OnInit {

  constructor() {
   }

  //  @ViewChild("addForm",{static:false,read: false}) id: ElementRef;

  ngOnInit() {
  }

  // showAddForm(){
  //   this.id.nativeElement.removeClass("d-none").addClass("d-block")
  // }
}
