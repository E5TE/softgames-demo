import { Sprite } from "pixi.js";
import { Fix } from "../utils/Fix";

export class FSButton extends Sprite {
      //
      protected startTime:number = 0;
      protected valueStart:number = 0;
      protected valueEnd:number = 0;
      protected duration:number = 500;
      protected isblink:boolean = false;
      protected binded:any;
      //
    constructor(texture:any){
        super(texture);
        this.x = Fix.SIZE/2 - this.width/2;
        this.y = Fix.SIZE/2 - this.height/2;
        this.on("pointerdown", function() {document.body.requestFullscreen();});
        this.binded = this.blinking.bind(this);
    }
    public start():void {
        if(this.isblink) return;
        this.visible = this.interactive = this.isblink = true;
        this.startTime = new Date().getTime();
        this.valueStart = 0.5000;
        this.valueEnd =  this.valueStart - 0.0001;
        requestAnimationFrame(this.binded);
    }
    public stop():void {
        this.visible = this.interactive = this.isblink = false;
    }
    public blinking():void {
        if(!this.isblink) return;
        let currentTime:number = (new Date().getTime()-this.startTime);
        this.alpha = Fix.SineEaseOut(currentTime, this.valueStart, this.valueEnd, this.duration);
        requestAnimationFrame(this.binded);
    }
}