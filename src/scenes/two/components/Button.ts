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
    constructor() {
        super();
        let sheet:any = Loader.shared.resources["assets/cats_.json"].spritesheet;
        this._downState = sheet.textures["btnPressed.png"];
        this._overState = sheet.textures["btnHover.png"];
        this._upState = sheet.textures["btnEnabled.png"];
        this._disable = sheet.textures["btnDisabled.png"];
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
            stroke: '#00',
            fontSize: 23,
            fontWeight: 'lighter',
            lineJoin: 'round',
            strokeThickness: 2,
        });
        this.label = new Text('Next Random Line', style);
        this.label.x = -this.label.width/2;
        this.label.y = -this.label.height/2;
        this.addChild(this.label);
        this.y = Fix.SIZE/2;
        this.x = Fix.SIZE/2;
        this.scale.y = this.scale.x = 1.5;
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
