import EventEmitter from "events";
import {  Sprite  } from "pixi.js";

export class MainMenu extends Sprite {
    private exitButton:Sprite = new Sprite();
    private downStateX:any;
    private upStateX:any;
    //
    private task1Button:Sprite = new Sprite();
    private downState1:any;
    private upState1:any;
    //
    private task2Button:Sprite = new Sprite();
    private downState2:any;
    private upState2:any;
    //
    private task3Button:Sprite = new Sprite();
    private downState3:any;
    private upState3:any;
    //
    public eventDispatcher:EventEmitter = new EventEmitter();
    constructor(){
        super();
        // this.hide();
        this.addChild(this.exitButton,this.task1Button,this.task2Button,this.task3Button);
        //
        this.exitButton.interactive = true;
        this.exitButton.buttonMode = true;
        this.exitButton.on("pointerdown", this.closeMenu.bind(this));
        this.exitButton.on("pointerup", this.closeUp.bind(this));
        this.exitButton.on("pointerover", this.closeOver.bind(this));
        this.exitButton.on("pointerout", this.closeUp.bind(this));
        //
        this.task1Button.interactive = true;
        this.task1Button.buttonMode = true;
        this.task1Button.on("pointerdown", this.task1.bind(this));
        this.task1Button.on("pointerup", this.task1Up.bind(this));
        this.task1Button.on("pointerover", this.task1Over.bind(this));
        this.task1Button.on("pointerout", this.task1Up.bind(this));
        //
        this.task2Button.interactive = true;
        this.task2Button.buttonMode = true;
        this.task2Button.on("pointerdown", this.task2.bind(this));
        this.task2Button.on("pointerup", this.task2Up.bind(this));
        this.task2Button.on("pointerover", this.task2Over.bind(this));
        this.task2Button.on("pointerout", this.task2Up.bind(this));
        //
        this.task3Button.interactive = true;
        this.task3Button.buttonMode = true;
        this.task3Button.on("pointerdown", this.task3.bind(this));
        this.task3Button.on("pointerup", this.task3Up.bind(this));
        this.task3Button.on("pointerover", this.task3Over.bind(this));
        this.task3Button.on("pointerout", this.task3Up.bind(this));
        //
        this.task1Button.x = this.task2Button.x = this.task3Button.x = 350 - this.task1Button.width/2;
        this.task1Button.y = 290;
        this.task2Button.y = 500;
        this.task3Button.y = 700;
        this.exitButton.x = 925;
        this.exitButton.y = 70;
    }
    public setView(sheet:any):void {
        this.texture = sheet["menuBackground.png"];
        //
        this.downStateX = sheet["xDown.png"];
        this.upStateX = sheet["xUp.png"];
        this.exitButton.texture =  this.upStateX;
        //
        this.downState1 = sheet["task1Down.png"];
        this.upState1 = sheet["task1Up.png"];
        this.task1Button.texture = this.upState1;
        //
        this.downState2 = sheet["task2Down.png"];
        this.upState2 = sheet["task2Up.png"];
        this.task2Button.texture = this.upState2;
        //
        this.downState3 = sheet["task3Down.png"];
        this.upState3 = sheet["task3Up.png"];
        this.task3Button.texture = this.upState3;
    }
    private closeOver():void {
        this.exitButton.texture = this.downStateX;
    }
    private closeUp():void {
        this.exitButton.texture = this.upStateX;
    }
    private task1Over():void {
        this.task1Button.texture = this.downState1;
    }
    private task1Up():void {
        this.task1Button.texture = this.upState1;
    }
    private task2Over():void {
        this.task2Button.texture = this.downState2;
    }
    private task2Up():void {
        this.task2Button.texture = this.upState2;
    }
    private task3Up():void {
        this.task3Button.texture = this.upState3;
    }
    private task3Over():void {
        this.task3Button.texture = this.downState3;
    }
    public openMenu():void {
        this.show();
    }
    private closeMenu():void {
        this.closeOver();
        this.eventDispatcher.emit("closeMenu");
    }
    private task1():void {
        this.task1Over();
        this.eventDispatcher.emit("task_1");
    }
    private task2():void {
        this.task2Over();
        this.eventDispatcher.emit("task_2");
    }
    private task3():void {
        this.task3Over();
        this.eventDispatcher.emit("task_3");
    }
    //TODO:Perform animation
    public show():void {
        this.visible = true;
    } 
    public hide():void {
        this.visible = false;
    } 
}