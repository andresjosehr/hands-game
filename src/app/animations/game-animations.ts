import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

  export const gameAnimations=[
    trigger('gameInitial', [

        state("0-desktop", style({opacity: "1", pointerEvents: "all", transform: "translateY(0px)", display: "block"})),
        state("1-desktop", style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"})),
        state("2-desktop", style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"})),
        transition("0-desktop => 1-desktop",[
            query(".btn-container", [
                style({opacity: "1", pointerEvents: "all"}),
                    stagger(100, [
                        animate("200ms cubic-bezier(0.35, 0, 0.25, 1)", style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"}))
                ])
            ]),
            animate("200ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),
        transition("2-desktop => 0-desktop",[
            query(".btn-container", [ 
                style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"}) 
            ]),
            animate("500ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),



        state("0-mobile", style({opacity: "1", pointerEvents: "all", transform: "translateY(0px)", display: "block"})),
        state("1-mobile", style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"})),
        state("2-mobile", style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"})),
        transition("0-mobile => 1-mobile",[
            query(".btn-container", [
                style({opacity: "1", pointerEvents: "all"}),
                    stagger(100, [
                        animate("200ms cubic-bezier(0.35, 0, 0.25, 1)", style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"}))
                ])
            ]),
            animate("200ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),
        transition("2-mobile => 0-mobile",[
            query(".btn-container", [ 
                style({opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none"}) 
            ]),
            animate("500ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),


     ]),


     trigger('gameCombat', [

        state("0-desktop", style({opacity: "0", pointerEvents: "none", transform: "translateY(1000px)"})),
        state("1-desktop", style({opacity: "1", pointerEvents: "all", transform: "translateY(-50px)"})),
        state("2-desktop", style({opacity: "1", pointerEvents: "all", transform: "translateY(-50px)"})),
        transition("0-desktop => 1-desktop",animate("2500ms cubic-bezier(0.35, 0, 0.25, 1)")),
        transition("2-desktop => 0-desktop",animate("1000ms cubic-bezier(0.35, 0, 0.25, 1)")),



        state("0-mobile", style({opacity: "0", pointerEvents: "none", transform: "translateY(1000px)"})),
        state("1-mobile", style({opacity: "1", pointerEvents: "all", transform: "translateY(0px)"})),
        state("2-mobile", style({opacity: "1", pointerEvents: "all", transform: "translateY(0px)"})),
        transition("0-mobile => 1-mobile",animate("2500ms cubic-bezier(0.35, 0, 0.25, 1)")),
        transition("2-mobile => 0-mobile",animate("1000ms cubic-bezier(0.35, 0, 0.25, 1)")),



     ]),

     trigger('gameCombatResult', [
        state("0-desktop", style({width: "750px"})),
        state("1-desktop", style({width: "500px"})),
        state("2-desktop", style({width: "750px"})),
        transition("1-desktop => 2-desktop",[
            animate("1000ms cubic-bezier(0.35, 0, 0.25, 1)"),
        ]),



        state("0-mobile", style({width: "250px"})),
        state("1-mobile", style({width: "250px"})),
        state("2-mobile", style({width: "250px"})),
        transition("1-mobile => 2-mobile",[
            animate("1000ms cubic-bezier(0.35, 0, 0.25, 1)"),
        ])


    ]),

     trigger('gameCombatResultText', [
        /* state("0", style({opacity: "0"})), */
        state("1-desktop", style({opacity: "0"})),
        state("2-desktop", style({transform: "translateY(0px)", opacity: "1"})),
        transition("1-desktop => 2-desktop", [animate("1000ms cubic-bezier(0.35, 0, 0.25, 1)")]),

        state("1-mobile", style({opacity: "0"})),
        state("2-mobile", style({transform: "translateY(0px)", opacity: "1"})),
        transition("1-mobile => 2-mobile", [animate("1000ms cubic-bezier(0.35, 0, 0.25, 1)")])

     ]),

























     trigger('gameInitial', [

        
     ]),


     trigger('gameCombat', [

     ]),

     trigger('gameCombatResult', [
     
    ]),

     trigger('gameCombatResultText', [
        /* state("0", style({opacity: "0"})), */
        
     ]),








  ]
