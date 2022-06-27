class GreenGuy {
    guy

    constructor(xpos, ypos) {

        this.guy = new EnemyGuy(xpos, ypos, "greenArcoEsquerda.png", "flechaParaEsquerda.png")

        this.destroyGreen = this.guy.destroyGuy.bind(this.guy)
        this.acertou = this.guy.acertou.bind(this.guy)
        this.acertado = this.guy.acertado.bind(this.guy)
        this.display = this.guy.display.bind(this.guy)
    }
}