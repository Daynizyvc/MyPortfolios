let Contacto = {
    render : async () => {
        let view = `
        <div class="_page contacto">
            <p>
                Podemos contactar mediante las redes sociales:
            </p>
            <a href="http://www.linkedin.com/in/daynizyvc"><img class="img-rs" src="../../../img/linkedin.png"></a>
            <a href="https://twitter.com/dayzzayvc"><img class="img-rs" src="../../../img/gorjeo.png"></a>
            <a href="https://github.com/daynizyvc"><img class="img-rs" src="../../../img/github.png"></a>
            <a href="#/error404"><img class="img-rs" src="../../../img/gmail.png"></a>
            </div> 
        `
        return view;
    },
    after_render: async () => {

    }
}
export default Contacto;