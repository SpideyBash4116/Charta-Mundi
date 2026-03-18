import * as PIXI from 'pixi.js';

// Define the game state
interface GameState {
    selectedProvince: Province | null;
    turn: number;
}

class Province extends PIXI.Graphics {
    id: number;
    owner: string;
    population: number;
    neighbors: number[];

    constructor(id: number, path: number[], owner: string) {
        super();
        this.id = id;
        this.owner = owner;
        this.population = Math.floor(Math.random() * 100000);
        this.neighbors = [];

        this.interactive = true;
        this.buttonMode = true;
        
        // Draw the province shape based on coordinates
        this.beginFill(this.getCountryColor(owner));
        this.lineStyle(1, 0x000000, 0.5);
        this.drawPolygon(path);
        this.endFill();

        this.on('pointerdown', () => this.onSelect());
    }

    getCountryColor(owner: string): number {
        const colors: Record<string, number> = {
            "France": 0x3355FF,
            "Prussia": 0x333333,
            "Neutral": 0xAAAAAA
        };
        return colors[owner] || 0xFFFFFF;
    }

    onSelect() {
        console.log(`Province ${this.id} clicked. Owner: ${this.owner}`);
        // Highlight logic here
    }
}

// Initialize Pixi App
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

const worldLayer = new PIXI.Container();
app.stage.addChild(worldLayer);

// Example: Create a simple square province
const samplePath = [100, 100, 200, 100, 200, 200, 100, 200];
const p1 = new Province(1, samplePath, "France");
worldLayer.addChild(p1);
