let Home = {
    render : async () => {
        let view = `
        <div class="container">  
                <div>
                    <img id="logo-Yael" src="././img/logoYaelV.png">
                </div> 

                <h1>¡Hola! Soy Yael Velasco</h1>        
                <div id="writeName" class="writeName">
                </div>
                <div class="btnPage">
                    <a id="btnAbout" href="#/aboutme">
                        Acerca de Mí
                    </a>
                </div>
        </div>     
        `
        return view;
    },
    after_render: async () => {

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
            },200);
        };

        writing('<Soy Desarrolladora Web/>')

            }
}
export default Home;