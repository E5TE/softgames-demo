import { Container } from "pixi.js";
import { Task1 } from "../scenes/one/Task1";
import { Task3 } from "../scenes/three/Task3";
import { Task2 } from "../scenes/two/Task2";

export class TasksManager extends Container {
    private scene1:Task1 = new Task1();
    private scene2:Task2 = new Task2();
    private scene3:Task3 = new Task3();
    constructor(){
        super();
        this.addChild(this.scene1, this.scene2, this.scene3);
        this.scene1.visible = false;
        this.scene2.visible = false;
        this.scene3.visible = false;
    }
    public buildScenes(assets:any):void {
        this.scene1.initialaze(assets);
        this.scene2.initialaze(assets);
        this.scene3.initialaze(assets);
    }
    public show1():void {
        this.scene1.visible = true;
        this.scene2.visible = false;
        this.scene3.visible = false;
    }
    public show2():void {
        this.scene2.visible = true;
        this.scene1.visible = false;
        this.scene3.visible = false;
    }
    public show3():void {
        this.scene3.visible = true;
        this.scene1.visible = false;
        this.scene2.visible = false;
    }
}