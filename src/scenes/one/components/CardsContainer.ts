import { Container } from "pixi.js";
import { Card } from "./Card";

export class CardsContainer extends Container {
    private interval:any;
    private cards:Array<Card>= new Array();
    private cardCount:number = 0;
    private cardIndex:number = 0;
    constructor(){
        super();
        
        this.sortableChildren = true;
        let toggle:boolean = false;
        for(let i = 1; i < 145; i++){
            let color:string = (!toggle) ? "red": "blue";
            let item:Card = new Card(color, i)
            this.cards.push(item);
            toggle = !toggle;
            item.x = i + 1.75;
            item.y = -i + 1.75;
            this.addChild(item);
        }
        this.scale.x =.5;
        this.scale.y =.5;
        this.y = 350;
        this.x = 70;
    }
    public play():void {
        this.cardCount = this.cards.length -1;
        let item:Card = this.cards[this.cardCount];
        item.moveMe();
        this.interval = setInterval(this.moveStack.bind(this), 1000);
        
    }
    public moveStack():void {
        let oldItem:Card = this.cards[this.cardCount];
        this.setChildIndex(oldItem,this.cardIndex);
        this.cardIndex++
        this.cardCount--;
        if(this.cardCount >= 0)  {
            let item:Card = this.cards[this.cardCount];
            item.moveMe();
        }
        else clearInterval(this.interval);
    }

}