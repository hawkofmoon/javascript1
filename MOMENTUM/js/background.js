const bgImage = document.createElement('img');
document.body.appendChild(bgImage);


const images = ['0.jpeg','1.jpeg','2.jpeg']
let randomImg = images[Math.floor(Math.random()*images.length)];


bgImage.src = `./img/randomImg` ;


