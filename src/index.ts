import { Application,    Text,  Texture, Ticker, utils } from "pixi.js";
import { MainContainer } from "./main/MainContainer";
import { Preloader } from "./main/Preloader";
import { TasksManager } from "./main/TasksManager";
import { FSButton } from "./menu/FSButton";
import { MainMenu } from "./menu/MainMenu";
import { MenuButton } from "./menu/MenuButton";

class Game extends Application {
    protected sheet:any;
    protected fsBtn:any;
    //
    public ticker:Ticker = Ticker.shared;
    //
    public sceneMan:TasksManager = new TasksManager();
    public mainMenu:MainMenu = new MainMenu();
    public menuButton:MenuButton = new MenuButton();
    public mainContainer:MainContainer = new MainContainer();
    public preloader:Preloader = new Preloader();
    //
    constructor(config:any = {resizeTo:(<any>window) }){
        super(config);
        this.renderer.resize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.view);
        this.stage.addChild(this.mainContainer);
        this.mainContainer.addChild(this.preloader);
        this.mainContainer.resizeGame();
        //
        this.preloader.eventDispatcher.addListener("gameLoadingComple", this.loadCompleteHandler.bind(this));
        this.menuButton.eventDispatcher.addListener("openMenu", this.openMenuHandler.bind(this));
        this.menuButton.eventDispatcher.addListener("closeMenu", this.closeMenuHandler.bind(this));
        this.mainMenu.eventDispatcher.addListener("closeMenu", this.closeMenuHandler.bind(this));
        this.mainMenu.eventDispatcher.addListener("task_1", this.task1Handler.bind(this));
        this.mainMenu.eventDispatcher.addListener("task_2", this.task2Handler.bind(this));
        this.mainMenu.eventDispatcher.addListener("task_3", this.task3Handler.bind(this));
        //
        let fps = new Text('FPS: 0', { fill: 0xffffff });
        fps.x = 10;
        this.stage.addChild(fps,this.menuButton);
        this.ticker.add(function() {fps.text =  `FPS: ${Ticker.shared.FPS.toFixed(2)}`;});
        
    }
    public init():void {
        this.preloader.loader.load();
    }
    protected buildScenes():void {
        this.sceneMan.buildScenes(this.preloader.loader.resources);
        this.sheet = this.preloader.loader.resources["assets/assets.json"].textures;
        this.mainMenu.setView(this.sheet);
        this.menuButton.setView(this.sheet);
        this.mainContainer.addChild(this.sceneMan, this.mainMenu);
        this.mainContainer.topRight.push(this.menuButton);
        
        if(utils.isMobile.any) {
            let fsbtn:Texture = this.sheet["fullScreenBtn.png"];
            this.fsBtn = new FSButton(fsbtn);
            this.mainContainer.fullScreenButton(this.fsBtn);
        }
        this.mainContainer.resizeGame();
    }
    //Handlers
    protected loadCompleteHandler():void {
        this.mainContainer.removeChild(this.preloader);
        this.preloader.removeListener("gameLoadingComple", this.loadCompleteHandler.bind(this));
        this.buildScenes();
    }
    protected openMenuHandler():void {
        this.mainMenu.show();
        this.menuButton.menuVisible = true;
    }
    protected closeMenuHandler():void {
        this.mainMenu.hide();
        this.menuButton.menuVisible = false;
    }
    protected task1Handler():void {
        this.sceneMan.show1();
        this.closeMenuHandler();
    }
    protected task2Handler():void {
        this.sceneMan.show2();
        this.closeMenuHandler();
    }
    protected task3Handler():void {
        this.sceneMan.show3();
        this.closeMenuHandler();
    }
}

const game = new Game();
game.init();