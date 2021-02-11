import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() gameScore: number = 0
  ngOnChanges(model: any) {
    console.log(model);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
