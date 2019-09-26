const spaceForName = document.getElementById("writeName");

//Genera colores aleatorios
let randomColor = Math.floor(Math.random()*16777215).toString(16);

let writing = str =>{
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        spaceForName.innerHTML += arrFromStr[i];
                
        i++;
        // spaceForName.style.color = '#'+randomColor;
        if(i=== arrFromStr.length){
            clearInterval(printStr);   
        }
    },500);
};

writing('Yael Velasco')

