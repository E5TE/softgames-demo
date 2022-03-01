import { Container } from "pixi.js";
import { Fix } from "../../utils/Fix";
import { Button } from "./components/Button";
import { CardsContainer } from "./components/CardsContainer";
import { TitlingBackground } from "./components/TitlingBackground";

export class Task1 extends Container{
    private background:TitlingBackground = new TitlingBackground();
    public initialaze(assets:any){
        this.background.init(assets["assets/612x612-2.jpg"].texture);
        this.background.x = Fix.SIZE/2 - this.background.width/2;
        let button:Button = new Button("Start to move");
        let cardMan:CardsContainer = new CardsContainer();
        cardMan.x = Fix.SIZE/2 - ((cardMan.width/2)/cardMan.scale.x);
        this.addChild(this.background,cardMan,button);
        button.on("pointerdown", function(){
          cardMan.play();
          button.enable = false;
        });
    }
}