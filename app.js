import AnimationTimer from "./AnimationTimer.js";
import LeafAnimation from "./LeafAnimation.js";
import PedalAnimation from "./PedalAnimation.js";

window.onload = (event) => {
    const timer = new AnimationTimer();
    const leafAnimation = new LeafAnimation(timer);
    const pedalAnimation = new PedalAnimation(timer);
}
