import { Container, Sprite, Text, TextStyle, Texture } from "pixi.js";

export class LineParser extends Container {
    private curWidth:number = 0;
    private margin:number = 5;
    private randomValue:number = 0;
    constructor(type1:any, type2:any, type3:any) {
        super();
        //This will choose a random number between 30 and 70 for the font size
        this.randomValue = Math.floor(Math.random() * (Math.floor(70) - Math.ceil(30) + 1) + Math.ceil(30));
        if(typeof(type1) == 'string') this.prepareText(type1);
        else this.prepareSprite(type1);
        if(typeof(type2) == 'string') this.prepareText(type2);
        else this.prepareSprite(type2);
        if(typeof(type3) == 'string') this.prepareText(type3);
        else this.prepareSprite(type3);

    }
    private prepareText(item:string):void {
        let style = new TextStyle({
            fontFamily: 'Helvetica',
            dropShadow: true,
            dropShadowAlpha: 0.5,
            dropShadowAngle: 2.1,
            dropShadowBlur: 3,
            dropShadowColor: '0x00',
            dropShadowDistance: 5,
            fill: ['#ffffff'],
            stroke: '#cdcdcd',
            fontSize: this.randomValue,
            fontWeight: 'lighter',
            lineJoin: 'round',
            strokeThickness: 2,
        });
        let label = new Text(item , style);
        label.x = this.curWidth;
        this.curWidth += (label.width + this.margin);
        this.addChild(label);
    }
    
    private prepareSprite(item:Texture):void{
        let image = new Sprite(item);
        image.height = image.width = this.randomValue + 5;
        image.y = 5;
        image.x = this.curWidth;
        this.curWidth += (image.width + this.margin);
        this.addChild(image);

    }
}