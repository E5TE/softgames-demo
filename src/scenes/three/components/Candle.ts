import { Emitter, upgradeConfig } from "@pixi/particle-emitter";
import {  ParticleContainer, Sprite } from "pixi.js";

export class Candle extends Sprite {
    protected flame:ParticleContainer = new ParticleContainer();
    protected clickArea:Sprite = new Sprite();
    protected emitter:Emitter;

    constructor(assets:any){
        super();
        this.texture = assets["assets/candle.png"].texture;
        this.flame.setProperties({scale: true, position: true, rotation: true, uvs: true, alpha: true});
        this.flame.scale.y = .50;
        this.flame.scale.x = .25;
        this.flame.x = this.texture.width/2;
        this.addChild(this.flame);
        let config:any = assets["assets/emitter.json"].data;
        this.emitter = new Emitter(this.flame ,upgradeConfig(config, ['assets/particle.png']));
        let elapsed = Date.now();
        this.emitter.autoUpdate = true;
        this.emitter.update((Date.now() - elapsed)* 0.001);   
        this.emitter.emit = true;

        this.clickArea.texture = assets["assets/particle.png"].texture;
        this.clickArea.scale.x = this.clickArea.scale.y = 2;
        this.clickArea.x = this.texture.width/2 - this.clickArea.width/2;
        this.clickArea.interactive = true;
        this.clickArea.buttonMode = true;
        this.clickArea.on("pointerdown", this.onButtonDown.bind(this));

        this.clickArea.alpha = 0;
        this.addChild(this.clickArea);

    }
    public get particlesCount():number{
        return this.emitter.particleCount;
    }
    public turnMeOn():void {
        this.emitter.emit = true;
    }
    public turnMeOff():void {
        this.emitter.emit = false;
    }
    protected onButtonDown():void {
        this.emitter.emit = !this.emitter.emit;
    } 
}