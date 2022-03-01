import { Loader, Sprite, TextStyle, Texture, Text } from "pixi.js";
import { Fix } from "../../../utils/Fix";

export class Button extends Sprite {
    private _downState:Texture;
    private _overState:Texture;
    private _upState:Texture;
    private _disable:Texture;

    protected _isDown:boolean = false;
    protected _isOver:boolean = false;
    protected label:any;
    constructor(_text:string = "") {
        super();
        let sheet:any = Loader.shared.resources["assets/assets1.json"].spritesheet;
        this._downState = sheet.textures["btn_pressed.png"];
        this._overState = sheet.textures["btn_hover.png"];
        this._upState = sheet.textures["btn_enabled.png"];
        this._disable = sheet.textures["btn_disabled.png"];
        this.setupInteractions();
        this.anchor.set(0.5);
        this.enable = true;
        
        let style = new TextStyle({
            fontFamily: 'Arial',
            dropShadow: true,
            dropShadowAlpha: 0.5,
            dropShadowAngle: 2.1,
            dropShadowBlur: 1.5,
            dropShadowColor: '0x111111',
            dropShadowDistance: 2,
            fill: ['#ffffff'],
            stroke: '#FF9B28',
            fontSize: 30,
            fontWeight: 'lighter',
            lineJoin: 'round',
            strokeThickness: 2,
        });
        this.label = new Text(_text, style);
        this.label.x = -this.label.width/2;
        this.label.y = -this.label.height/2;
        this.addChild(this.label);
        this.y = 120;
        this.x = Fix.SIZE/2;
    }
    public set enable(value:boolean) {
        if(value){
            this.interactive = true;
            this.buttonMode = true;
            this.texture = this._upState;
        }else {
            this.interactive = false;
            this.buttonMode = false;
            this.texture = this._disable;
            this.label.alpha = .65;
        }
    }
    private setupInteractions(): void {
        this.on("pointerup", this.onButtonUp);
        this.on("pointerupoutside", this.onButtonUp);
        this.on("pointerdown", this.onButtonDown);
        this.on("pointerover", this.onButtonOver);
        this.on("pointerout", this.onButtonOut);
    }
    private onButtonDown(): void {
        this._isDown = true;
        this.texture = this._downState;
    }
    private onButtonOut(): void {
        this._isOver = false;
        this.texture = this._upState;
    }
    private onButtonOver(): void {
        this._isOver = true;
        this.texture = this._overState;
    }
    private onButtonUp(): void {
        this._isDown = false;

        if (this._isOver) {
            this.texture = this._overState;
        } else {
            this.texture = this._upState;
        }
    }
}
