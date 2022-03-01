import { Container,  Texture, TilingSprite } from "pixi.js";
export class TitlingBackground extends Container{
public init(back:Texture){
        let a1 = new TilingSprite(back,612,612);
        let a2 = new TilingSprite(back,612,612);
        let a3 = new TilingSprite(back,612,612);
        let a4 = new TilingSprite(back,612,612);
        let a5 = new TilingSprite(back,612,612);
        let a6 = new TilingSprite(back,612,612);
        this.addChild(a1,a2,a3,a4,a5,a6);
        a2.x = a4.x = a3.y = a4.y = a6.y = 612;
        a5.x =a6.x = 1224;
    }
}