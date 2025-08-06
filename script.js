let progress1 = 0;

function up() {
if (progress1 < 100) {
    progress1 += 100;
    document.getElementById("bar1").style.width = progress1 + "%";
    document.getElementById("p1").innerText = "";
}
}

function down(){
    if (progress1 > 9) {
        progress1 -= 50;
        document.getElementById("bar1").style.width = progress1 + "%";
        
    
    }  else {
              document.getElementById("p1").innerText = "Недочтаточно маны для использования магии";
            }
    
}









const images  = ["https://avatars.mds.yandex.net/i?id=8717961441999728cea93cd6dc24a805936e5bbc-4864053-images-thumbs&n=13 ",
    "https://avatars.mds.yandex.net/i?id=2d379d980ed629f2c0be5be4624866bf29c02236-4011423-images-thumbs&n=13", 
    "https://avatars.mds.yandex.net/i?id=3355bb5aa1088d74963f114a72f8b68821bd5bc2-5236846-images-thumbs&n=13"];
let index = 0;


const textp = ["McLaren P1", "Ferrari LaFerrari", "Porsche 911"]

const img = 
document.getElementById("slider-img");
const prev1 =
document.getElementById("prev")
const next1 =
document.getElementById("next")
const pa =
document.getElementById("h3");

function updateSlaider(){
    img.src = images[index]
    pa.innerText = textp[index]


prev1.disabled = index === 0;
next1.disabled = index === images.length - 1;
    
}


function prev(){
    if (index > 0) {
        index--;
        updateSlaider();
    }
}

function next(){
    if (index < images.length - 1) {
        index++;
        updateSlaider();
    }
    
}









let score = 0;
let interval;
const textt = 
document.getElementById("textt")
const btn = 
document.getElementById("start")


function startGame(){
    document.getElementById("score").innerText = score;
    interval = setInterval(moveEnemy, 1000);
    moveEnemy()
}



function moveEnemy(){
    btn.style.display = "none";
    const enemy = 
document.getElementById("enemy")
    const x = Math.random() * 
(window.innerWidth - 100)
    const y = Math.random() *
(window.innerHeight - 100)



    enemy.style.left = x + "px";
    enemy.style.top = y + "px"
    enemy.style.display = "block";



setTimeout(() =>{
    enemy.style.display = "none" 

    textt.innerText = "Время вышло! Для того что бы сыграть еще раз обновите окно",

    btn.style.display = "none";

    clearInterval(interval);

}, 10000);

}

const enemy = document.getElementById("enemy");
if (enemy) {
    enemy.onclick = () => {
        score++;
        document.getElementById("score").innerText = score;
        enemy.style.display = "none";
    };
}




function showImage(src) {
    const modal = document.getElementById("modal");
    const fullImage = document.getElementById("full-image");
    fullImage.src = src;
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal");
}

function closeImage() {
    const modal = document.getElementById("modal");
    modal.classList.add("modal-hidden");
    modal.classList.remove("modal");
}






function openmodal(){
    document.getElementById("entername").style.display = "block";

}


function closemodal(){
    document.getElementById("entername").style.display = "none";
}

function saveName() {
    const input = document.getElementById("name");
    const name = input.value.trim();

    if (name !== "") {
        document.getElementById("Welcome").innerText = `Welcome, ${name}!`;
        localStorage.setItem('username', name);
        closemodal();
    }
}


window.onload = () => {
    const saved = localStorage.getItem('username');
    const welcome = document.getElementById("Welcome");
    if (saved && welcome) {
        welcome.innerText = `Welcome, ${saved}!`;
    }   

}

function closenav(){
    const nav = document.getElementById("nav")
    nav.classList.toggle("nav-hidden");
}