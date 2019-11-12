let Contacto = {
    render : async () => {
        let view = `
        <div class="_page contacto">
            <p>
                Podemos contactar mediante las redes sociales:
            </p>
            <a href="www.linkedin.com/in/daynizyvc"><img class="img-rs" src="../../../img/linkedin.png"></a>
            <a href="/"><img class="img-rs" src="../../../img/gmail.png"></a>
            <a href="/"><img class="img-rs" src="../../../img/github.png"></a>
            <a href="/"><img class="img-rs" src="../../../img/gorjeo.png"></a>
            </div> 
        `
        return view;
    },
    after_render: async () => {

    }
}
export default Contacto;