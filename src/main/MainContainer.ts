import { Container, Sprite } from "pixi.js";
import { FSButton } from "../menu/FSButton";
import { Fix } from "../utils/Fix";

export class MainContainer extends Container {
    public topRight:Array<Sprite> = new Array;
    protected fsb:any;
    protected isMobile:boolean = false;
  
    constructor(){
        super();
        (<any>window).addEventListener('resize', this.resizeGame.bind(this));
        (<any>window).screen.orientation.addEventListener('change', this.resizeGame.bind(this));
        document.addEventListener('fullscreenchange', this.fullscreenchanged.bind(this));
    }
    public resizeGame():void {
        let min = Math.min(window.innerWidth , window.innerHeight);
        this.scale.x  = this.scale.y  = min / Fix.SIZE;
        this.y = window.innerHeight/2 - ((Fix.SIZE/2)*this.scale.y);
        this.x = window.innerWidth/2 - ((Fix.SIZE/2)*this.scale.x);
        if (this.topRight.length > 0) this.handleTopRight();
    }
    protected handleTopRight():void {
        let gap:number = this.isMobile ? 0 : 30;
        let btn:Sprite  = this.topRight[0] as Sprite;
        btn.scale.x = btn.scale.y = this.scale.x;
        btn.x = window.innerWidth - (btn.height + gap);
    }
    private fullscreenchanged():void {
        if(this.isMobile) {
            if (!this.isFullScreen()) this.fsb.start() as FSButton;
            else this.fsb.stop() as FSButton;
        }
    }
    public fullScreenButton(btn:FSButton):void {
        this.isMobile = true;
        this.fsb = btn;
        this.addChild(this.fsb);
        this.fsb.start();
    }
    protected isFullScreen():boolean {
        let full_screen_element = document.fullscreenElement || null;
        if(full_screen_element === null)
            return false;
        else
            return true;
    }
}