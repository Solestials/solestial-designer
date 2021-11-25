import { fabric } from 'fabric';
import { Attribute } from './Types';
import * as defaultImages from './Images'; 

export class Planet {
    private canvas?: fabric.Canvas | fabric.StaticCanvas;

    constructor(
        public background: Attribute,
        public body: Attribute,
        public face: Attribute,
        public hand: Attribute,
        public feature: Attribute,
        public orbit: Attribute,
        public orbit2: Attribute,
    ) {
    }

    private async loadImage(base64: string, canvasSize: number) {
        return new Promise<void>((res) => {
            fabric.Image.fromURL(base64, (img) => {
                img.selectable = false;
                img.scaleToHeight(canvasSize);
                img.scaleToWidth(canvasSize);
                this?.canvas?.add(img);
                res();
            });
        });
    }

    public async setCanvas(canvas: fabric.Canvas | fabric.StaticCanvas) {
        this.canvas = canvas;
    }

    public async draw(canvasSize: number) {
        if (!this.canvas) {
            return;
        }

        await this.canvas.clear();

        if ((this.canvas as any).selection) {
            (this.canvas as any).selection = false;
        }

        const layers = [
            this.background,
        ];
            
        if (this.feature.name.endsWith('Dyson Ring')) {
            const dysonRing = defaultImages.features.find((f) => f.name === `${this.feature.name}2`);

            if (!dysonRing) {
                console.log(`Failed to locate dyson ring pair!`);
            } else {
                layers.push(dysonRing);
            }
        } else if (this.feature.name === 'Strong Magnetism') {
            layers.push(this.feature);
        }

        layers.push(this.body);

        if (this.body.name === 'Mushroom') {
            const mushie = defaultImages.additionalAssets.find((f) => f.name === 'Mushroom2');

            if (!mushie) {
                console.log('Failed to locate mushroom cap!');
            } else {
                if (this.face.name === 'Hearts') {
                    layers.push(mushie, this.face);
                } else {
                    layers.push(this.face, mushie);
                }
            }
        } else {
            layers.push(this.face);
        }

        layers.push(this.hand);

        if (this.feature.name !== 'Strong Magnetism') {
            layers.push(this.feature);
        }

        layers.push(this.orbit, this.orbit2);
         
        for (const item of layers) {
            if (!item || item.image === '') {
                continue;
            }

            await this.loadImage(item.image, canvasSize);
        }
    }
}
