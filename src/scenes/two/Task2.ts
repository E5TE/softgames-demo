import { Container, Sprite } from "pixi.js";
import { Fix } from "../../utils/Fix";
import { TextGenerator } from "./components/TextGenerator";


export class Task2 extends Container{
    public initialaze(assets:any){
        let background = new Sprite(assets["assets/green.jpg"].texture);
        background.x = Fix.SIZE/2 - background.width/2;
        let tg:TextGenerator = new TextGenerator();
        this.addChild(background, tg);
    }
}