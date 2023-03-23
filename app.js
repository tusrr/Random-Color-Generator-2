const colors = ["green", "#F2F553","red", "rgba(113,101,200)"];

const btn= document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    //get random number b/w 0 -3 colors[]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
    console.log(randomNumber);
});

function getRandomNumber(){

    return  Math.floor(Math.random()*colors.length);

}