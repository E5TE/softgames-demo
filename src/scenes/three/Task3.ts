import { Container, Text, TextStyle, Ticker } from "pixi.js";
import { Fix } from "../../utils/Fix";
import { Candle } from "./components/Candle";

export class Task3 extends Container{
    public initialaze(assets:any){
        let candle = new Candle(assets);
        candle.y = Fix.SIZE - candle.height;
        candle.x = Fix.SIZE/2 - candle.width/2;

        let style = new TextStyle({
            fontFamily: 'Arial',
            fill: ['#ffffff'],
            fontSize: 48,
            fontWeight: 'bold',
            lineJoin: 'round'
        });
        let label = new Text('Click on the candle wick to toggle it either  on or off', style);
        label.y = 135;
        label.x =  Fix.SIZE/2 - (label.width/2);  
        let parts = new Text('PARTICLES: 0', style);
        parts.x = Fix.SIZE/2 - (parts.width/2);
        parts.y = 35;
        let ticker = Ticker.shared;
        ticker.add(function(){parts.text = `PARTICLES: ${candle.particlesCount}`;});
        this.addChild(label, candle,parts);
        
        }
}