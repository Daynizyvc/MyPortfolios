let Contacto = {
    render : async () => {
        let view = `
        <div class="_page contacto">
            <p>
                Podemos contactar mediante las redes sociales:
            </p>
            <a href="http://www.linkedin.com/in/daynizyvc" target="_blank"><img class="img-rs" src="../../../img/linkedin.png"></a>
            <a href="https://twitter.com/dayzzayvc" target="_blank"><img class="img-rs" src="../../../img/gorjeo.png"></a>
            <a href="https://github.com/daynizyvc" target="_blank"><img class="img-rs" src="../../../img/github.png"></a>
            <button id="btn-gmail">
                <img class="img-rs" src="../../../img/gmail.png"></a>
            </button>
            </div> 

            <div id="formContact">
                <form name="contacto" id="formMail">
                    <input class="inputContacto" type="text" placeholder="Nombre">
                    <input class="inputContacto" type="email" placeholder="e-mail">
                    <input class="inputContacto" type="text" placeholder="Asunto">
                    <textarea id="writeMail"  placeholder="Mensaje" rows= 5 cols= 5></textarea>
                    </textarea>
                    <input id="btnSend" type="button" value="Enviar">
                </form>
            </div>
        `
        return view;
    },
    after_render: async () => {
        const btnMail = document.getElementById("btn-gmail");
        const divForm = document.getElementById("formContact");

        const showForm = () =>{
            divForm.style.display = "flex"
            console.log("hola");
        }
        btnMail.addEventListener("click", showForm);

    }
}
export default Contacto;