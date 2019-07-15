import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("up",{static: false,read: false}) myId: ElementRef;

  usersInfo: [{firstName: "ali",lastName: "moghimi", email: "alimoqimi97@gmail.com"}];

  public showAddWindow(){
    this.myId.nativeElement.showAddForm();
  }

}
