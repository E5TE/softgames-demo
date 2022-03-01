import { Container, Loader, Sprite } from "pixi.js";
import { AnimatedSprite } from "./AnimatedSprite";

export class Card extends AnimatedSprite {
    protected idContainer:Container = new Container();
    protected sheet:any = Loader.shared.resources["assets/assets1.json"].spritesheet;

    constructor(color:string, number:number){
        super();
        this.texture = color == "red" ? this.sheet.textures["redCard.png"] : this.sheet.textures["blueCard.png"];
        this.idFactory(number);
        this.addChild(this.idContainer);
    }
    private idFactory(number:number):void {
        this.idContainer
        let str: string = number.toString();
        let first:Sprite = new Sprite(this.sheet.textures[str[0]+".png"])
        this.idContainer.addChild(first);
        let second:Sprite;
        if(str.length > 1){
                second = new Sprite(this.sheet.textures[str[1]+".png"])
                second.x = first.width;
                this.idContainer.addChild(second);
                if(str.length > 2){
                    let third:Sprite = new Sprite(this.sheet.textures[str[2]+".png"])
                    third.x = second.x + second.width;
                    this.idContainer.addChild(third);
                    
                }
            }
            this.idContainer.x = (this.texture.width/2) - (this.idContainer.width/2);
            this.idContainer.y = 75; 
        }
    }
