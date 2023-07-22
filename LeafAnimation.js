import AnimationTimer from "./AnimationTimer.js";


export default class LeafAnimation {
    /**
     * @param {AnimationTimer} timer timer
    */
    constructor(timer) {
        // animation attribs
        this.timer = timer;
        this.finalLeafRotOffset = 180;
        this.initLeafSpreadRadius = 10;
        this.finalLeafSpreadRadius = 25;
        this.leafElements = document.querySelectorAll('img#leaf');
        this.initLeafRots = new Array(this.leafElements.length).fill(0);
        this.finalLeafRots = new Array(this.leafElements.length).fill(0);
        for (let i = 0; i < this.leafElements.length; i++) {
            this.finalLeafRots[i] = 360 / this.leafElements.length * i;
        }
        this.finalLeafRots.map((v, i) => {this.finalLeafRots[i] = v + this.finalLeafRotOffset})
        this.update();
    }

    update() {
        for (let i = 0; i < this.leafElements.length; i++) {
            this.leafElements[i].style.transform = `rotate(${this.initLeafRots[i]}deg) translateY(-${this.initLeafSpreadRadius}vh)`;
            this.initLeafRots[i] = this.lerp(this.initLeafRots[i], this.finalLeafRots[i], .05 * this.timer.delta / 20.0)
        }
        this.initLeafSpreadRadius = this.lerp(this.initLeafSpreadRadius, this.finalLeafSpreadRadius, .05);
        requestAnimationFrame(()=>{this.update()});
    }

    lerp(curr, dest, f) {
        return (dest - curr) * f + curr;
    }

    mLerp(origin, curr, dest, f) {

    }
}