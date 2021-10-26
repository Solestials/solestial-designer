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

        let layers = [
            this.background,
        ];
         
        if (this.feature.name.endsWith('Dyson Ring')) {
            const dysonRing = defaultImages.features.find((f) => f.name === `${this.feature.name}2`);

            if (!dysonRing) {
                console.log(`Failed to locate dyson ring pair!`);
            } else {
                layers.push(dysonRing, this.body, this.feature, this.hand, this.face, this.hand);
            }
        } else {
            layers.push(this.body, this.face, this.hand, this.feature, this.orbit);
        }

        for (const item of layers) {
            if (!item || item.image === '') {
                continue;
            }

            await this.loadImage(item.image, canvasSize);
        }
    }
}
