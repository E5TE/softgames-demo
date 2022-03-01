import { Sprite } from "pixi.js";
import { Fix } from "../../../utils/Fix";
export class AnimatedSprite extends Sprite {
    protected startTime:number = 0;
    protected valueStart:number = 0;
    protected valueEnd:number = 0;
    protected duration:number = 2;
    protected isMoving:boolean = false;
    protected destination:number = 600;

    protected bindedMoving:any;
    constructor(){
        super();
        this.bindedMoving = this.moving.bind(this);
    }
    public moveMe():void {
        if(this.isMoving) return;
        this.isMoving = true;
        this.startTime = new Date().getTime();
        this.valueStart = this.x;
        this.valueEnd = this.valueStart + 600;
        requestAnimationFrame(this.bindedMoving);
    }
    public moving():void {
        let currentTime:number = (new Date().getTime()-this.startTime)/1000;
        if((this.x >= (this.valueStart + this.destination))||(currentTime >= (this.duration + 1))){
            this.x = this.valueStart + this.destination;
            this.isMoving = false;
              return;
            } else {
                this.x = Fix.SineEaseOut(currentTime, this.valueStart, this.valueEnd, this.duration);
                requestAnimationFrame(this.bindedMoving);
            }
    }
}