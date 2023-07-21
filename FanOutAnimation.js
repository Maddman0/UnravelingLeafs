export default class FanOutAnimation {
    constructor() {
        this.offset = 180;
        this.currSpread = 10;
        this.spread = 25;
        this.elements = document.querySelectorAll('img');
        this.currRots = new Array(this.elements.length).fill(0);
        this.destRots = new Array(this.elements.length).fill(0);
        for (let i = 0; i < this.elements.length; i++) {
            this.destRots[i] = 360 / this.elements.length * i;
        }
        this.destRots.map((v, i) => {this.destRots[i] = v + this.offset})
        this.update();
    }

    update() {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].style.transform = `rotate(${this.currRots[i]}deg) translateY(-${this.currSpread}vh)`;
            this.currRots[i] = this.lerp(this.currRots[i], this.destRots[i], .05)
        }
        this.currSpread = this.lerp(this.currSpread, this.spread, .05);
        requestAnimationFrame(()=>{this.update()});
    }

    lerp(curr, dest, f) {
        return (dest - curr) * f + curr;
    }
}