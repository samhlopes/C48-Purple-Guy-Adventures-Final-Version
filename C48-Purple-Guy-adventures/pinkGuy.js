class PinkGuy {
    vida = 7

    imagemMirandoBaixoEsquerda
    imagemMirandoEsquerda
    imagemPinkParado
    direcaoEsquerda = true
    cansouDeAtirar = false
    foiMortoUmaVez = false
    tempoDoPrimeiroFinal = false
    constructor(xpos, ypos) {
        this.guy = new EnemyGuy(xpos, ypos, "pinkParado.png", "flechaPinkEsquerda.png")

        this.destroyGreen = this.guy.destroyGuy.bind(this.guy)
        this.acertou = this.guy.acertou.bind(this.guy)
        this.acertado = this.guy.acertado.bind(this.guy)
        this.display = this.guy.display.bind(this.guy)
        this.guy.intervaloTiro = 2000;
        this.guy.atirar = this.atirar.bind(this)
        this.imagemMirandoBaixoEsquerda = loadImage("images/PinkMirandoPBaixoEsquerda.png")
        this.imagemMirandoEsquerda = loadImage("images/pinkMirandoEsquerda.png")
        this.imagemPinkParado = loadImage("images/pinkParado.png")
    }

    atirar() {
        //900, 2284
        if (this.vida == 6) {
            if (keyDown("R")) {
                this.vida = 5
                this.guy.sprite.x = 900
                this.guy.sprite.y = 2284
            }
            background(128, 128, 128)
            camera.position.y = 30000
            fill("black")
            textSize(15)
            text("Final 1 de 3", 350, camera.position.y - 190)
            textSize(40)
            text("VOCÊ ATINGIU O FINAL NEUTRO", 100, camera.position.y - 120)
            textSize(20)
            text("Você não atacou Pink Guy depois de reencontrá-lo, cada um seguiu seu caminho,", 60, camera.position.y - 90)
            text("Purple Guy voltou para sua casa e continuou treinando para ficar mais forte e Pink Guy", 60, camera.position.y - 60)
            text("continua aumentando seu exército para algo grande, essa é a melhor escolha?", 80, camera.position.y - 30)
            text("Pressione R para voltar no tempo e fazer outra escolha", 170, camera.position.y + 200)
        }

        if (this.vida == 5) {
            this.guy.image.addImage(this.imagemPinkParado)
            this.guy.sprite.velocityX = 0
            if (this.tempoDoPrimeiroFinal == false) {
                setTimeout(() => {
                    if (this.vida == 5 && this.foiMortoUmaVez == false) {
                        this.vida = 6
                    }
                }, 20000)
                this.tempoDoPrimeiroFinal = true
            }
        }



        if (this.vida == 3 || this.vida == 4) {
            this.guy.image.addImage(this.imagemMirandoEsquerda)
            this.guy.imagemFlechaEsquerda = loadImage("images/flechaPinkEsquerda.png")
            if (purpleGuy.y < this.guy.ypos + 30 && purpleGuy.y > this.guy.ypos - 30 && this.guy.npcPodeAtirar == true) {

                //tiro do meio
                this.guy.intervaloTiro = 2000;
                this.guy.npcPodeAtirar = false
                setTimeout(() => { this.guy.npcPodeAtirar = true }, this.guy.intervaloTiro);
                var localizacao = this.guy.isLeft() ? -24 : +24
                var FlechaEsquerda = createSprite(this.guy.xpos + localizacao, this.guy.ypos - 10, 30, 3)
                var velocidade = -10
                FlechaEsquerda.velocityX = velocidade
                FlechaEsquerda.visible = false

                var FlechaEsquerdaImg = createSprite(this.guy.xpos + localizacao, this.guy.ypos - 9, 10, 10)
                FlechaEsquerdaImg.addImage(this.guy.imagemFlechaEsquerda)
                FlechaEsquerdaImg.velocityX = velocidade
                this.guy.flechasImg.add(FlechaEsquerdaImg)
                this.guy.flechas.add(FlechaEsquerda)
                if (!this.guy.isLeft()) {

                    FlechaEsquerdaImg.mirrorX(FlechaEsquerdaImg.mirrorX() * -1);


                }

                //tiro de baixo
                this.guy.npcPodeAtirar = false
                setTimeout(() => { this.guy.npcPodeAtirar = true }, this.guy.intervaloTiro);
                var localizacao = this.guy.isLeft() ? -24 : +24
                var FlechaEsquerda = createSprite(this.guy.xpos + localizacao, this.guy.ypos - -5, 30, 3)
                var velocidade = -10
                FlechaEsquerda.velocityX = velocidade
                FlechaEsquerda.visible = false

                var FlechaEsquerdaImg = createSprite(this.guy.xpos + localizacao, this.guy.ypos - -6, 10, 10)
                FlechaEsquerdaImg.addImage(this.guy.imagemFlechaEsquerda)
                FlechaEsquerdaImg.velocityX = velocidade
                this.guy.flechasImg.add(FlechaEsquerdaImg)
                this.guy.flechas.add(FlechaEsquerda)
                if (!this.guy.isLeft()) {

                    FlechaEsquerdaImg.mirrorX(FlechaEsquerdaImg.mirrorX() * -1);


                }

                //tiro de cima
                this.guy.npcPodeAtirar = false
                setTimeout(() => { this.guy.npcPodeAtirar = true }, this.guy.intervaloTiro);
                var localizacao = this.guy.isLeft() ? -24 : +24
                var FlechaEsquerda = createSprite(this.guy.xpos + localizacao, this.guy.ypos - 25, 30, 3)
                var velocidade = -10
                FlechaEsquerda.velocityX = velocidade
                FlechaEsquerda.visible = false

                var FlechaEsquerdaImg = createSprite(this.guy.xpos + localizacao, this.guy.ypos - 24, 10, 10)
                FlechaEsquerdaImg.addImage(this.guy.imagemFlechaEsquerda)
                FlechaEsquerdaImg.velocityX = velocidade
                this.guy.flechasImg.add(FlechaEsquerdaImg)
                this.guy.flechas.add(FlechaEsquerda)
                if (!this.guy.isLeft()) {

                    FlechaEsquerdaImg.mirrorX(FlechaEsquerdaImg.mirrorX() * -1);


                }

            }
        }



        if (this.vida == 2) {

            if (this.cansouDeAtirar == true) {
                this.vida = 1
            }

            this.guy.image.addImage(this.imagemMirandoBaixoEsquerda)
            this.guy.imagemFlechaEsquerda = loadImage("images/PinkFlechaPBaixo.png")
            if (this.guy.sprite.y > 1940) {
                this.guy.sprite.velocityY = -10

            } else {
                this.guy.sprite.velocityY = 0
            }

            if (this.guy.sprite.x < 1090 && this.direcaoEsquerda == true) {
                this.guy.sprite.velocityX = +10

            } else {
                //this.guy.sprite.velocityX = 0
                this.direcaoEsquerda = false

            }
            if (this.guy.sprite.x > -250 && this.direcaoEsquerda == false) {

                this.guy.sprite.velocityX = -10
                setTimeout(() => { this.cansouDeAtirar = true, this.guy.sprite.velocityX = 0 }, 20250);

            } else {
                this.direcaoEsquerda = true
                //this.guy.sprite.velocityX = 0
            }

            if (this.guy.npcPodeAtirar == true) {
                this.guy.intervaloTiro = 250;

                //flecha do meio
                this.guy.npcPodeAtirar = false
                setTimeout(() => { this.guy.npcPodeAtirar = true }, this.guy.intervaloTiro);
                var FlechaEsquerda = createSprite(this.guy.sprite.x - 10, this.guy.sprite.y, 3, 30)
                var velocidade = +10
                FlechaEsquerda.velocityY = velocidade
                FlechaEsquerda.visible = false

                var FlechaEsquerdaImg = createSprite(this.guy.sprite.x - 9, this.guy.sprite.y, 10, 10)
                FlechaEsquerdaImg.addImage(this.guy.imagemFlechaEsquerda)
                FlechaEsquerdaImg.velocityY = velocidade
                this.guy.flechasImg.add(FlechaEsquerdaImg)
                this.guy.flechas.add(FlechaEsquerda)

                //flecha da esquerda
                this.guy.npcPodeAtirar = false
                setTimeout(() => { this.guy.npcPodeAtirar = true }, this.guy.intervaloTiro);
                var FlechaEsquerda = createSprite(this.guy.sprite.x - 25, this.guy.sprite.y, 3, 30)
                var velocidade = +10
                FlechaEsquerda.velocityY = velocidade
                FlechaEsquerda.visible = false

                var FlechaEsquerdaImg = createSprite(this.guy.sprite.x - 24, this.guy.sprite.y, 10, 10)
                FlechaEsquerdaImg.addImage(this.guy.imagemFlechaEsquerda)
                FlechaEsquerdaImg.velocityY = velocidade
                this.guy.flechasImg.add(FlechaEsquerdaImg)
                this.guy.flechas.add(FlechaEsquerda)

                //flecha da direita
                this.guy.npcPodeAtirar = false
                setTimeout(() => { this.guy.npcPodeAtirar = true }, this.guy.intervaloTiro);
                var FlechaEsquerda = createSprite(this.guy.sprite.x - -5, this.guy.sprite.y, 3, 30)
                var velocidade = +10
                FlechaEsquerda.velocityY = velocidade
                FlechaEsquerda.visible = false

                var FlechaEsquerdaImg = createSprite(this.guy.sprite.x - -6, this.guy.sprite.y, 10, 10)
                FlechaEsquerdaImg.addImage(this.guy.imagemFlechaEsquerda)
                FlechaEsquerdaImg.velocityY = velocidade
                this.guy.flechasImg.add(FlechaEsquerdaImg)
                this.guy.flechas.add(FlechaEsquerda)
            }
        }



        if (this.vida == 1) {
            this.guy.intervaloTiro = 2000;
            if (this.guy.sprite.y < 2284) {
                this.guy.sprite.velocityY = +5
            } else {
                this.guy.sprite.velocityY = 0
            }

            if (this.guy.sprite.x < 900) {
                this.guy.sprite.velocityX = +5
                this.guy.image.addImage(this.imagemMirandoEsquerda)
                this.guy.imagemFlechaEsquerda = loadImage("images/flechaPinkEsquerda.png")
            } else {
                this.guy.sprite.velocityX = 0
            }

            if (this.guy.npcPodeAtirar == true) {

                //tiro do meio
                this.guy.intervaloTiro = 1000;
                this.guy.npcPodeAtirar = false
                setTimeout(() => { this.guy.npcPodeAtirar = true }, this.guy.intervaloTiro);
                var localizacao = this.guy.isLeft() ? -24 : +24
                var FlechaEsquerda = createSprite(this.guy.xpos + localizacao, purpleGuy.y, 30, 3)
                var velocidade = -10
                FlechaEsquerda.velocityX = velocidade
                FlechaEsquerda.visible = false

                var FlechaEsquerdaImg = createSprite(this.guy.xpos + localizacao, purpleGuy.y, 10, 10)
                FlechaEsquerdaImg.addImage(this.guy.imagemFlechaEsquerda)
                FlechaEsquerdaImg.velocityX = velocidade
                this.guy.flechasImg.add(FlechaEsquerdaImg)
                this.guy.flechas.add(FlechaEsquerda)
                if (!this.guy.isLeft()) {

                    FlechaEsquerdaImg.mirrorX(FlechaEsquerdaImg.mirrorX() * -1);


                }
            }

        }



        if (this.vida == 0) {
            background(128, 0, 128)
            camera.position.y = 30000
            fill("black")
            textSize(15)
            text("Final 3 de 3", 350, camera.position.y - 190)
            textSize(40)
            text("VOCÊ ATINGIU O FINAL PROVAVELMENTE BOM", 0, camera.position.y - 120)
            textSize(20)
            text("Você impediu Pink Guy de completar seu plano provavelmente maléfico", 60, camera.position.y - 90)
            text("e agora pode viver em paz sem se preocupar com possiveis ameaças", 60, camera.position.y - 60)
            this.guy.destroyflechas();

        }


    }

    finalDois() {
        background(255, 0, 255)
        camera.position.y = 30000
        fill("black")
        textSize(15)
        text("Final 2 de 3", 350, camera.position.y - 190)
        textSize(40)
        text("VOCÊ ATINGIU O FINAL PROVAVELMENTE RUIM", 0, camera.position.y - 120)
        textSize(20)
        text("Você tentou impedir Pink Guy de completar seu plano provavelmente maléfico", 60, camera.position.y - 90)
        text("mas falhou e foi acertado por uma das flechas amaldiçoadas de Pink Guy, tendo sua alma sugada", 60, camera.position.y - 60)
    }
}

