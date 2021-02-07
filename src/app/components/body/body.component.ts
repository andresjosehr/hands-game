import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Output() rulesModalEventEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  rulesModal():void{
    this.rulesModalEventEmitter.emit()
  }

}
