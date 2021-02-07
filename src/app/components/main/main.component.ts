import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showRulesModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  rulesModal(showModal: boolean){
    this.showRulesModal = showModal
  }

}
