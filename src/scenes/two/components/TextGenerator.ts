import { Container, Loader } from "pixi.js";
import { Fix } from "../../../utils/Fix";
import { LineParser } from "../../../utils/LineParser";
import { RandomObjectsLibrary } from "../../../utils/RandomObjectsLibrary";
import { Button } from "./Button";

export class TextGenerator extends Container{

    protected button:Button = new Button();
    protected sheet:any = Loader.shared.resources["assets/cats_.json"].spritesheet
    private lib:RandomObjectsLibrary = new RandomObjectsLibrary(this.sheet);
    protected lin:any;
    constructor(){
        super();
        this.addChild(this.button);
        this.button.on("pointerdown", this.nextText.bind(this));
    }
    private nextText():void {
        if(this.children.length > 1) this.removeChild(this.lin);
        this.lin = new LineParser(this.lib.getOne(),this.lib.getOne(),this.lib.getOne());
        this.lin.y = Fix.SIZE/4 - this.lin.height/2;
        this.lin.x = Fix.SIZE/2 - this.lin.width/2;
        this.addChild(this.lin);

    }
}