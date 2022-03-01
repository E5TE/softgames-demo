import EventEmitter from "eventemitter3";
import { Container, Loader,  Text, TextStyle } from "pixi.js";
import { Fix } from "../utils/Fix";

export class Preloader extends Container {
    public loader:Loader = Loader.shared;
    public eventDispatcher:EventEmitter = new EventEmitter();
    protected label:Text = new Text('') ;

    constructor(){
        super();
        this.buildVisuals();
        this.loader.add("assets/assets.json");
        this.loader.add("assets/assets1.json");
        this.loader.add("assets/cats_.json");
        this.loader.add("assets/612x612-2.jpg");
        this.loader.add("assets/green.jpg");
        this.loader.add("assets/candle.png");
        this.loader.add("assets/emitter.json");
        this.loader.add("assets/particle.png");
        this.loader.onProgress.add(this.updateProgress, this);
        }
        protected buildVisuals():void {
            let style = new TextStyle({
                fontFamily: 'Arial',
                fill: ['#ffffff'],
                stroke: '#2333ff',
                fontSize: 85,
                fontWeight: 'bold',
                lineJoin: 'round',
                strokeThickness: 5,
            });
            this.label.style = style;
            this.label.text = "0%";
            this.addChild(this.label);
            this.alignVisuals();
        }
        protected updateProgress():void{
            if(this.loader.loading) {
                this.label.text = Math.round(this.loader.progress) + "%";
                this.alignVisuals();
                if(this.loader.progress == 100){
                    this.eventDispatcher.emit("gameLoadingComple");
                }

            }
        }
        protected alignVisuals():void {
            this.label.x = Fix.SIZE/2 - this.label.width/2;
            this.label.y = Fix.SIZE/2 - this.label.height/2;
        }
}