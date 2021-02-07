import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, style, stagger, query, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-rules-modal',
  templateUrl: './rules-modal.component.html',
  styleUrls: ['./rules-modal.component.scss'],
  animations: [
    trigger("fadeInTrigger", [
      transition(":enter", [
          style({opacity: 0}),
          animate(
            "200ms cubic-bezier(0.35, 0, 0.25, 1)",
            style({ opacity: 1})
          )
      ])
    ]),
    trigger("fadeOutTrigger", [
      transition(":leave", [
        query(".ani", [
          style({opacity: 1}),
            animate(
              "200ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 0})
            )
        ])
      ])
    ])
  ]
  
})
export class RulesModalComponent implements OnInit {

  @Output() rulesModalEventEmitter = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  
  rulesModal():void{
    this.rulesModalEventEmitter.emit()
  }

}
