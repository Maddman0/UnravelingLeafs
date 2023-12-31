export default class AnimationTimer {
    constructor()
    {
        // Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        window.requestAnimationFrame(() =>
        {
            this.update()
        })
    }

    update()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        window.requestAnimationFrame(() =>
        {
            this.update()
        })
    }
}
