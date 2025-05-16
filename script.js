function getRandomImage () {
    const number = Math.floor(Math.random() * 7);
    const imagePath = "./images/omikuji_" + number.toString()+".png";
    return imagePath;
}



function playOmikuji(){
    const maxDraws = 5;
    const today = new Date().toDateString();
    const timer = setInterval(function(){
        document.querySelector("#js-result").setAttribute("src",getRandomImage());
    }, 100);

    setTimeout(function  () {
        clearInterval(timer);
    },3000);
}

document.querySelector("#js-button").addEventListener("click",playOmikuji);
 
