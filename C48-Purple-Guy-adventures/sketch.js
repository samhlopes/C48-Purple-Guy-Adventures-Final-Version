
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var podePular = true;
var podeAgachar = true;
var podeDash = true;
var posicaoX = 0;
var purpleGuyVelocity = 0;
var estaEmDash = false;
var VIVO = "VIVO";
var MORTO = "MORTO";
var FINALDOIS = "FINALDOIS"
var FINALTRES = "FINALTRES"
var EstadoJogo = VIVO;
var podeMirar = true
var greenGuys = []
var purpleGuy
var blocos
var souls = 0
var PinkOne
var PinkGuys = []
var estaEmDashEsquerdo = false
var estaEmDashDireito = false

function preload() {
	imagemPurpleParado = loadImage("images/purpleParado.png")
	imagemPurpleAgachado = loadImage("images/purpleAgachado.png")
	imagemPurplePulando = loadImage("images/purplePulando.png")
	imagemPurpleEsquerda = loadImage("images/purpleCorrendoEsquerda.png")
	imagemPurpleDireita = loadImage("images/purpleCorrendoDireita.png")
	imagemPurpleArcoEsquerdo = loadImage("images/arcoPesquerda.png")
	imagemPurpleArcoDireito = loadImage("images/arcoPdireita.png")
	imagemPurpleEspadaEsquerda = loadImage("images/espada esquerda.png")
	imagemPurpleEspadaDireita = loadImage("images/espada direita.png")
	imagemFlechaDireita = loadImage("images/flechaParaDireita.png")
	imagemFlechaEsquerda = loadImage("images/flechaParaEsquerda.png")

}

function setup() {

	createCanvas(800, 700);

	blocos = new Group();
	collideblocos = new Group();
	flechas = new Group();
	flechasImg = new Group();

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.


	//submundo etapa
	criarBlocos(-310, 0, 50, 1000000)
	criarBlocos(1110, 0, 50, 1000000)
	criarBlocos(400, 2800, 2000, 1000)

	//etapa normal
	criarBlocos(403, 1120, 805, 800)
	criarBlocos(5, -4000, 10, 10000)
	criarBlocos(800, -4000, 10, 10000)
	criarBlocos(200, 650, 40, 20);
	criarBlocos(300, 320, 50, 10)
	criarRedBlocos(400, 500, 20, 20);
	criarRedBlocos(300, 500, 20, 20);
	criarBlocos(270, 600, 20, 20);
	criarBlocos(350, 360, 20, 10)
	criarBlocos(180, 300, 200, 50);
	criarBlocos(350, 610, 50, 20);
	criarBlocos(525, 630, 200, 20);
	criarBlocos(775, 650, 40, 10)
	criarRedBlocos(775, 530, 40, 10)
	criarBlocos(780, 440, 30, 10)
	criarBlocos(570, 390, 50, 10)
	criarRedBlocos(430, 360, 50, 10)
	criarBlocos(600, 590, 50, 60)
	criarBlocos(500, 520, 50, 10)
	criarBlocos(300, 320, 50, 10)
	criarBlocos(680, 610, 50, 10)
	criarRedBlocos(680, 510, 50, 10)
	criarBlocos(650, 430, 50, 10)
	criarBlocos(100, 220, 50, 20);
	criarRedBlocos(34, 150, 50, 20);
	criarBlocos(140, 70, 50, 20);
	criarBlocos(600, 40, 50, 20);
	criarBlocos(400, 140, 300, 20);
	criarBlocos(630, 170, 100, 20);
	criarRedBlocos(700, 140, 30, 20);
	criarBlocos(740, 70, 50, 20);
	criarRedBlocos(470, -29, 100, 20);
	criarBlocos(90, -50, 20, 20);
	criarBlocos(370, -100, 70, 10);
	criarBlocos(220, -150, 70, 10);
	criarBlocos(90, -180, 70, 10);
	criarBlocos(20, -250, 20, 10);
	criarBlocos(140, -295, 20, 10);
	criarBlocos(20, -350, 20, 10);
	criarBlocos(140, -400, 20, 10);
	criarRedBlocos(400, -370, 500, 160);
	criarBlocos(645, -480, 10, 100);
	criarBlocos(155, -480, 10, 100);
	criarBlocos(630, -520, 20, 20);
	criarBlocos(20, -450, 20, 10);
	criarBlocos(140, -500, 20, 10);
	criarBlocos(400, -455, 20, 30);
	criarBlocos(400, -510, 20, 40);
	criarBlocos(718, -540, 156, 30);
	criarBlocos(600, -610, 20, 20);
	criarBlocos(500, -670, 20, 20);
	criarRedBlocos(400, -730, 50, 20);
	criarRedBlocos(300, -790, 50, 20);
	criarRedBlocos(200, -850, 50, 20);
	criarBlocos(770, -730, 50, 20);
	criarBlocos(35, -790, 50, 20);
	criarBlocos(770, -850, 50, 20);

	//ultimo andar
	criarBlocos(450, -920, 300, 20);
	portalBossFight = createSprite (550, -954,35,70)
	portalBossFight.shapeColor = "white"


	//parte das dicas
	criarBlocos(400, 5800, 2000, 1000)
	dicasGoBlock = createSprite(70, 715, 30, 30)
	dicasGoBlock.shapeColor = "yellow"
	dicasBackBlock = createSprite(-200, 5285, 50, 50)
	dicasBackBlock.shapeColor = "purple"
	criarRedBlocos(700,5230,50,10)
	criarBlocos(1060,5230,50,10)






	createPurple();
	createGuys();

	Engine.run(engine);

}


function draw() {
	fill("Purple")
	rectMode(CENTER);

	if (EstadoJogo === MORTO) {
		background(255, 255, 255)
		camera.position.y = 30000
		fill("black")
		textSize(40)
		text("VOCE MORREU", 270, camera.position.y - 120)
		textSize(25)
		text("Clique F5 para reiniciar", 290, camera.position.y - 90)

	}


	if (EstadoJogo === VIVO) {
		background(238, 173, 45)
		fill("Purple")
		text('Use AD para se mover para a esquerda e para a direita, clique S para de agachar', 30, 400)
		text("Pressione J para preparar o arco e A/D para mirar, depois de mirar clique K para atirar", 30, 440)
		text('Quando você atirar sera necessario esperar 1 segundo para atirar novamente', 30, 420)
		textSize(12)
		text('Você encontrou um portal que so te deixara entrar se voce tiver 11 almas corrompidas', 220, -1050)
		textSize(12)
		text("Almas corrompidas ceifadas: " + souls, camera.position.x + 220, camera.position.y - 320)

		configsPurple();
		regrasGreens();
		bossFight();
	}

	if (EstadoJogo === FINALDOIS) {
		if(keyDown("R")){
		EstadoJogo = VIVO;
		this.PinkOne.vida = 5
		this.PinkOne.foiMortoUmaVez = true
		this.PinkOne.guy.sprite.x = 900
		this.PinkOne.guy.sprite.y = 2284
		purpleGuy.x = -100
		purpleGuy.y = 2700
		}
	    PinkOne.finalDois();
	}

	if (EstadoJogo === FINALDOIS) {
		if(keyDown("R")){
		EstadoJogo = VIVO;
		this.PinkOne.vida = 5
		this.PinkOne.guy.sprite.x = 900
		this.PinkOne.guy.sprite.y = 2284
		purpleGuy.x = -100
		purpleGuy.y = 2700
		}
	}

	drawSprites();

}

function configsPurple() {
	if (estaEmDashEsquerdo == false || estaEmDashDireito == false) {
		purpleGuy.velocityY = purpleGuy.velocityY + 0.2
	
		}
	regrasPurple();
	controlesPurple();
	purpleDash();
	dicaspurple();
	regrasFlechasPurple();
	

}


function purpleDash() {
	
	if (keyDown("E") && podeDash == true && !purpleGuy.isTouching(blocos)) {
		//dash para a direita
		setTimeout(() => { purpleGuy.velocityX = 0, estaEmDashDireito = false}, 200);
		purpleGuy.velocityX = +10
		purpleGuy.velocityY = 0
		podeDash = false
		estaEmDashDireito = true
		
	}

	if (keyDown("Q") && podeDash == true && !purpleGuy.isTouching(blocos)) {
		//dash para a esquerda
		setTimeout(() => { purpleGuy.velocityX = 0, estaEmDashEsquerdo = false}, 200);
		purpleGuy.velocityX = -10
		purpleGuy.velocityY = 0
		podeDash = false
		estaEmDashEsquerdo = true
	}


}

function regrasPurple() {
	camera.position.y = purpleGuy.y
	purpleGuy.collide(collideblocos)
	if (purpleGuy.velocityY > -1 && purpleGuy.velocityY < 1 && purpleGuy.isTouching(blocos)) {
		podeAgachar = true;
		podeDash = true;
	} else {
		podeAgachar = false;
	}

}

function createPurple() {
	purpleGuy = createSprite(400, 772, 20, 56)
	//purpleGuy = createSprite(400, -1000, 20, 56)
	purpleGuy.visible = false
	purpleGuyImage = createSprite(400, 600, 20, 56)
	purpleGuyImage.addImage(imagemPurpleParado)
}

function createGuys() {
	PinkOne = new PinkGuy(900, 2286);
	PinkGuys.push(PinkOne)

	GreenOne = new GreenGuy(500, 499);
	GreenTwo = new GreenGuy(600, 15);
	GreenThree = new GreenGuy(300, 115);
	GreenFour = new GreenGuy(90, -75);
	GreenFive = new GreenGuy(350, 340);
	GuardianGreenOne = new GreenGuy(200, -466)
	GuardianGreenTwo = new GreenGuy(600, -466)
	GreenStairsOne = new GreenGuy(770, -755)
	GreenStairsTwo = new GreenGuy(770, -875)
	GreenStairsThree = new GreenGuy(35, -815)
	GreenTipsPrimal = new GreenGuy(1060,5210)
	greenGuys.push(GreenOne);
	greenGuys.push(GreenTwo);
	greenGuys.push(GreenThree);
	greenGuys.push(GreenFour);
	greenGuys.push(GreenFive);
	greenGuys.push(GuardianGreenOne);
	greenGuys.push(GuardianGreenTwo);
	greenGuys.push(GreenStairsOne);
	greenGuys.push(GreenStairsTwo);
	greenGuys.push(GreenStairsThree);
	greenGuys.push(GreenTipsPrimal);
}

function controlesPurple() {

	if (keyDown("N")) {
		createCanvas(1400, 800)
	}
	if (keyDown("space") && purpleGuy.isTouching(blocos)) {
		purpleGuy.velocityY = -5.7
		purpleGuyImage.addImage(imagemPurplePulando)
		podePular = false
	}
	if (keyDown("C")) {
		purpleGuy.velocityY = -3
	}
	else {
		purpleGuyImage.addImage(imagemPurpleParado)

	}
	if (keyDown("V")) {
		purpleGuy.velocityY = -20
	}
	else {
		purpleGuyImage.addImage(imagemPurpleParado)

	}

	if (keyDown("S")) {
		purpleGuy.width = 45
		purpleGuy.height = 20
		purpleGuyImage.x = purpleGuy.x - 10
		purpleGuyImage.y = purpleGuy.y - 40
		purpleGuyImage.addImage(imagemPurpleAgachado)
	} else if (purpleGuy.velocityY < -1 || purpleGuy.velocityY > 1) {
		purpleGuyImage.addImage(imagemPurplePulando)
	}

	
	if (keyDown("S") && podeAgachar == true) {}
	else if (keyDown("A")) {
		purpleGuyImage.x = purpleGuy.x
		purpleGuyImage.y = purpleGuy.y - 22
		if (keyDown("J") && podeMirar == true) {
			purpleGuyImage.addImage(imagemPurpleArcoEsquerdo)

			if (keyDown("K")) {
				setTimeout(() => { podeMirar = true }, 1000);
				FlechaEsquerda = createSprite(purpleGuy.x - 40, purpleGuy.y - 9, 30, 2)
				FlechaEsquerda.velocityX = -5
				FlechaEsquerda.visible = false
				FlechaEsquerdaImg = createSprite(purpleGuy.x - 50, purpleGuy.y - 9, 10, 10)
				FlechaEsquerdaImg.addImage(imagemFlechaEsquerda)
				FlechaEsquerdaImg.velocityX = -5
				flechasImg.add(FlechaEsquerdaImg)
				flechas.add(FlechaEsquerda)
				podeMirar = false
				if (flechas.isTouching(blocos)) {
					flechas.destroyEach();
					flechasImg.destroyEach()
				}

			}

		} else { //if (keyDown("R")) {
		// 	purpleGuyImage.addImage(imagemPurpleEspadaEsquerda)

		// }
		//  else {
			purpleGuy.x = purpleGuy.x - 2
			purpleGuyImage.addImage(imagemPurpleEsquerda)
		}

	} else if (keyDown("D")) {
		purpleGuyImage.x = purpleGuy.x
		purpleGuyImage.y = purpleGuy.y - 22
		if (keyDown("J") && podeMirar == true) {
			purpleGuyImage.addImage(imagemPurpleArcoDireito)
			if (keyDown("K")) {
				setTimeout(() => { podeMirar = true }, 1000);
				var FlechaDireita = createSprite(purpleGuy.x + 40, purpleGuy.y - 9, 30, 2)
				FlechaDireita.velocityX = +5
				FlechaDireita.visible = false
				FlechaDireitaImg = createSprite(purpleGuy.x + 50, purpleGuy.y - 9, 10, 10)
				FlechaDireitaImg.addImage(imagemFlechaDireita)
				FlechaDireitaImg.velocityX = +5
				flechasImg.add(FlechaDireitaImg)
				flechas.add(FlechaDireita)
				podeMirar = false
			}


		} else { //if (keyDown("R")) {
			//purpleGuyImage.addImage(imagemPurpleEspadaDireita)
		//} else {
			purpleGuy.x = purpleGuy.x + 2
			purpleGuyImage.addImage(imagemPurpleDireita)
		}
	}

	if (keyDown("S")) {
		purpleGuyImage.addImage(imagemPurpleAgachado)
		purpleGuy.width = 45
		purpleGuy.height = 20
		purpleGuyImage.x = purpleGuy.x - 10
		purpleGuyImage.y = purpleGuy.y - 40
	} else {
		purpleGuy.width = 20
		purpleGuy.height = 56
		purpleGuyImage.x = purpleGuy.x
		purpleGuyImage.y = purpleGuy.y - 22
	}
}

function criarBlocos(xpos, ypos, xblock, yblock) {
	var bloco = createSprite(xpos, ypos, xblock, yblock)
	var collidebloco = createSprite(xpos, ypos + 10, xblock, yblock)
	bloco.shapeColor = "green"
	collidebloco.shapeColor = "#9b7653 "
	blocos.add(bloco)
	collideblocos.add(collidebloco)


}

function criarRedBlocos(xpos, ypos, xblock, yblock) {
	var bloco = createSprite(xpos, ypos, xblock, yblock)
	var collidebloco = createSprite(xpos, ypos + 10, xblock, yblock)
	bloco.shapeColor = "#8b0000"
	collidebloco.shapeColor = "#9b7653 "
	blocos.add(bloco)
	collideblocos.add(collidebloco)
}

function regrasFlechas(green) {
	green.acertou(blocos)

	if (green.acertou(purpleGuy)) {
		purpleGuy.destroy();
		purpleGuyImage.destroy();
		EstadoJogo = MORTO;
	}


}

function regrasGreens() {
	if (PinkOne.acertado(flechas)) {
		PinkOne.vida--;
	//	console.log(PinkOne.vida)
	}

	PinkOne.acertou(blocos)
	if (PinkOne.acertou(purpleGuy)) {
		EstadoJogo = FINALDOIS
	}

	PinkOne.display();

	for (var i = 0; i < greenGuys.length; i++) {
		var green = greenGuys[i]
		regrasFlechas(green)
		if (green.acertado(flechas)) {
			souls++
			green.destroyGreen();
		}
		green.display();
	}

}

function dicaspurple() {
	text("Toque nesse bloco para ver as dicas", 20, 685)
	text("Toque nesse bloco para voltar ao jogo", -270, 5240)
	//text('A historia do jogo sera contada enquanto voce avança', -50, 5050)
	text('Dica 1:Caso esteja muito dificil para passar, você pode usar o ', -50, 5100)
	text('poder das asas de PurpleGuy para voar clicando e segurando a tecla C', -50, 5120)
	text('Dica 2: Você pode clicar S para agachar no ar ou na terra para desviar das flechas', -50, 5150)
	text('Dica 3: Você pode se mexer no ar mesmo agachado segurando S e clicando nas teclas AD', -50, 5180)
	text('Dica 4: Quando uma plataforma tem a superficie vermelha', 600, 5000)
	text('significa que se voce ficar nela voce pode ser acertado por um inimigo', 600, 5020)
	text('Dica 5: Voce pode mirar no ar, basta segurar o botao J e selecionar a',600,5050)
	text('direção desejada com A ou D e clicar K para atirar enquanto no ar',600,5070)
	if (purpleGuy.isTouching(dicasGoBlock)) {
		purpleGuy.y = 5600
		purpleGuy.x = 400
		createCanvas(1400, 800)
	}
	if (purpleGuy.isTouching(dicasBackBlock)) {
		purpleGuy.y = 772
		purpleGuy.x = 400
		createCanvas(800, 700)
	}
}

function bossFight() {
	if (purpleGuy.isTouching(portalBossFight) && souls >= 11) {
		purpleGuy.x = -100
		purpleGuy.y = 2700
		PinkOne.vida = 5
		createCanvas(1400, 800)
	}
}

function regrasFlechasPurple() {
	for (var i = 0; i < flechas.size(); i++ ) {
		flecha = flechas.get(i)
		flechaImg = flechasImg.get(i)
		if(flecha.isTouching(blocos)) {
			flecha.destroy();
			flechaImg.destroy();
		}
		if(flecha.isTouching(PinkOne.guy.sprite)) {
			PinkOne.vida--;
			flecha.destroy();
			flechaImg.destroy();
			console.log(PinkOne.vida)
			PinkOne.atirar();
		}
	}
}