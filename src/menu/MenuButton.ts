import { Sprite } from "pixi.js";
import EventEmitter from "eventemitter3";

export class MenuButton extends Sprite {

    public eventDispatcher:EventEmitter = new EventEmitter();
    private downStateM:any;
    private upStateM:any;
    public menuVisible:boolean = true;
    constructor(){
        super();
        this.interactive = true;
        this.buttonMode = true;
        this.on("pointerdown", this.hideMenu.bind(this));
        this.on("pointerup", this.buttonUp.bind(this));
        this.on("pointerover", this.buttonDown.bind(this));
        this.on("pointerout", this.buttonUp.bind(this));
    }
    public setView(sheet:any):void {
        this.downStateM = sheet["menu3Down.png"];
        this.upStateM = sheet["menu3Up.png"];
        this.texture = this.downStateM;
    }
    private buttonUp():void {
        this.texture = this.downStateM;
    }
    private buttonDown():void {
        this.texture = this.upStateM;
    }
    private hideMenu():void {
        this.buttonDown();
        let event:string = (this.menuVisible) ? "closeMenu" : "openMenu";
        this.eventDispatcher.emit(event);
    }
}