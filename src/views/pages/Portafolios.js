let Portafolios = {
    render : async () => {
        let view = `
        <div class="_page portafolios">
            <h3>Portafolios</h3>
            <img id="img-portafolios" src="../../../img/error404.svg">
            <a id="next-page" href="#/contacto"><img class="_img -next" src="../../../img/next.png"></a>
        </div>
        `
        return view;
    },
    after_render: async () => {

    }
}
export default Portafolios;