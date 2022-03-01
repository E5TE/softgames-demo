import {    Spritesheet, Texture } from "pixi.js";

export class RandomObjectsLibrary {
   private words:Array<string> = new Array();
   private images:Array<Texture> = new Array();
   constructor(sheet:Spritesheet){
      this.words = ["Are you serious?", "LOL", "OMG", "What?!",
                    "I am tired", "What a joy", "Did't you?", "I love",
                    "awwwww", "So sad...", "Waiting for it...", "For sure!!" ,
                   "Lucky you", "I forgive you", "Cool", "It's okay"];
      for(let i=0; i < 16; i++) {
         this.images.push(sheet.textures["cats-"+[i]+".png"]);
      }
   }
   public getOne():any {
      let index:number = Math.floor(Math.random() * (Math.floor(15) - Math.ceil(0) + 1) + Math.ceil(0));
      if( Math.floor(Math.random() * 2) == 0)
         return this.words[index];
         else return this.images[index];
   }
}