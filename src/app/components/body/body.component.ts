import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { gameAnimations } from 'src/app/animations/game-animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: gameAnimations
})
export class BodyComponent implements OnInit {

  @Output() rulesModalEventEmitter = new EventEmitter<boolean>();
  @Output() gameScoreEmitter = new EventEmitter<number>();
  gameScore: number = 0
  gameStep: number = 0;
  
  win: boolean = false
  ramdomClass: HandType= "rock"
  userPicked!: HandType;

  hands = {
    scissors: {
      state: "initial",
      weakness: ["spock", "rock"],
      strength: ["paper", "lizard"]
    },
    spock: {
      state: "initial",
      weakness: ["lizard", "paper"],
      strength: ["scissors", "rock"]
    },
    paper: {
      state: "initial",
      weakness: ["scissors", "lizard"],
      strength: ["spock", "rock"]
    },
    lizard: {
      state: "initial",
      weakness: ["scissors", "rock"],
      strength: ["spock", "paper"]
    },
    rock: {
      state: "initial",
      weakness: ["spock", "paper"],
      strength: ["lizard", "scissors"]
    }
  }
  interval!: any;
  screenType: "desktop" | "mobile" = "desktop"
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenType = 'desktop'

    this.screenType = window.innerWidth < 1000 ? "mobile" : "desktop"
  }

  constructor() { }

  ngOnInit(): void {
    this.screenType = window.innerWidth < 1000 ? "mobile" : "desktop"
  }

  async startCombat(){

      await this.sleep(300)
    
      const interval = setInterval(async () =>{

        let hand = this.getRandomHand()
        while(hand===this.ramdomClass || hand===this.userPicked)
          hand = this.getRandomHand()
  
        this.ramdomClass = hand as HandType
  
      }, 100)

      await this.sleep(3000)
      clearInterval(interval)

      await this.sleep(500)
      this.gameStep=2;

      this.defineResult()
  }

  sleep(ms: number){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(""); // ¡Todo salió bien!
      }, ms);
    });
  }


  getRandomHand(): HandType{
    return Object.keys(this.hands)[Math.floor(Math.random() * 5)] as HandType
  }

  rulesModal():void{
    this.rulesModalEventEmitter.emit()
  }

  defineResult(){
    this.win = this.hands[this.userPicked].strength.find(hand => hand==this.ramdomClass) ? true : false

    if(this.win){
      this.gameScore++
      this.gameScoreEmitter.emit(this.gameScore)
    }
  }
  
  restartGame(){
    this.gameStep=0
    if(!this.win){
      this.gameScore=0
      this.gameScoreEmitter.emit(this.gameScore)
    }
  }

  changeHandState(hand: HandType){

      this.userPicked=hand;
      this.gameStep=1;

      if(this.gameStep==1){
        this.startCombat()
      }

  }
}

export type HandType = "scissors" | "spock" | "paper" | "lizard" | "rock";