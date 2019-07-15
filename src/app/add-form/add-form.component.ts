import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("af",{static: false,read: false}) fId : ElementRef;
  @ViewChild("addbtn",{static: false,read: false}) addbtn : ElementRef;

  revealAddForm(){
    this.addbtn.nativeElement.removeClass("d-block").addClass("d-none");
    this.fId.nativeElement.removeClass("d-none").addClass("d-block");
  }
  hideAddForm(){
    this.addbtn.nativeElement.removeClass("d-none").addClass("d-block");
    this.fId.nativeElement.removeClass("d-block").addClass("d-none");
  }

  @Input() statusClass: string;
}
