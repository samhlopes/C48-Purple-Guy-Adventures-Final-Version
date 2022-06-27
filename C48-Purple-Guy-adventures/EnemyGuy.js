class EnemyGuy {
    npcPodeAtirar
    sprite
    image
    flechas
    flechasImg
    purpleGuy
    blocos
    xpos
    ypos
    isDestroyed = false
    isDirectionLeft
    imagemGuyArcoEsquerda
    imagemFlechaEsquerda
    intervaloTiro = 3000

    constructor(xpos, ypos, guyimg, flechaimg) {
        this.imagemGuyArcoEsquerda = loadImage("images/" + guyimg)
        this.imagemFlechaEsquerda = loadImage("images/" + flechaimg)
        this.sprite = createSprite(xpos, ypos, 20, 57)
        this.sprite.visible = false
        this.xpos = xpos;
        this.ypos = ypos;
        this.checkDirection();
        this.image = createSprite(300, 480, 20, 56)
        if (!this.isLeft()) {
            this.image.mirrorX(this.image.mirrorX() * -1);
            this.checkDirection()
        }
        this.image.addImage(this.imagemGuyArcoEsquerda)
        this.image.x = this.sprite.x
        this.image.y = this.sprite.y - 24
        this.flechas = new Group();
        this.flechasImg = new Group();
        this.npcPodeAtirar = true;

        this.checkDirection();
    }

    isLeft() {
        return purpleGuy.x < this.xpos
    }

    checkDirection() {
        this.isDirectionLeft = this.isLeft()
    }

    atirar() {
        if (this.isDestroyed == false && purpleGuy.y < this.ypos + 30 && purpleGuy.y > this.ypos - 30 && this.npcPodeAtirar == true) {
            this.npcPodeAtirar = false
            setTimeout(() => { this.npcPodeAtirar = true }, this.intervaloTiro);
            var localizacao = this.isLeft() ? -24 : +24
            var FlechaEsquerda = createSprite(this.xpos + localizacao, this.ypos - 10, 20, 2)
            var velocidade = this.isLeft() ? -5 : +5
            FlechaEsquerda.velocityX = velocidade
            FlechaEsquerda.visible = false

            var FlechaEsquerdaImg = createSprite(this.xpos + localizacao, this.ypos - 10, 10, 10)
            FlechaEsquerdaImg.addImage(this.imagemFlechaEsquerda)
            FlechaEsquerdaImg.velocityX = velocidade
            this.flechasImg.push(FlechaEsquerdaImg)
            this.flechas.push(FlechaEsquerda)
            if (!this.isLeft()) {

                FlechaEsquerdaImg.mirrorX(FlechaEsquerdaImg.mirrorX() * -1);
            }
        }
    }

    destroyGuy() {
        this.sprite.destroy()
        this.image.destroy()
        this.isDestroyed = true
    }

    destroyflechas() {
        this.flechas.destroyEach();
        this.flechasImg.destroyEach();
    }

    acertou(alvo) {
        for (var i = 0; i < this.flechas.size(); i++) {
            var flecha = this.flechas.get (i)
            var flechaImg = this.flechasImg.get (i)
            if (flecha.isTouching(alvo)) {
                flecha.destroy()
                flechaImg.destroy()
                return true

            }
        }
        return false
    }

    acertado(atacante) {
        if (this.sprite.isTouching(atacante)) {
            return true
        } return false
    }

    display() {
        this.image.x = this.sprite.x
        this.image.y = this.sprite.y - 22
        this.atirar()
        this.sprite.draw();
        if (this.isDirectionLeft == !this.isLeft()) {
            this.image.mirrorX(this.image.mirrorX() * -1);
            this.checkDirection()
        }
        this.image.draw();
        this.flechas.draw();
        this.flechasImg.draw();
    }
}